// mod.cjs
// eslint-disable-next-line no-shadow
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const chalk = require('chalk');
const { DateTime } = require('luxon');

exports.handler = async (event) => {
  const { region } = JSON.parse(event.body);
  const POKE_API = `https://pokeapi.co/api/v2/pokedex/${region}`;

  console.log(chalk.blue(`${DateTime.now()} | Calling Pokedex (Region: '${region}')`));
  console.log(chalk.blue(`${DateTime.now()} |     Fetching from ${POKE_API}`));

  const response = await fetch(POKE_API);
  const data = await response.json();

  console.log(chalk.blue(`${DateTime.now()} |     Fetched ${data.pokemon_entries.length} entries`));

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: data.pokemon_entries,
    }),
  };
};
