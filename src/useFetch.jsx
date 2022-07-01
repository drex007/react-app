import { useState, useEffect } from "react";
const useFetch =() =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(()=>{
        setTimeout(()=> {
            fetch('http://localhost:8000/blogs').then(res=>{
            return res.json();
            }).then(data=>{
            setData(data);
            setIsPending(false);
            }).catch(err=>{
                console.log(err.message);
            })
        },1000);
     }, []);

     return {data, isPending}
}

export default useFetch;