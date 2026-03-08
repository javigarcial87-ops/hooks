import { useState, useEffect } from "react";

export const useFetcthCharacters = (url)=>{
    const [data,setData] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setData(data))
    },[url])

    return data
}