import './App.css';
import React from 'react'
import MyAppHeader from './MyComponents/MyAppHeader'

// create component class to use component state

class App extends React.Component {

  // constractor used for
  //#1 setup and init local state
  //#2 bind event handlers
  constructor(props) {
    super(props)
    this.state = {
      name: "Yousuf"
    }
  }


  render() {
    return (
      <div className="App">
        <MyAppHeader name={this.state.name} />
      </div>
    );
  }
}

export default App;
