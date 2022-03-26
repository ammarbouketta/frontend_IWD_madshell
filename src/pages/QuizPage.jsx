import React from 'react';
import  { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import Header from '../components/Header';
import secondRect from "../assets/secondRect.png"
import quizImage from "../assets/quizImage.png"
function QuizPage() {
    const questions = [
		{
            key:1,
			questionText: 'Are you a numbers whiz?',
			answerOptions: [
				{ answerText: "Yes! I'm the next Einstein!",  },
				{ answerText: "I'm good with math, but it's not my favorite subject.",  },
				{ answerText: "No - it's really not my thing.", },
				
			],
		},
		{
            key:2,
			questionText: "Are you good at writing?",
			answerOptions: [
				{ answerText: "Yes! I'm the next Dickens!",  },
				{ answerText: "Yes - just don't ask me to write anything more than a few pages",  },
				{ answerText: "I write well, but I don't enjoy it so much.",  },
			
			],
		},
		{
            key:3,
			questionText: "Are you a tech geek?",
			answerOptions: [
				{ answerText: "Yes! Tech comes naturally to me.",  },
				{ answerText: "Yes - but it's more of a hobby for me",  },
				{ answerText: "No - unless there's drama in the group chat, I try to avoid long pieces of writing.",  },
			],
		},
		{
            key:4,
			questionText: "Languages - can you learn them easily?",
			answerOptions: [
				{ answerText: "I know my first language, and some words and phrases I picked up at school.",  },
				{ answerText: "I speak a lot of languages.",  },
				{ answerText: "Not really, I'm reliant on having a mutual language with the locals.",  },
				
			],
		},
		{
            key:5,
			questionText: "Are you good at teaching?",
			answerOptions: [
				{ answerText: "Yes! I can turn any space into my classroom!",  },
				{ answerText: "I can explain things, yes.",  },
				{ answerText: "I can show someone how to do something when needed.",  }, 
				{ answerText: "Not in this lifetime.",  },
			],
		},
		{
            key:6,
			questionText: "What do you want to be?",
			answerOptions: [
				{ answerText: "Take care of people and help them",  },
				{ answerText: "Defend people",  },
				{ answerText: "Paint and design",  },  
				{ answerText: "Write about social problems",  },
				{ answerText: "Solve people problems",  },
			],
		},
		{
            key:7,
			questionText:"What kind of job you want?",
			answerOptions: [
				{ answerText: "Going to the office",  },
				{ answerText: "Research job",  },
				{ answerText: "construction and engineering",  },
			],
		},
		{
            key:8,
			questionText: "What was your favorite subject in school?",
			answerOptions: [
				{ answerText: "Math",  },
				{ answerText: "Science",  },
				{ answerText: "Languages",  },  
				{ answerText: "Law",  },
				{ answerText: "painting",  },		],
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [showImage, setShowImage] = useState(true);
    const [answers, setAnswers] = useState([]);
	const handleAnswerOptionClick = (answerOption) => {
		// if (answerOption.isCorrect) {
		// 	setScore(score + 1);
        // }
        setAnswers(answers+"*"+questions[currentQuestion].questionText+"@"+answerOption.answerText)
        answerOption.isChecked=!answerOption.isChecked
        const nextQuestion = currentQuestion + 1;
        if(questions.length===nextQuestion){
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
                                 <ProgressBar completed={parseInt(currentQuestion*100/questions.length)} bgColor={"#FFC727"} />
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




