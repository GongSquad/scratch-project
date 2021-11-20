import * as types from '../constants/actionTypes';
import app from '../../server/server.js'
// normal redux action creator for creating an entry
// export const addEntryActionCreator = (entryID) => {
//   return {
//     type: types.ADD_ENTRY,
//     payload: entryID
//   }
// }

// redux thunk version-->
export const createEntry = formValues => (dispatch) => {
  app.post('/test', formValues)
    .then(({ status }) => {
      if (status === 200) dispatch({ type: types.ADD_ENTRY})
    })
    .catch(console.log(error));
};


// for getting/ fetching the posts from the database
// export const fetchPosts = () => {
//   return {
//       type: types.FETCH_POSTS
//   };
// };