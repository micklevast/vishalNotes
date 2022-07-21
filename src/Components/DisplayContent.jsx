import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Styling/DisplayContent.css';
// import { useState } from 'react';
export default function DisplayContent(props) {
  // const [myDisplay,setmyDisplay]=useState('flex')

  const delNote=()=>{
    // setmyDisplay('none');
    alert('deleted')
    props.delete(props.indexx);
  }

  return (
    <>
      <div className="allContent">
        <div id="mainContent" >
          {/* {props.indexx}!={delIndex}? */}
          <h6>{props.title}</h6>
          <br />
          <p>{props.content}</p>
          

          <button className='mybtn' onClick={()=>{delNote()}}>
            <DeleteForeverIcon />
          </button>
        </div>

      </div>
    </>
  )
}
