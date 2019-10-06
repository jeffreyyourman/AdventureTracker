import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { ActionSheetIOS } from 'react-native';

const authreducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    default:
      return state;
  }
}

const signup =  (dispatch) => {
  return async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signup', {email, password})
      console.log('data',response.data);

    } catch (err) {
      console.log(err.message)
      dispatch({ type: 'add_error', payload: 'Something went wrong with signing up' })
    }
  }
}

const signin = (dispatch) => {
  return ({email, password}) => {
    
  }
}

const signout = (dispatch) => {
  return () => {
    
  }
}

export const { Provider, Context } = createDataContext(
  authreducer, 
  {signup, signin,signout},
  { isSignedIn: false, errorMessage: '' }
)