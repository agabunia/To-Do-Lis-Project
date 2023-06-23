import React from 'react'

function DoneTask({id, name, actionOne, actionTwo, buttonOne, buttonTwo}) {
  return (
    <div className="task">
        <p className='task-name'> {name} </p>
        <div className="task-bottom">
            <button onClick={() => actionOne(id)}> {buttonOne} </button>
            <button onClick={() => actionTwo(id)}> {buttonTwo} </button>
        </div>
    </div>
  )
}

export default DoneTask