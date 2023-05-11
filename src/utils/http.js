const GET = async (city) => {
  const res = await fetch(`/.netlify/functions/fetch-weather?city=${city}`);
  const data = await res.json();

  return data;
};

export { GET };
