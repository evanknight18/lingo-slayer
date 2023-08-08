import { useReducer } from 'react';
import {
    CREATE_USER,
    CREATE_LESSON,
    UPDATE_LESSON,
    DELETE_LESSON,
    CREATE_QUIZ,
    UPDATE_QUIZ,
    DELETE_QUIZ,
    LOGIN_USER,
    LOGOUT_USER
  } from './actions';
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case CREATE_USER:
        return {
          ...state,
          user: action.user,
        };
  
      case LOGIN_USER:
        return {
          ...state,
          user: action.user,
          loggedIn: true,
        };
  
      case LOGOUT_USER:
        return {
          ...state,
          user: null,
          loggedIn: false,
        };
  
      case CREATE_LESSON:
        return {
          ...state,
          lessons: [...state.lessons, action.lesson],
        };
  
      case UPDATE_LESSON:
        return {
          ...state,
          lessons: state.lessons.map((lesson) => lesson.id === action.id ? action.lesson : lesson),
        };
  
      case DELETE_LESSON:
        return {
          ...state,
          lessons: state.lessons.filter((lesson) => lesson.id !== action.id),
        };
  
      case CREATE_QUIZ:
        return {
          ...state,
          quizzes: [...state.quizzes, action.quiz],
        };
  
      case UPDATE_QUIZ:
        return {
          ...state,
          quizzes: state.quizzes.map((quiz) => quiz.id === action.id ? action.quiz : quiz),
        };
  
      case DELETE_QUIZ:
        return {
          ...state,
          quizzes: state.quizzes.filter((quiz) => quiz.id !== action.id),
        };
  
      default:
        return state;
    }
  };
  
  export function useEducationReducer(initialState) {
    return useReducer(reducer, initialState);
  }
  