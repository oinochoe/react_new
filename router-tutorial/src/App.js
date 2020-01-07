import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈으로</Link>
        </li>
        <li>
          <Link to="/about">소개페이지</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profiles" component={Profiles} />
    </>
  );
}

export default App;
