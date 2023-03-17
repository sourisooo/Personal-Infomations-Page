import {useState,useEffect} from 'react';
import { useObject } from "../Hooks/useObject";
import Navbar from './Navbar';


export default function Accountpage(props) {

const [name,setName] = useState("BIDON");
const [bname,setBName] = useState("Modify this information");
const [email,setEmail] = useState("mailbidon");
const [adress,setAdress] = useState("adressbidon");
const [go,setGo] = useState("gobidon");

const {object} = useObject(1);


useEffect(()=> {
  console.log(props.select);

 },[props.select]);


let bouton = "Modify this information";
let bouton2 = "Done with this new value";
let data={};
// let index=1;

// useEffect(()=> {
//   console.log(datas);
//  },[]);

let index = props.select;

console.log(index);
// console.log(select);

const handleChange = () =>

{
    

  // console.log(name,bouton,bouton2);
    document.getElementById("1").disabled = !document.getElementById("1").disabled;
    if(!document.getElementById("1").disabled){setBName(bouton2)}else(setBName(bouton));
    // console.log(name,bouton,bouton2);

    // data={name, pass:"test"};

    data={name}

    console.log(data);
    
 


    // useEffect(()=> {
   
   

  fetch("http://localhost:3000/datas/"+index, 
  
      {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
      })

    // },[]);
   
 
}



const handleChange2 = () =>

{
  // console.log(name,bouton,bouton2);
    document.getElementById("2").disabled = !document.getElementById("2").disabled;
    if(!document.getElementById("2").disabled){setBName(bouton2)}else(setBName(bouton));
    // console.log(name,bouton,bouton2);


    data={email}

    console.log(data);

  fetch("http://localhost:3000/datas/"+index, 
  
      {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
      })



}

const handleChange3 = () =>

{
  // console.log(name,bouton,bouton2);
    document.getElementById("3").disabled = !document.getElementById("3").disabled;
    if(!document.getElementById("3").disabled){setBName(bouton2)}else(setBName(bouton));
    // console.log(name,bouton,bouton2);

    data={adress}

    console.log(data);

  fetch("http://localhost:3000/datas/"+index, 
  
      {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
      })

}

const handleChange4 = () =>

{
  // console.log(name,bouton,bouton2);
    document.getElementById("4").disabled = !document.getElementById("4").disabled;
    if(!document.getElementById("4").disabled){setBName(bouton2)}else(setBName(bouton));
    // console.log(name,bouton,bouton2);

    data={go}

    console.log(data);

  fetch("http://localhost:3000/datas/"+index, 
  
      {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
      })

}


    return(
        

        <div>
       
          {/* <Navbar index={index} ></Navbar> */}


        <form>
          <label for="opinion"> Your name </label><br /> 
          <textarea id="1" rows="1" cols="80" value={name} onChange={e=>setName(e.target.value)} disabled="true"></textarea>
          <br /> <br /> 
          
          </form>
          
          <button onClick={handleChange}>{bname}</button> 
        <br /> <br /> 
    
    
          <form>
          <label for="opinion"> Your email </label><br /> 
          <textarea id="2" rows="1" cols="80" value={email} onChange={e=>setEmail(e.target.value)}disabled="true"></textarea>
            <br /> <br /> 
            </form>
    
            <button onClick={handleChange2}>{bname}</button> 
        <br /> <br /> 
    
    
            <form>
            <label for="opinion"> Your adress </label><br /> 
            <textarea id="3" rows="1" cols="80" value={adress} onChange={e=>setAdress(e.target.value)}disabled="true"></textarea>
            <br /> <br /> 
    
             </form>
    
        <button onClick={handleChange3}>{bname}</button> 
        <br /> <br /> 
    

        <form>
    
    <label for="opinion"> Your go </label><br /> 
      <textarea id="4" rows="1" cols="80" value={go} onChange={e=>setGo(e.target.value)}disabled="true"></textarea>
      <br /> <br /> 
    
    </form>

    <button onClick={handleChange4}>{bname} </button> 
    <br /> <br /> 





        </div>);
    
    
    
    
    
    
    
    }