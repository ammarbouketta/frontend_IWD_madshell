import React, {Component} from 'react';
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom';
import ValuesPage from './pages/ValuesPage';
import Subs from './pages/Subs';
import SubsIntro from './pages/SubsIntro';
import Payment from './pages/Payment';

class App extends Component {



  
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

}

export default App