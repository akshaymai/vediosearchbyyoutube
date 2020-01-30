import axios from 'axios';
const KEY='AIzaSyA3OUeg_DUG5siF0la2QJ2bcVePDmbuK-I'



export const baseParams = {
    part: "snippet",
    maxResults: 15,
    key: KEY
  };

  export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
  })

