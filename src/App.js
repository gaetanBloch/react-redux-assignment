import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div>
        <ol>
          <li>
            Turn this app into one which does NOT use local state (in components) but instead uses Redux
          </li>
        </ol>
        <hr/>
        <Persons />
      </div>
    );
  }
}

export default App;
