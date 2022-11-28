import './home.styles.css';

const Home=()=>
{
    return(
    <div className='homediv'>
      <center>
      <h1 className='title'>MED TRACK</h1>
      <p className='description'>A web app to keep track of patients in a ward with <br></br>features to log in medicine details and provide alerts <br></br>if not delivered.</p>
      <a href="/login"><button className='login'>LOGIN</button></a>
      </center>
    </div>
    )
    
}

export {Home};