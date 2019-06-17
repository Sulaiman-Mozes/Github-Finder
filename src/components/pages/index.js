import React, { Fragment, useEffect, useContext } from 'react';
import Users from '../users/Users';
import UserSearch from '../users/UserSearch';
import Alert from '../common/Alert';
import GithubContext from '../../context/github';

const Home = () => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.getUsers();
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <Alert />
      <UserSearch />
      <Users />
    </Fragment>
  );

}

export default Home;
