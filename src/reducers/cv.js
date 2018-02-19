const initialState = {
  name: 'Nick Ooms',
};

const cv = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default cv;
