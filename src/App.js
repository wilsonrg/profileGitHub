import React from 'react';
import GithubImage from './1_WaaXnUvhvrswhBJSw4YTuQ.png';
import './App.css';

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form method="post">
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" required />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Search</button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        <img src={GithubImage} alt="" className="responsive rounded-circle" height="200" />
        <h1 className="pt-5"><a href="https://github.com/wilsonrg" target="_new">Wilson RG</a></h1>
        <h3>São Paulo</h3>
        <p><a href="http://www.marsites.com.br" target="_new" className="text-info">http://www.marsites.com.br</a></p>
      </div>
    </div>
  );
}

export default App;
