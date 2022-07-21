import React from 'react'
import { useState } from 'react'
import './Styling/WriteContent.css'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

import DisplayContent from './DisplayContent'

export default function WriteContent() {
    const [myData, setMyData] = useState({
        title: "",
        content: ""
    });

    const [allData, setAllData] = useState([]);

    const StoredData = (event) => {
        console.log("data is stored successfully")
        const value = event.target.value;
        const name = event.target.name;
        setMyData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const saveData = () => {
        setAllData((preVal) => {
            return [...preVal, myData];
        })

        setMyData({
            title: "",
            content: ""
        })
    }
    const delNote=(index)=>{
        let arr=[];

        arr=allData.filter((item,indexx)=>{
            console.log({indexx})
            return index!==indexx;
        })
        setAllData([...arr]);

    }
    const [hide,setHide]=useState(false);
    let hiding=()=>{
        setHide(true);
    }
    let displaying=()=>{
        setHide(false);
    }
    return (
        <>
            <div className="myform" onDoubleClick={displaying}>
                <form action="" id='formm'>
                    
               <input name="title" type="text" placeholder='Enter Your Title'  id="title" value={myData.title} onChange={StoredData} onClick={hiding} />
               { hide? <textarea name="content" placeholder='Enter Your Content' id="content" cols="30" rows="10" value={myData.content} onChange={StoredData} ></textarea>:null}
                </form>
                { hide?<button className='btn' onClick={saveData}>
                    <AddToPhotosIcon />
                </button>:null}
            </div >
            
            <div className="displayContent">
            { 
                
              allData.map((item,index)=>{
              return <DisplayContent  indexx={index} key={index}  content={item.content} title={item.title} delete={delNote} />

            })}
            </div>
            {/* <DisplayContent/> */}

        </>
    )
}
