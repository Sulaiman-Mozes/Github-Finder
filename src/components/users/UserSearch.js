import React, { Fragment, useState, useContext } from 'react';
import GithubContext from '../../context/github';
import AlertContext from '../../context/alerts';

const UserSearch = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { clearUsers, users, searchUsers } = githubContext
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      alertContext.setAlert('Please enter  search item', 'warning')
    } else {
      searchUsers(text);
      setText('');
    }
  }
  return (
    <Fragment>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block"
          onClick={clearUsers}
        >
          Clear
          </button>
      )}
    </Fragment>
  )
}

export default UserSearch;
