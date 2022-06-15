import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formDataStudent, router) => async (dispatch) => {
  
  try {
    const { data } = await api.signInStudent(formDataStudent);

    dispatch({ type: AUTH, data });

    

    router('/Student_module');
    
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formDataStudent, router) => async (dispatch) => {
  try {
    const { data } = await api.signUpStudent(formDataStudent);

    dispatch({ type: AUTH, data });

    router('/student_module');
  } catch (error) {
    console.log(error);
  }
};
