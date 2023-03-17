import { useState,useEffect } from "react";

export const useObject = (select) => {

    const [object, setObject] = useState("");


  useEffect(() => {


    fetch("http://localhost:3000/datas/"+parseInt(select))
    .then(response =>  response.json())
    // .then(e => console.log(e) )
    .then(e=> setObject(e))

    // console.log(datas,datas.at(0),datas.at(0).name);
    console.log(object);


  }, [select])

    return {object}
}