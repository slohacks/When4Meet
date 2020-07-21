import { combineReducers } from 'redux';

import Meeting from './Meeting';
import Availability from './Availability';

const rootReducer = combineReducers({ Meeting, Availability });

export default rootReducer;
