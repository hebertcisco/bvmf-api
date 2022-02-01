import iconv from 'iconv-lite';
import axios, { AxiosResponse } from 'axios';

async function fetchPage(baseUrl: string) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}`)
      .then((res: AxiosResponse<ArrayBuffer>) => {
        return res.data
      }).then((arrayBuffer) => iconv.decode(Buffer.from(arrayBuffer), 'utf-8').toString())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}
export default fetchPage;
