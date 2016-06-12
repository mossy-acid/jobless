import * as helper from './actionHelper.js';

export const GITJOBS_GET_REQUEST = 'GITJOBS_GET_REQUEST';
export const GITJOBS_GET_RESPONSE = 'GITJOBS_GET_RESPONSE';

const ENDPOINT = 'GitJobs';

const getRequest = function(id) {
  return {
    type: GITJOBS_GET_REQUEST,
    id
  }
}

const getResponse = function(status, data) {
  return {
    type: GITJOBS_GET_RESPONSE,
    status,
    data
  }
}

export const get = function() {
  return helper.get({
    request: getRequest,
    response: getResponse,
  }, ENDPOINT);
}
