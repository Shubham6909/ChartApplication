import { useEffect, useState } from "react";
import { Myaxios } from "./services/Myaxios";

export default function DataFetching({setdatatoapp}){
   const [data,setdata]=useState();
useEffect(()=>{
    Myaxios.get("/data").then((res)=>{
        setdata(res.data)
        setdatatoapp(res.data)
        
    }).catch((err)=>{
        console.log(err)
    })
},[])

    return null;
}
