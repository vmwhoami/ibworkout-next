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
  const response = await axios({
    method: 'post',
    url: '/api/mailer',
    data: data
  });
  if (response.status === 206) {
    const { errors } = response.data
    dispatch(submissionError(errors))
  }
  if (response.status === 200) {
    console.log(response.data.success);
    dispatch(changeSubmitted())
  }
};

export { changeSubmitted, submissionError, submitData };
