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
 
   beforeEach(() => {
     store = mockStore({
       users: {}
     });
   });
   it('handle requesting robotos from API',() =>{
      store.dispatch(actions.requestRobots());
      const action = store.getActions();
      const expectedAction = {
         type: REQUEST_ROBOTS_PENDING 
      }
      expect(action[0]).toEqual(expectedAction);
   });
   it('handle requesting robotos from API',async() =>{
      fetch = jest.fn()
      .mockReturnValue(Promise.resolve({
         json: () => Promise.resolve({
            data: [{ id: 1, name: "Vasilis" }]
         })
      }));
      
      await store.dispatch(actions.requestRobots());
      const action = store.getActions();
      console.log(action);
   });
});