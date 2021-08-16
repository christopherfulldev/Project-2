import axios from "axios";

class GetOnApi {
  
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.rawg.io/api',
      params: {
        key: "0f863245b63641b3903f13e17e029a8c",
      }
    })
  }
  getGameList = () => {
    return this.api.get('/games')
  }
}

export default new GetOnApi();