import React from 'react';

import explorePaths from "../assets/explorePaths.png"
import tryOurQuiz from "../assets/tryOurQuiz.png"
import Footer from '../components/Footer';
import  { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import Header from '../components/Header';
import getStarted from "../assets/getStarted.png"
import secondRect from "../assets/secondRect.png"
import quizImage from "../assets/quizImage.png"
import {FiCheckSquare} from "react-icons/fi"
import {GrCheckbox} from "react-icons/gr"
function QuizPage() {
    const questions = [
		{
            key:1,
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false,isChecked:false },
				{ answerText: 'London', isCorrect: false,isChecked:false },
				{ answerText: 'Paris', isCorrect: true,isChecked:false },
				{ answerText: 'Dublin', isCorrect: false ,isChecked:false},
			],
		},
		{
            key:2,
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false,isChecked:false },
				{ answerText: 'Elon Musk', isCorrect: true,isChecked:false },
				{ answerText: 'Bill Gates', isCorrect: false ,isChecked:false},
				{ answerText: 'Tony Stark', isCorrect: false,isChecked:false },
			],
		},
		{
            key:3,
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true ,isChecked:false},
				{ answerText: 'Intel', isCorrect: false,isChecked:false },
				{ answerText: 'Amazon', isCorrect: false,isChecked:false },
				{ answerText: 'Microsoft', isCorrect: false,isChecked:false },
			],
		},
		{
            key:4,
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false,isChecked:false },
				{ answerText: '4', isCorrect: false,isChecked:false },
				{ answerText: '6', isCorrect: false,isChecked:false },
				{ answerText: '7', isCorrect: true,isChecked:false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [showImage, setShowImage] = useState(true);
    const [answers, setAnswers] = useState([]);
	const handleAnswerOptionClick = (answerOption) => {
		// if (answerOption.isCorrect) {
		// 	setScore(score + 1);
        // }
        setAnswers(answers+"*"+answerOption.answerText)
        answerOption.isChecked=!answerOption.isChecked
        const nextQuestion = currentQuestion + 1;
        if(questions.length==nextQuestion){
            setShowImage(false)
        }
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return (
      <div className="h-[calc(100vh)]" > 
     
      <Header/>
      <div id="quizes" className=' h-[calc(100vh-80px)] flex  items-center justify-between px-40   z-0'>
              
              <div >
            
              {showScore ? (
				<div className='score-section font-medium text-xl'>
					Your answers are: {answers} 
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<h1 className="relative font-bold text-2xl "><span className="relative z-50 bottom-1">Question {currentQuestion + 1} </span><img src={secondRect} alt="" className="absolute -left-1 bottom-0.5 w-32 z-0  h-4"/></h1>
						</div>
						<div className='question-text font-medium text-xl my-8'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section '>
                        {
                        questions[currentQuestion].answerOptions.map((answerOption) => (
                            <>
							<button className="border-[#FFC727] border bg-[#fff] hover:opacity-70 text-lg font-medium w-[calc(40vw)]  py-1 rounded-xl flex flex-start items-center px-8" onClick={() => handleAnswerOptionClick(answerOption)}>
                                {/* <div>{answerOption.isChecked? <FiCheckSquare/>:<GrCheckbox/>}</div> */}
                                {answerOption.answerText}
                                </button>
                           <br/>
                            {/* <div>
                            <input type="checkbox" id={answerOption.answerText.toString()} name={answerOption.answerText} />
                            <label for={answerOption.answerText}>{answerOption.answerText}</label>
                            </div>  */}
                            </>
                            
						))
                        }
                        
                        <div className="flex  items-center justify-between px-8">
                            <h3 className="text-lg font-medium  ">Progress: </h3>
                            <div className="w-96 h-6 ">
                                 <ProgressBar completed={currentQuestion*100/questions.length} bgColor={"#FFC727"} />
                            </div>
                        </div>
					</div>
                   
				</>
			)}
           
           </div>
           <div className={showImage? "block":"hidden"}>
                  <img src={quizImage} alt="" className="w-80 h-60 mb-10"/>
            </div>
      </div>
      </div>
  )
  }
export default QuizPage




