import React from 'react';
import aboutImg from '../../assets/img/about.jpg'

const About = () => (
  <>
    <br />
    <h2 style={{ textAlign: 'center' }}>Easy Way To Search For Your Github Friends</h2>
    <br />
    <img src={aboutImg} alt="Loading" style={{}} />
    <br /><br />
    <h1>What is GitHub?</h1>
    <br />
    <p>GitHub is a code hosting platform for version control and collaboration.
     It lets you and others work together on projects from anywhere.</p>
    <br />
    <p>This tutorial teaches you GitHub essentials like repositories,
    branches, commits, and Pull Requests. You’ll create your own Hello World
    repository and learn GitHub’s Pull Request workflow, a popular way to create and review code.</p>
  </>
)

export default About;
