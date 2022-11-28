import './addpatient.styles.css'
import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
var id=10;
const Addpatient=()=>
{
  
    const [nme,setName]=useState("");
    const [doctor,setDoctor]=useState("");
    const [disease,setDisease]=useState("");
    const [medicine,setMedicine]=useState("");
    const [morning,setMorning]=useState(false);
    const [noon,setNoon]=useState(false);
    const [night,setNight]=useState(false);
    const handleInputs1 = (e)=>
    {
        console.log(e);
        setName(e.target.value); 
    }
    const handleInputs2 = (e)=>
    {
        console.log(e);
        setDoctor(e.target.value);
         
    }
    const handleInputs3 = (e)=>
    {
        console.log(e);

        setDisease(e.target.value);
  
    }
    const handleInputs4 = (e)=>
    {
        console.log(e);
         
        setMedicine(e.target.value); 
    }
    const handleInputs5 = (e)=>
    {         
        setMorning(!morning); 
    }
    const handleInputs6 = (e)=>
    {
        setNoon(!noon); 
    }
    const handleInputs7 = (e)=>
    { 
        setNight(!night); 
    }
    
    const [isBooked1,setBtn1]=useState(); 
    function state1(){ 
        setBtn1(true); 
    }

    const [isBooked2,setBtn2]=useState(); 
    function state2(){ 
        setBtn2(true); 
    }

    const [isBooked3,setBtn3]=useState(); 
    function state3(){ 
        setBtn3(true); 
    }

    const [isBooked4,setBtn4]=useState(); 
    function state4(){ 
        setBtn4(true); 
    }

    const [isBooked5,setBtn5]=useState(); 
    function state5(){ 
        setBtn5(true); 
    }

    const [isBooked6,setBtn6]=useState(); 
    function state6(){ 
        setBtn6(true); 
    }

    const [isBooked7,setBtn7]=useState(); 
    function state7(){ 
        setBtn7(true); 
    }

    const [isBooked8,setBtn8]=useState(); 
    function state8(){ 
        setBtn8(true); 
    }

    const [isSelected1,setButton1]=useState(false); 
    function handleClick1(){ 
        setButton1(true); 
        setButton2(false);
        setButton3(false);
        setButton4(false);
        setButton5(false);
        setButton6(false);
        setButton7(false);
        setButton8(false);
        id=1;
    }

    const [isSelected2,setButton2]=useState(false); 
    function handleClick2(){ 
        setButton2(true); 
        setButton1(false);
        setButton3(false);
        setButton4(false);
        setButton5(false);
        setButton6(false);
        setButton7(false);
        setButton8(false);
        id=2;
    }

    const [isSelected3,setButton3]=useState(false); 
    function handleClick3(){ 
        setButton3(true); 
        setButton2(false);
        setButton1(false);
        setButton4(false);
        setButton5(false);
        setButton6(false);
        setButton7(false);
        setButton8(false);
        id=3;
    }

    const [isSelected4,setButton4]=useState(false); 
    function handleClick4(){ 
        setButton4(true); 
        setButton2(false);
        setButton3(false);
        setButton1(false);
        setButton5(false);
        setButton6(false);
        setButton7(false);
        setButton8(false);
        id=4;
    }

    const [isSelected5,setButton5]=useState(false); 
    function handleClick5(){ 
        setButton5(true); 
        setButton2(false);
        setButton3(false);
        setButton4(false);
        setButton1(false);
        setButton6(false);
        setButton7(false);
        setButton8(false);
        id=5;
    }

    const [isSelected6,setButton6]=useState(false); 
    function handleClick6(){ 
        setButton6(true); 
        setButton2(false);
        setButton3(false);
        setButton4(false);
        setButton5(false);
        setButton1(false);
        setButton7(false);
        setButton8(false);
        id=6;
    }

    const [isSelected7,setButton7]=useState(false); 
    function handleClick7(){ 
        setButton7(true);
        setButton2(false);
        setButton3(false);
        setButton4(false);
        setButton5(false);
        setButton6(false);
        setButton1(false);
        setButton8(false);
        id=7; 
    }

    const [isSelected8,setButton8]=useState(false); 
    function handleClick8(){ 
        setButton8(true); 
        setButton2(false);
        setButton3(false);
        setButton4(false);
        setButton5(false);
        setButton6(false);
        setButton7(false);
        setButton1(false);
        id=8;
    }


    async function submit(){
      console.log(id,nme,disease,doctor,medicine,morning,noon,night);
      let result = await fetch("http://localhost:5000/add",{
      method:'post',
      body:JSON.stringify({id,name:nme,consulting_doc:doctor,desc:disease,medicine,morning,afternoon:noon,night}),
      headers:{
          "Content-Type":"application/json"
      }   
      })
      result=await result.json();
      console.log(result);
      setName("");
      setDisease("");
      setDoctor("");
      setMedicine("");

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
     <div>
        <div>
        <Navbar className="nv2">
          <Nav className="me-auto">
          <div className='flex-containerr'>Nurse</div>
          <Nav.Link className='aa'href="/home">Home</Nav.Link> 
          </Nav>
      </Navbar>
  
      <div className='parallell' >
      <div className="flex-container22">
        <br></br><br></br><br></br>
            PATIENT DETAILS<br></br>
            <br></br><br></br><br></br>
            <label for="username">Name:</label>
            <input type="text" className='all'id="name" nme="name"  autoComplete="off" value={nme} onChange={handleInputs1}></input>
            <br></br><br></br><br></br><br></br>
            <label for="consultingdoctor">  Consulting Doctor:</label>
            <input type="text" className='all' id="doctor" nme="doctor" autoComplete="off" value={doctor} onChange={handleInputs2}></input>
            <br></br><br></br><br></br><br></br>
            <label for="disease">Disease Details:</label>
            <input type="text" className='all' id="disease" nme="disease" autoComplete="off" value={disease} onChange={handleInputs3}></input>
            <br></br><br></br><br></br><br></br>
            <label for="medicines">Medicines:</label>
            <input type="text" className='all' id="medicines" nme="medicine" autoComplete="off" value={medicine} onChange={handleInputs4}></input><br></br>
            <br></br><br></br><br></br><br></br>
            <pre>                 Morning           Afternoon         Night<br></br><br></br><br></br> 
            </pre>
            <div className='gridd'>
          <h5>{medicine}</h5>
          <input type="checkbox" className='' nme="morning" autoComplete="off" value={morning} onChange={handleInputs5}/>
          <input type="checkbox" className='' nme="noon" autoComplete="off" value={noon} onChange={handleInputs6}/>
          <input type="checkbox" className='' nme="night" autoComplete="off" value={night} onChange={handleInputs7}/>
        </div>
            <a href="/layout"><button className="submitt" type="submit" onClick={submit}>SUBMIT</button></a>
             
            <div className='flex-container33'>
                
               <h4 className="hr"> SELECT BED</h4><br></br>
            <div className='column'>  
                <button className='button1' onClick={handleClick1} style={{backgroundColor: isBooked1? "#e8bca2" : isSelected1 ? "#E96317" : "#D9D9D9"}}></button>                
                <button className='button1' onClick={handleClick2} style={{backgroundColor: isBooked2? "#e8bca2" : isSelected2 ? "#E96317" : "#D9D9D9"}}></button>
                <button className='button1' onClick={handleClick3} style={{backgroundColor: isBooked3? "#e8bca2" : isSelected3? "#E96317" : "#D9D9D9"}}></button>
                <button className='button1' onClick={handleClick4} style={{backgroundColor: isBooked4? "#e8bca2" : isSelected4 ? "#E96317" : "#D9D9D9"}}></button>
                <button className='button1' onClick={handleClick5} style={{backgroundColor: isBooked5? "#e8bca2" : isSelected5 ? "#E96317" : "#D9D9D9"}}></button>
                <button className='button1' onClick={handleClick6} style={{backgroundColor: isBooked6? "#e8bca2" : isSelected6 ? "#E96317" : "#D9D9D9"}}></button>
                <button className='button1' onClick={handleClick7} style={{backgroundColor: isBooked7? "#e8bca2" : isSelected7 ? "#E96317" : "#D9D9D9"}}></button>
                <button className='button1' onClick={handleClick8} style={{backgroundColor: isBooked8? "#e8bca2" : isSelected8 ? "#E96317" : "#D9D9D9"}}></button>
            </div>
            </div>
            </div> 
            
            </div> 
        </div>
        
     </div>
    )
}


export {Addpatient};