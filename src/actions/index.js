import axios from "axios";

export const storeNews = (payload) => {
  return {
    type: 'storeNews',
    payload: payload
  }
}

export const bookmarkNews = (payload) => {
  return {
    type: 'bookmarkNews',
    payload: payload
  }
}

export const fetchNews = () => {
  return (dispatch) => {
    return axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d7e9f929d3424a2e87567925b2b2926f')
      .then(({data}) => {
        console.log(data)
        dispatch(storeNews(data))
      })
  }
}

export const fetchNewsSource = (source) => {
  return (dispatch) => {
    return axios.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey=d7e9f929d3424a2e87567925b2b2926f')
      .then(({data}) => {
        console.log(data)
        dispatch(storeNews(data))
      })
  }
}