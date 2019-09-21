const api = require("../../helpers/api");

exports.kills = (req, res) => {
  api
    .authenticate(req.query.token)
    .account()
    .achievements()
    .get()
    .then(achievements => {
      const achievement = achievements.find(
        achievement => achievement.id === 283
      );
      res.end(achievement.current.toLocaleString());
    })
    .catch(error => {
      res.end("Could not load accounts WvW kills.");
    });
};

exports.matchup = async (req, res) => {
  try {
    api.authenticate(req.query.token);

    // 1. Get accounts worlds
    // 2. Get WvW Matches
    // 3. Get world names
    const [account, matches, worlds] = await Promise.all([
      api.account().get(),
      api
        .wvw()
        .matches()
        .all(),
      api.worlds().all()
    ]);

    // Loop through and check if world ID is on either team
    const match = matches.find(match => {
      return (
        match.all_worlds.red.includes(account.world) ||
        match.all_worlds.blue.includes(account.world) ||
        match.all_worlds.green.includes(account.world)
      );
    });

    // Put all world IDs in the same array
    const worldsInMatchIDs = [
      ...match.all_worlds.red,
      ...match.all_worlds.blue,
      ...match.all_worlds.green
    ];

    // Get world names
    const worldsInMatch = worlds.filter(world =>
      worldsInMatchIDs.includes(world.id)
    );

    // Create link world object
    const sortIntoHostAndLinks = makeSortIntoHostAndLinkedWorlds(
      worldsInMatch,
      match
    );
    const red = sortIntoHostAndLinks("red");
    const blue = sortIntoHostAndLinks("blue");
    const green = sortIntoHostAndLinks("green");

    // Create link world string
    let matchupString = createWorldString(red) + " vs. ";
    matchupString += createWorldString(blue) + " vs. ";
    matchupString += createWorldString(green);
    res.end(matchupString);
  } catch (error) {
    res.end("Could not load matchup data.");
  }
};

const makeSortIntoHostAndLinkedWorlds = (worlds, match) => color => {
  let host = null;

  const links = worlds.reduce((links, world) => {
    if (!match.all_worlds[color].includes(world.id)) {
      return links;
    }

    if (world.id === match.worlds[color]) {
      host = world;
      return links;
    }

    return [...links, world];
  }, []);

  return {
    host,
    links,
    kills: match.kills[color],
    deaths: match.deaths[color]
  };
};

/**
 * Create a string with the world name and links in parenthesis.
 * @param {Object} world Object containing the host, links, kills and deaths.
 */
const createWorldString = world => {
  let output = "";
  output += world.host.name;

  if (world.links.length > 0) {
    output += " (";

    output += world.links.reduce((links, { name }, index) => {
      return (links += world.links.length === index + 1 ? name : name + ", ");
    }, "");

    output += ")";
  }

  output += ` [${calculateKillDeathRatio(world.kills, world.deaths)}]`;

  return output;
};

/**
 * Inspired by: https://stackoverflow.com/a/11832950
 * @param {Number} kills Amount of kills
 * @param {Number} deaths Amount of deaths
 */
const calculateKillDeathRatio = (kills, deaths) => {
  return Math.round((kills / deaths) * 10 + Number.EPSILON) / 10;
};
