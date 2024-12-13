import logo from './logo.svg';
import './App.css';

import React, { useState, Component } from 'react';
// import React, { Component } from 'react';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// export default function BelajarStateFunctionalComponent (props) {
//   const [count, setCount] = useState(0);
//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div className="App">
//       <div className='App-header'>
//         <h4>BelajarStateFunctionalComponent</h4>
//         <h1>Count: {count}</h1>
//         <button onClick={() => incrementCount()}>Increment Count</button>
//       </div>
//     </div>
//   )
// }

// export default class BelajarPropsClassComponent extends Component{
//   constructor(props) {
//     super(props);
//     this.state = { name: "Jhon Doe" };
//   }

//   render() {
//     return <ChildComponent name={this.state.name} />;
//   }
// }

// class ChildComponent extends Component {
//   render(){
//     return (
//       <div className='App'>
//         <h1>Belajar props Class Component</h1>
//         <div>Hallo, nama saya {this.props.name}!</div>

//       </div>
//     )
//   }
// }

// export default function BelajarPropsFunctionalComponen() {
//   const [name, setName] = useState("Jhon Doe");
//   return <ChildComponent name={name} />;
// }

// function ChildComponent(props) {
//   return (
//     <div className='App'>
//       <h1>Belajar Props Functional Component</h1>
//       <h4>Hallo, my name is {props.name}</h4>
//     </div>
//   )
// }

// export default class BelajarRenderClass extends Component {
//   render() {
//     return(
//       <div className='App'>
//         <h>Hello everybody, welcome to </h>
//         <h1><bold>nonstopstudio</bold></h1>
//       </div>
//     )
//   }

// }

// export default class BelajarConstructorClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: 0}
//   }

//   render(){
//     return(
//       <div className='App'>
//         <h>Hello everybody, welcome to</h>
//         <h1>NonstopStudio</h1>
//       </div>
//     )
//   }
// }

// buat class 
// constructor
// didmount  
// render jsx

export default class BelajarDidMountComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000)
    
  }

  componentWillUnmount(){
    console.log("Will Unmount is Running");
    clearInterval(this.timer);
    
  }

  // componentDidUpdate(prevProps, prevState){
  //   if (this.state.count !== prevState.count && !this.state.isUpdate) {
  //     console.log("DID UPDATE is running", this.state.count);
  //     this.setState({count: this.state.count + 9, isUpdate: true})
      
  //   }
  // }

  render(){
    return(
      <div className='App'>
        <h>Hello everybody, welcome to</h>
        <h1>NonstopStudio, {this.state.count}</h1>
      </div>
    )
  }
}
