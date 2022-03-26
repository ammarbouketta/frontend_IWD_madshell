import React, {Component} from 'react';
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom';

import Logo from './assets/logo.svg'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <div className="App">
          <img src={Logo} alt="I CAREer" className='absolute mt-8 ml-20 z-50' />
            <Layout />
          </div>
        </BrowserRouter>
    )
  }
}

export default App