import { apiCall } from '../../api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from '../constants';
 import * as actions from './actions';

 import configureMockStore from 'redux-mock-store';
 import thunkMiddleware from 'redux-thunk';

 const mockStore = configureMockStore([thunkMiddleware]);

 describe('setSearchField',()=>{
     const text = 'woo';
     const expectedAction = {
        type: CHANGE_SEARCHFIELD, payload: text 
     }
    it('should create actions to search robots',() =>{
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });
 });

 describe('requestRobots',()=>{
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
       type: REQUEST_ROBOTS_PENDING 
    }
   it('handle requesting robotos from API',() =>{
       expect(action[0]).toEqual(expectedAction);
   });
});