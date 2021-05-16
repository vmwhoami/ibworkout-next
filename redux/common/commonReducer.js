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
        submitted: true, error: false, errors: []
      };
    case ERROR:
      return {
        error: true, errors: Object.values(action.payload)
      };
    default:
      return state;
  }
};
export default commonReducer;
