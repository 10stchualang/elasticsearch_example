const { client } = require('../../server/elasticsearch');

export default async (req, res) => {
  res.statusCode = 200;
  const { city, country } = req.query;
  try {
    const { body } = await client.search({
      index: 'city',
      body: {
        query: {
          match: { city, country }
        }
      }
    });
    console.log(body);
    res.send(body.hits.hits);
  } catch (error) {
    console.log(error);
  }
};
