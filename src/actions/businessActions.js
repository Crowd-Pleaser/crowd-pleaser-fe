import { useEffect } from 'react';
import { fetchBusinessPolls, fetchBusinessOfferings, postOffering, fetchBusiness, postPoll, fetchBusinessOrders, patchOrder } from '../services/business-api';
import { toast } from 'react-toastify';

export const SET_ORDERS = 'SET_ORDERS';
export const setBusinessOrders = (id) => dispatch => {
  return fetchBusinessOrders(id)
    .then(res => {
      dispatch({
        type: SET_ORDERS,
        payload: res
      });
    });
};

export const UPDATE_ORDER = 'UPDATE_ORDER';
export const markOrderClosed = (id, offeringId) => dispatch => {
  return patchOrder(id, offeringId)
    .then(res => {
      dispatch({ 
        type: UPDATE_ORDER,
        payload: res
      });
    });
};

export const SET_OFFERINGS = 'SET_OFFERINGS';
export const setBusinessOfferings = (id) => dispatch => {
  return fetchBusinessOfferings(id)
    .then(res => {
      dispatch({
        type: SET_OFFERINGS,
        payload: res
      });
    });
};

export const SET_POLLS = 'SET_POLLS';
export const setBusinessPolls = (id) => dispatch => {
  return fetchBusinessPolls(id)
    .then(res => {
      dispatch({
        type: SET_POLLS,
        payload: res
      });
    });
};

export const ADD_OFFERING = 'ADD_OFFERING';
export const addBusinessOffering = (offering, history) => dispatch => {
  return postOffering(offering)
    .then(res => {
      dispatch({
        type: ADD_OFFERING,
        payload: offering
      });
      history.push('/business/all-offerings');
      toast.success('Offering Added!');
    }).catch(err => {
      toast.error(err.message);
    });
};

export const ADD_POLL = 'ADD_POLL';
export const addBusinessPoll = (poll, history) => dispatch => {
  return postPoll(poll)
    .then(res => {
      dispatch({
        type: ADD_POLL,
        payload: poll
      });
      history.push('/business/all-polls');
      toast.success('Poll Added!');
    }).catch(err => {
      toast.error(err.message);
    });
};
