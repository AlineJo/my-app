import './App.css';
import React from 'react'
import MyAppHeader from './MyComponents/MyAppHeader'
import MyAppBody from './MyComponents/MyAppBody';
import { Input, Segment } from 'semantic-ui-react'

//https://www.youtube.com/watch?v=UDb5KH75grQ&list=PLK-0XjrR8o7Ue1rguZAyQvFWIKrlxHZLh&index=7 


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

    this.onChange = this.onChange.bind(this)
  }

  onChange(event, data) {
    this.setState({ name: data.value })
  }


  render() {
    return (
      <div className="App">
        <MyAppHeader name={this.state.name} />
        <MyAppBody onChange={this.onChange} />

      </div>
    );
  }
}

export default App;
