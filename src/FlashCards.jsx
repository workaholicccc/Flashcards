import { useState } from "react"

function MyComponent(){

    const questions=[
        {
            question:"Who's the G.O.A.T?",
            answer:"CR7"
        },
        {
            question:"Which anime has Pain as one of the villain?",
            answer:"Naruto",
        },
        {
            question:"Which football team has 14 UCL?",
            answer:"Real Madrid"
        }
    ]

    
    const[finished,setFinished]=useState(false)  //to check if there are any questions left
    const[currentIndex,setcurrentIndex]=useState(0)  //current question index
    const[showAnswer,setShowAnswer]=useState(false)
    const[isFlipped,setIsFlipped]=useState(false)


    function previous(){  //to go back to the previous question
        if (currentIndex>0){
            setcurrentIndex(currentIndex-1)
            setShowAnswer(false)   //hiding the answer
            setIsFlipped(false)  //won't flip
        }
    }

    function toggleAnswer(){  //to control the visibility of the answer
        
        setIsFlipped(!isFlipped)   //will flip
        setShowAnswer(!showAnswer)  //set to not show the answer

    }


    function next(){      //to show the next question
        if(currentIndex<questions.length-1){ //if there are questions left 
            setcurrentIndex(currentIndex+1)  //we'll move to the next question
            setShowAnswer(false)  //hiding the answer
            setIsFlipped(false)  //won't flip
        }
        else{
            setFinished(true)  //if there are no questions left
        }
    }

    //Calculating progress
    const progressPercentage = Math.round(((currentIndex + 1) / questions.length) * 100); //percentage progress
    const progressText = `${currentIndex + 1} out of ${questions.length}`;  //it'll show current length out of total



    return(
        <div className="flashcards">

            <div className="progress_container">
                <div className="progress-info">
                    <p id="percentage">{progressPercentage}%</p>
                    <p id="text">{progressText}</p>
                </div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{width: `${progressPercentage}%`}}></div>
                </div>
            </div>
            

            <div className="content">
                <div className="card-container">

                    <div className={`card ${isFlipped ? 'flipped' : ''}`}>

                        <div className="card-front">

                            <div className="questions">
                                {questions[currentIndex].question}
                            </div>

                        </div>

                        <div className="card-back">

                            <div className="answer">
                                {questions[currentIndex].answer}
                            </div>

                        </div>

                    </div>

                    
                    

                </div>
                

                <div className="buttons">
                    <button id="prev" onClick={previous}>Previous</button>
                    <button id="ans" onClick={toggleAnswer}>{showAnswer?'Hide Answer':'Show Answer'}</button>
                    <button id="nxt" onClick={next}>Next</button>

                </div>
                
            </div>

        </div>
        
    )

}
export default MyComponent