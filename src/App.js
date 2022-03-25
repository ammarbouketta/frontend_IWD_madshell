import React from 'react';

import {RiEmpathizeFill} from "react-icons/ri"
import ChoicePage from './pages/ChoicePage';
import FieldChoice from './pages/FieldChoice';
import IntroPage from "./pages/IntroPage"
import LetGetStarted from './pages/LetGetStarted';
import QuizPage from './pages/QuizPage';
function App() {
  return (
    <div className="App ">
 
       <IntroPage/>
       <ChoicePage/>
       <LetGetStarted/>
       <FieldChoice/>
       <QuizPage/>
    </div>
  );
}

export default App;
