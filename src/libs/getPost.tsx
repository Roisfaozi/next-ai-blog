import axios from 'axios';

type GetlatestPosts = {
  q: string,
  page: number,
  limit: number
}

export default async function getLatestPosts(q = 'javascript', limit = '6', page = '0') {
  const url: any = `${process.env.RAPID_API_URL}/search/stories`
  const options: any = {
    params: {
      q: q,
      page: page,
      limit: limit
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
  };

  const res = await axios.get(url, options).then(response => {
    let data = response.data.data;

    return data
  }).catch(error => {
    console.error('Error:', error);
  });
  return res
}

