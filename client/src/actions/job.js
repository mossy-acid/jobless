import * as helper from './actionHelper.js';

export const JOB_GET_REQUEST = 'JOB_GET_REQUEST';
export const JOB_GET_RESPONSE = 'JOB_GET_RESPONSE';

export const JOB_POST_REQUEST = 'JOB_POST_REQUEST';
export const JOB_POST_RESPONSE = 'JOB_POST_RESPONSE';

export const JOB_PUT_REQUEST = 'JOB_PUT_REQUEST';
export const JOB_PUT_RESPONSE = 'JOB_PUT_RESPONSE';

export const JOB_REMOVE_REQUEST = 'JOB_REMOVE_REQUEST';
export const JOB_REMOVE_RESPONSE = 'JOB_REMOVE_RESPONSE';

const ENDPOINT = 'position';

const getRequest = status => {
  return {
    type: JOB_GET_REQUEST,
    status
  };
};

const getResponse = (status, data) => {
  return {
    type: JOB_GET_RESPONSE,
    status,
    data
  };
};

export const get = id => {
  return helper.get({
    request: getRequest,
    response: getResponse,
  }, ENDPOINT + '/' + id.toString());
};

const postRequest = status => {
  return {
    type: JOB_POST_REQUEST,
    status
  };
};

const postResponse = (status, data) => {
  return {
    type: JOB_POST_RESPONSE,
    status,
    data,
  };
};

export const post = data => {
  return helper.post({
    request: postRequest,
    response: postResponse,
  }, ENDPOINT, data);
};

const putRequest = status => {
  return {
    type: JOB_PUT_REQUEST,
    status,
  };
};

const putResponse = (status, data) => {
  return {
    type: JOB_PUT_RESPONSE,
    status,
    data
  };
};

export const put = data => {
  return helper.put({
    request: putRequest,
    response: putResponse,
  }, ENDPOINT, data);
};

const removeRequest = status => {
  return {
    type: JOB_REMOVE_REQUEST,
    status,
  };
};

const removeResponse = (status, data) => {
  return {
    type: JOB_REMOVE_RESPONSE,
    status,
    data
  };
};

export const remove = data => {
  console.log('REMOVE JOB: ', data)
  return helper.remove({
    request: removeRequest,
    response: removeResponse,
  }, ENDPOINT, data);
};
