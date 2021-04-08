const newsReducer = (state={
  data: {},
  pinned: []
}, action) => {

  switch (action.type){
    case 'fetchNews':
      return state

    case 'fetchNewsSource':
      return state

    case 'bookmarkNews':
      return {
        ...state,
        pinned: [...state.pinned, action.payload]
      }

    case 'storeNews':
      console.log('hereeeee',state)
      return {
        ...state,
        data: action.payload
      }

    default:
      return state
  }
}

export default newsReducer