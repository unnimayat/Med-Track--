import './layout.styles.css'
import React,{useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

var Nurse_Name="Nurse";
var occupied=0
var unoccupied=8

const Layout=()=>
{
    // const [occupied,setCounto]=useState(0);
    // const [unoccupied,setCountu]=useState(8);
    // function submit(){     
        
        
    // }
    // function remove(){
    //     setCounto(occupied-1);
    //     setCountu(unoccupied+1);
    // }  
    async function getfetails()
    {
        let result = await fetch("http://127.0.0.1:8000/Med_Track");
    } 
    const [isBooked1,setBtn1]=useState(); 
    function state1(){ 
        setBtn1(true); 
         
        occupied++;
        unoccupied--;
        
    }

    const [isBooked2,setBtn2]=useState(); 
    function state2(){ 
        setBtn2(true); 
        occupied++;
        unoccupied--;
    }

    const [isBooked3,setBtn3]=useState(); 
    function state3(){ 
        setBtn3(true); 
        occupied++;
        unoccupied--;
    }

    const [isBooked4,setBtn4]=useState(); 
    function state4(){ 
        setBtn4(true); 
        occupied++;
        unoccupied--;
    }

    const [isBooked5,setBtn5]=useState(); 
    function state5(){ 
        setBtn5(true); 
        occupied++;
        unoccupied--;
    }

    const [isBooked6,setBtn6]=useState(); 
    function state6(){ 
        setBtn6(true); 
        occupied++;
        unoccupied--;
    }

    const [isBooked7,setBtn7]=useState(); 
    function state7(){ 
        setBtn7(true);
        occupied++;
        unoccupied--;
    }

    const [isBooked8,setBtn8]=useState(); 
    function state8(){ 
        setBtn8(true);
        occupied++;
        unoccupied--;
    }
    let patients;
    async function getPatient(){
        console.log("HAI");
      let result = await fetch(`http://localhost:5000/content`);
      console.log(result);
      result=await result.json();
      patients=result;
      console.log(patients); 
      for(let i=0;i<patients.length;i++)
      {console.log(patients[i]);
        if(patients[i].id===1)
        {
            state1();
        }
        if(patients[i].id===2)
        {
            state2();
        }
        if(patients[i].id===3)
        {
            state3();
        }
        if(patients[i].id===4)
        {
            state4();
        }
        if(patients[i].id===5)
        {
            state5();
        }
        if(patients[i].id===6)
        {
            state6();
        }
        if(patients[i].id===7)
        {
            state7();
        }
        if(patients[i].id===8)
        {
            state8();
        }
      } 
      }
      useEffect(()=>{
        getPatient()
      },[]);

    return(
        <div >
            <div className='orange'>
                <h1>{Nurse_Name}</h1>
            </div>
            <div className='parallel'>
                <div className='layout'>
                    <a href="/addpatient"><button className='add'>Add new patient</button></a>
                    <br></br>
                    <br></br>
                    <h1 className='occupied'>Occupied   :<label htmlFor=""  className='occupied'>{occupied}</label> </h1>
                    <br></br>
                    <h1 className='unoccupied'>Unoccupied   :<label htmlFor=""  className='unoccupied'>{unoccupied}</label></h1>
                    <a href="/home"><button className='logout'>LOGOUT</button></a>
                </div>
             
                <div className='column'>   
                    <Link to={"/medicine_details/1"}><button className='button1' onClick={state1} style={{backgroundColor:isBooked1 ? "#E96317" : "#D9D9D9"}}></button></Link>        
                    <Link to={"/medicine_details/2"}><button className='button1' onClick={state2} style={{backgroundColor:isBooked2 ? "#E96317" : "#D9D9D9"}}></button></Link>
                    <Link to={"/medicine_details/3"}><button className='button1' onClick={state3} style={{backgroundColor:isBooked3 ? "#E96317" : "#D9D9D9"}}></button></Link>
                    <Link to={"/medicine_details/4"}><button className='button1' onClick={state4} style={{backgroundColor:isBooked4 ? "#E96317" : "#D9D9D9"}}></button></Link>
                    <Link to={"/medicine_details/5"}><button className='button1' onClick={state5} style={{backgroundColor:isBooked5 ? "#E96317" : "#D9D9D9"}}></button></Link>
                    <Link to={"/medicine_details/6"}><button className='button1' onClick={state6} style={{backgroundColor:isBooked6 ? "#E96317" : "#D9D9D9"}}></button></Link>
                    <Link to={"/medicine_details/7"}><button className='button1' onClick={state7} style={{backgroundColor:isBooked7 ? "#E96317" : "#D9D9D9"}}></button></Link>
                    <Link to={"/medicine_details/8"}><button className='button1' onClick={state8} style={{backgroundColor:isBooked8 ? "#E96317" : "#D9D9D9"}}></button></Link>
                </div>    
            </div>   
        </div>
    )
}
export {Layout};