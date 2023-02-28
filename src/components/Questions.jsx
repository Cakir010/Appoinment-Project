import React, { useState } from 'react'
import { arrowup , arrowdown} from '../helper/icons'

const Questions = ({id,question,answer}) => {
const [show, setShow] = useState (false)

const handleToogle = ()=> {
   
    setShow (!show)
}


  return (
    <div className='card-group'>
{
    show ? <div className="card">
        <div className='ques-answer'>
            <h5>
                {id}.{question}
            </h5>
            <button onClick={handleToogle}>
                {arrowup}
            </button>

        </div>
        <p>
            {answer}
        </p>
    </div> :
    <div className="card">
    <div className='ques-answer'>
        <h5>
            {id}.{question}
        </h5>
        <button onClick={()=> setShow (true)}>
            {arrowdown}
        </button>

    </div>
   
</div>
}
    </div>
  )
}

export default Questions