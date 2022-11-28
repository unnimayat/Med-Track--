import './login.styles.css'
import Pic from "./3.png";
import { Link } from 'react-router-dom';

const Login=()=>
{
     
    return(
        <div className='loginp'>
        <form action="" >
            <center className='square'>
            <img src={Pic} />
            <div className='x'>
            <div className='y'>  
                <input type="text" placeholder="Username" className='username1'/> 
            </div> 
            <br></br>
            <div className='y'> 
                <input type="password" placeholder="Password" className='username1' />
            </div>  
            <br></br>
            <Link to="/layout"><button type="submit" className='login'>Login</button></Link>
            </div>
            </center> 
        </form>
        </div>
        )
} 
export {Login};