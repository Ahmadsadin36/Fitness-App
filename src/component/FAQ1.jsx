import React, {useState} from 'react'
import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsPatchMinusFill } from "react-icons/bs";

const FAQ1 = ({question, answer}) => {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    
    <div className=' flex flex-col'>
    <article className=' flex flex-col items-start justify-start min-w-60 bg-blue-400 rounded-xl p-3 overflow-hidden'>
        
            <div className=' w-full flex flex-row justify-between items-start bg-blue-200 p-2 rounded-xl text-blue-950 gap-5'>
            <h4 className=''>{question}</h4>
            <button 
            className=' bg-blue-300 p-1 rounded-full'
            onClick={() => setShowAnswer(!showAnswer)}
            
            
            >
            {showAnswer ? <BsPatchMinusFill /> : <BsFillPatchPlusFill />}
            </button>
            </div>
    </article>
    
            {showAnswer && <p className=' text-blue-950 p-2 bg-blue-200 rounded-xl mt-2'>{answer}</p>}
            </div>    
    
  )
}

export default FAQ1