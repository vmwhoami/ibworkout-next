import axios from 'axios'
import { SUBMITTED, ERROR } from './commontTypes';

const changeSubmitted = () => ({
  type: SUBMITTED,
});

const submissionError = (errors) => ({
  type: ERROR,
  payload: errors
});

const submitData = (data) => async (dispatch) => {


  try {
    const response = await axios({
      method: 'post',
      url: 'https://vmwhoami-portfolio-mern.herokuapp.com/api/v1/ibworkout',
      data: data
    });

    if (response.data.status === "success") {
      dispatch(changeSubmitted())
    }

  } catch (error) {

    dispatch(submissionError(error))
  }

};

export { changeSubmitted, submissionError, submitData };
