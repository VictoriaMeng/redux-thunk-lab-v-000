function manageCats(state = {loading: false, pictures: []}, action) {
  switch (action.type) {
    case 'FETCH_CATS':
      return {loading: false, pictures: action.payload}

    default:
      return state
  }
}

export default manageCats;