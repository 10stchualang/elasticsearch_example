const axios = require('axios').default;

const port = process.env.PORT || 1337;

const axiosInstance = axios.create({
  baseURL: `http://localhost:${port}`
});

module.exports = axiosInstance;
