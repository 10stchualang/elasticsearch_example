const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });
const cityData = require('./city.json');
const Promise = require('bluebird');

const initSearchIndex = async () => {
  Promise.all(
    cityData.map(async city => {
      await client.index({
        index: 'city',
        body: city
      });
    })
  );
};

module.exports = { client, initSearchIndex };
