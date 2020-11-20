import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

const MyFirstComponent = (props) => {

  return (<p>This is My MyFirstComponent!!! \ {props.name} / </p>)
}

const MySecondComponent = ({ name }) => {

  return (<p>Value passed is \ {name} / </p>)
}

const item = <h3>Huh</h3>


const MyThirdComponent = ({ n1, n2 }) => {

  return (<div>
    {item}
    <MyFirstComponent name={n1} />
    <MySecondComponent name={n2}/>
  </div>)
}

const semanticButtonItem = 
<div>
<Button primary>Primary</Button>
<Button secondary>Secondary</Button>
</div>


const element =
  <div>
    <h2>Mewo element!!!</h2>
    <h5>meaw meaw</h5>
    {item}
    <MyFirstComponent name={'MEAW'} />
    <MyFirstComponent name={'neaw'} />
    <MyFirstComponent name={'mrrawo'} />
    <MySecondComponent name={'Snow'} />

<br/>
<br/>
<br/>

<MyThirdComponent n1={'hello'} n2={'world'}/>

<br/>
<br/>
<br/>

{semanticButtonItem}
  </div>





ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
