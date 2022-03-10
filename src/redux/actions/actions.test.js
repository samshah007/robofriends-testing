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
 import promiseMiddleware from "redux-promise-middleware";

 const mockStore = configureMockStore([thunkMiddleware,promiseMiddleware]);
describe('setSearchField',()=>{
   const text = 'woo';
   const expectedAction = {
      type: CHANGE_SEARCHFIELD, payload: text 
   }
   it('should create actions to search robots',() =>{
         expect(actions.setSearchField(text)).toEqual(expectedAction);
   });
});
 describe("User Actions", () => {
   let store;
   const expectedAction = {
      type: REQUEST_ROBOTS_PENDING 
   }
   
   beforeEach(() => {
     store = mockStore({
       users: {}
     });
   });
   it('check request robots API pending status',() =>{
      store.dispatch(actions.requestRobots());
      const action = store.getActions();
      expect(action[0]).toEqual(expectedAction);
   });
   it('check request robots API sucess status',() =>{
      fetch = jest.fn()
      .mockReturnValue(Promise.resolve({
         json: () => Promise.resolve({
            data: [{ id: 1, name: "Vasilis" }]
         })
      }));
      store.dispatch(actions.requestRobots()).then(() =>{
         const action = store.getActions();
         expect(action.length).toEqual(2);
         expect(action[0]).toEqual(expectedAction);
         expect(action[1].payload.data[0].name).toEqual('Vasilis');
      });
   });
   it('check request robots API fail status',() =>{
      fetch = jest.fn()
      .mockReturnValue(Promise.reject({
         json: () => Promise.reject({
            error: "Something bad happened"
         })
       }));
      store.dispatch(actions.requestRobots()).catch(() =>{
         const action = store.getActions();
         expect(action.length).toEqual(2);
         expect(action[1].payload.error).toEqual('Something bad happened');
      });
   });
});