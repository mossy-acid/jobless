import { USER_GET_RESPONSE, USER_POST_RESPONSE, USER_PUT_RESPONSE } from './actions/user.js';
import { JOB_GET_RESPONSE, JOB_POST_RESPONSE, JOB_PUT_RESPONSE } from './actions/job.js';
import { JOBLIST_GET_RESPONSE } from './actions/jobList.js';
import { SESSION_GET_RESPONSE } from './actions/session.js';
import { EVENT_GET_RESPONSE, EVENT_POST_RESPONSE, EVENT_PUT_RESPONSE, EVENT_REMOVE_RESPONSE } from './actions/event.js';
import {DEBUG_ON, DEBUG_OFF} from './actions/debug.js';



export const debug = function(state = false, action) {
  switch(action.type) {
    case DEBUG_ON:
      return true;
    case DEBUG_OFF:
      return false;
    default:
      // !state || console.log('ACTION DISPATCHED:',JSON.stringify(action));
      return state;
  }
};

export const user = function(state={}, action) {
  switch(action.type) {
    case USER_GET_RESPONSE:
      return action.data;
    case USER_POST_RESPONSE:
      return action.data;
    case USER_PUT_RESPONSE:
      return action.data;
    default:
      return state
  }
};

export const job = function(state={}, action) {
  switch(action.type) {
    case JOB_GET_RESPONSE:
      return action.data;
    case JOB_POST_RESPONSE:
      return action.data;
    case JOB_PUT_RESPONSE:
      return action.data;
    default:
      return state;
  }
};

export const jobList = function(state=[], action) {
  switch(action.type) {
    case JOBLIST_GET_RESPONSE:
      return action.data;
    case JOB_POST_RESPONSE:
      return state.concat([action.data]);
    default:
      return state;
  }
};

export const event = function(state={}, action) {
  switch(action.type) {
    case EVENT_GET_RESPONSE:
      return action.data;
    case EVENT_POST_RESPONSE:
      return action.data;
    case EVENT_PUT_RESPONSE:
      return action.data;
    case EVENT_REMOVE_RESPONSE:
      return action.data;
    default:
      return state;
  }
};

export const session = function(state={}, action) {
  console.log('session get response invoked')
  switch(action.type) {
    case SESSION_GET_RESPONSE:
      return action.data;
    default:
      return state;
  }
};

