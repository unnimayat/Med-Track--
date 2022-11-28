import './medicine_details.styles.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { Params,useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const Medicine=()=>
{
      
    const[patient,setPatient]=useState({});
    const[pName,setPname]=useState();
    const[pDoc,setPdoc]=useState();
    const[pDis,setPdis]=useState();
    const[pMed,setPmed]=useState();
    let patients=[];

    const params=useParams();
    console.log(params.id);
    useEffect(()=>{
      getPatient();
    })
    async function getPatient(){
      console.log("HAI");
    let result = await fetch(`http://localhost:5000/content/${params.id}`);
    console.log(result);
    result=await result.json();
    patients=result;
    console.log("P",patients.name);
    setPname(patients.name);
    setPdoc(patients.consulting_doc);
    setPdis(patients.desc);
    setPmed(patients.medicine);
    
    }

    async function remove(){
      let result = await fetch(`http://localhost:5000/delete/${params.id}`,{
      method:'delete',
      headers:{
          "Content-Type":"application/json"
      }   
      })
      result=await result.json();
    }
    return(
        <div>           
            <Navbar className="nv">
          <Nav className="me-auto">
          <div className='flex-container'>Nurse_name</div>
          <Nav.Link className='a'href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
      </Navbar>
      <div className="flex-container2">
        <br></br><br></br><br></br>
            PATIENT DETAILS<br></br>
            <br></br><br></br><br></br>
            Name: {pName}
            <br></br><br></br><br></br><br></br>
            Consulting Doctor: {pDoc}
            <br></br><br></br><br></br><br></br>
            Disease Details: {pDis}
            <br></br><br></br><br></br><br></br>
            Medicines: {pMed}
            <br></br><br></br><br></br><br></br>
            <Link to="/layout"><button className="remove" onClick={remove}>REMOVE</button></Link>
            <div className='flex-container3'>
        
        <pre>                 Morning        Afternoon       Night<br></br><br></br><br></br> 
        </pre>
        <div className='grid'>
          <h5>{pMed}</h5>
          <input type="checkbox" className='' value={true}/>
          <input type="checkbox" className=''/>
          <input type="checkbox" className=''/>
        </div>
      </div> 
      </div>
      <Link to="/layout"><button className="submit">SUBMIT</button></Link>
      
        </div>
     
    )
}

export {Medicine}; 