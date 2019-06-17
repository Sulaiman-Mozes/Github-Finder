import React from 'react';

const Repos = ({ repos }) => (
  <>
  <br/>
  <h2>Recent Work</h2>
    {repos.map(repo => (
      <div className="card" key={repo.id}>
        <h3>
          <a href={repo.html_url}>{repo.name}</a>
        </h3>
      </div>
    )
    )}
  </>
)

export default Repos;
