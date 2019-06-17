import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../common/Spinner';
import GithubContext from '../../context/github';
import NotFound from '../common/NotFound';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users, usersError } = githubContext;
  return (
    loading ? <Spinner /> :
      (
        usersError !== null ? <NotFound title='Error' message={usersError.message} /> :
          (
            <div style={userStyle}>
              {users.map(user => <UserItem user={user} key={user.id} />)}
            </div>
          )
      ))
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
export default Users;