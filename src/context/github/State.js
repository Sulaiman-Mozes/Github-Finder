import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './index';
import GithubReducer from './Reducer';
import * as types from '../actionTypes';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    userError: null,
    usersError: null,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search For Users
  const searchUsers = async (text) => {
    setLoading()
    try {
      const resp = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
        process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      dispatch({
        type: types.SEARCH_USERS,
        payload: resp.data.items,
      })
    } catch (error) {
      dispatch({
        type: types.GET_USERS_FAILURE,
        payload: error.response ?error.response.data : { message: 'Network Error' }
      })
    }
  }

  // Get All Users
  const getUsers = async () => {
    try {
      const resp = await axios.get(
        `https://api.github.com/users?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
        process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      dispatch({
        type: types.GET_ALL_USERS,
        payload: resp.data,
      })
    } catch (error) {
      dispatch({
        type: types.GET_USERS_FAILURE,
        payload: error.response ?error.response.data : { message: 'Network Error' }
      })
    }
  }

  // Get A Single User
  const getUser = async (username) => {
    setLoading()
    try {
      const resp = await axios.get(
        `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
        process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      const repos = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
        process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      dispatch({
        type: types.GET_USER,
        user: resp.data,
        repos: repos.data,
      })
    } catch (error) {
      dispatch({
        type: types.GET_USER_FAILURE,
        payload: error.response.data || { message: 'Network Err' }
      })
    }
  }

  // Clear All users From the State
  const clearUsers = () => dispatch({ type: types.CLEAR_USERS })

  // Set Loading To True
  const setLoading = () => dispatch({ type: types.SET_LOADING });


  const { users, user, repos, loading, userError, usersError } = state;
  return <GithubContext.Provider
    value={{
      users, user, repos, loading, searchUsers, getUsers, clearUsers,
      getUser, userError, usersError,
    }}
  >
    {props.children}
  </GithubContext.Provider>
}

export default GithubState;
