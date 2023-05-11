const axios = require("axios");

exports.handler = async (event, context) => {
  const { city } = event.queryStringParameters;
  const API_SECRETE = process.env.API_SECRETE;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_SECRETE}&units=metric&lang=en`;

  try {
    const { data } = await axios.get(url);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    const { status, statusText, headers, data } = err.respose;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};
