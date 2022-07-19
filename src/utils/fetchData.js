export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '06b7742ab6msh0cca1d68ffcc3fcp19a4a1jsn3ccfa6bc8e06',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}