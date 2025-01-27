import axios from 'axios';
import { rapidApiKey } from '../../constants/info';

export const fetchTrendingVideos = async (params) =>{
    const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/trending',
        params: {
          geo: 'US',
          ...params,
          lang: 'en'
        },
        headers: {
          'x-rapidapi-key': rapidApiKey,
          'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'
        }
      };

      try{
        const response = axios.request(options);
        return (await response).data.data;
      }catch(error){
        console.log('error : ', error.message);
        return [];
      }
      
      

}

