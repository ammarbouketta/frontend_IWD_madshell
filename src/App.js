import React, {Component} from 'react';
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom';
import ValuesPage from './pages/ValuesPage';
import Subs from './pages/Subs';
import SubsIntro from './pages/SubsIntro';
import Payment from './pages/Payment';

class App extends Component {

<<<<<<< HEAD
=======


  
>>>>>>> 6226759b887084cc54006c424a932b78e7420cb4
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            {/* <Layout /> */}
            {/* <ValuesPage/> */}
            {/* <Subs/>
            <SubsIntro/> */}
            <Payment/>
          </div>
        </BrowserRouter>
    )
  }
<<<<<<< HEAD
=======

>>>>>>> 6226759b887084cc54006c424a932b78e7420cb4
}

export default App