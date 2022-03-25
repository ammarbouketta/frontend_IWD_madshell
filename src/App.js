import React, {Component} from 'react';
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Layout />
          </div>
        </BrowserRouter>
    )
  }
// import {RiEmpathizeFill} from "react-icons/ri"
// import ChoicePage from './pages/ChoicePage';
// import FieldChoice from './pages/FieldChoice';
// import IntroPage from "./pages/IntroPage"
// import LetGetStarted from './pages/LetGetStarted';
// function App() {
//   return (
//     <div className="App ">
 
//        <IntroPage/>
//        <ChoicePage/>
//        <LetGetStarted/>
//        <FieldChoice/>
//     </div>
  // );
}

export default App