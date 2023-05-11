import axios from "axios";

const GET = (city) => {
  const data = axios
    .get(`/.netlify/functions/fetch-weather?city=${city}`)
    .then((res) => res.data);

  return data;
};

export { GET };
