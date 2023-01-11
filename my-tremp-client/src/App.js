
//import { useState } from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useSyncExternalStore } from 'react';
import './App.css';

const App =  ()=> {
  const[userName,setUserName]=useState("");
  const fetchUserName= async () =>{
    const name =await axios.get('http://localhost:8000/getUserName');
    setUserName(name.data);
    }
  useEffect( ()=>{
    fetchUserName();
  },[]);
 
 return(
   <div>{userName}</div>
 );
}

export default App;
