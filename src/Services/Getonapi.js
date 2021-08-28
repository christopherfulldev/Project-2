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
    return this.api.get('/games?page_size=10')
  }

  getSearch (search) {
    return this.api.get(`/games?search=${search}$page_size=1`)
  }

  getSort (filter) {
    return this.api.get('/${filter}')
  }
}

export default new GetOnApi();

/*const getOnApi = (path) => {
  axios.get(path).then(
      (fulfilled) => {
          let gameList = fulfilled.data;
      },
  );
}
getOnApi();*/