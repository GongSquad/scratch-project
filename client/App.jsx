//import react and component from react
import React, { Component } from 'react';


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
    <h3> Hello worldsss </h3>
    </div>
  );
}

}


export default App;