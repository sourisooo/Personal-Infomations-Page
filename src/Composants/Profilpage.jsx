import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { useObject } from "../Hooks/useObject";
import Navbar from './Navbar';



export default function ProfilPage() {

    const { id } = useParams()


return (

<div>

<form>
    <label for="opinion"> Your profile </label><br /> 
    <textarea id="opinion" rows="6" cols="80" value={JSON.stringify(useObject(id))} disabled="true" ></textarea>
    <br /> <br /> 
    
    </form>
    </div>

)




}