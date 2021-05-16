import { SUBMITTED, ERROR } from './commontTypes';

const initial = {
  submitted: false,
  error: false,
  errors: []
};

const commonReducer = (state = initial, action) => {
  switch (action.type) {
    case SUBMITTED:
      return {
        ...state, submitted: true, error: false, errors: []
      };
    case ERROR:
      return {
        ...state, error: true, errors: Object.values(action.payload)
      };
    default:
      return state;
  }
};
export default commonReducer;
