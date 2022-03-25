import React from 'react';

import {RiEmpathizeFill} from "react-icons/ri"
import ChoicePage from './pages/ChoicePage';
import FieldChoice from './pages/FieldChoice';
import IntroPage from "./pages/IntroPage"
import LetGetStarted from './pages/LetGetStarted';
function App() {
  return (
    <div className="App ">
 
       <IntroPage/>
       <ChoicePage/>
       <LetGetStarted/>
       <FieldChoice/>
    </div>
  );
}

export default App;
