import React, { useEffect, useContext } from 'react';
import Spinner from '../common/Spinner';
import RepoItems from '../repos';
import { Link } from 'react-router-dom';
import NotFound from '../common/NotFound';
import GithubContext from '../../context/github';

const User = (props) => {
  const githubContext = useContext(GithubContext);

  const { user, loading, repos, getUser, userError } = githubContext;

  useEffect(() => {
    const { match: { params: { username } } } = props
    getUser(username);
    // eslint-disable-next-line
  }, []);

  const {
    avatar_url, login, bio, name, blog, location,
    followers, following, company, hireable, html_url,
    public_gists, public_repos } = user;

  return (
    <>
      <Link to='/' className="btn btn-light">
        Back To Home
        </Link>
      <br /><br />
      {loading ? <Spinner /> :
        (
          userError !== null ? <NotFound title='Error' message={userError.message}/> :
            (
              <>
                <div className="card grid-2">
                  <div className="all-center">
                    <img
                      src={avatar_url}
                      className="round-img"
                      alt=""
                      style={{ width: '150px' }}
                    />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                    <p>Hireable:  {
                      hireable ?
                        (<i className="fas fa-check text-success" />) :
                        (<i className="fas fa-times-circle text-danger" />)}
                    </p>
                  </div>
                  <div>
                    {bio && (
                      <>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                      </>
                    )}
                    <a href={html_url} className="btn btn-dark my-1">
                      Vist Github Profile
                      </a>
                    <ul>
                      <li>
                        <strong>Username:</strong> {login}
                      </li>
                      <li>
                        {company && <><strong>Company:</strong> {company}</>}
                      </li>
                      <li>
                        {blog && <><strong>Website:</strong> {blog}</>}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="badge badge-primary">Followers: {followers}</div>
                  <div className="badge badge-success">Following: {following}</div>
                  <div className="badge badge-light">Public Repos: {public_repos}</div>
                  <div className="badge badge-dark">Public Gists: {public_gists}</div>
                </div>
                <RepoItems repos={repos} />
              </>
            )
        )
      }
    </>
  )
}

export default User;