import { combineReducers } from 'redux';
import common from './common';
import slide from './slide';

const combine = combineReducers({
  common,
  slide
});

export default combine;
