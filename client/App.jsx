//import react and component from react
import React, { Component } from 'react';
import Main from './components/Main.jsx'

class App extends Component {
  constructor(props) {
    super(props)
  }

componentDidMount() {
  console.log('App component mounted');
}

render () {
  return (
  <div>
    <h3> ): </h3>
    <div>
    <Main />
    </div>
    </div>
  );
}

}


export default App;