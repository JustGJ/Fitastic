export const getExercises = async () => {
  const response = await fetch(
    'https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'x-rapidapi-key': 'f7a2a32877msh7ce616d661cf1b7p157c2cjsn31c138dfe5b7',
      },
    },
  );
  const data = await response.json();
  return data;
};
