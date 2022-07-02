import { useState, useEffect } from "react";
const useFetch =(url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(true);

useEffect(()=>{
    const abortCont = new AbortController();


        setTimeout(()=> {
            fetch(url, {signal: abortCont.signal}).then(res=>{
                if(!res.ok){
                    throw Error ('could not fetch the data from the resource');
                }
                return res.json();
           
            }).then(data=>{
            setData(data);
            console.log("gotten")
            setIsPending(false);
            }).catch(err=>{
                if(err.name ==="AbortError"){
                    console.log("fetch aborted")
                }
                else{
                    setIsPending(false)
                    console.log(err.message);
                }
               
            })
        },1000);
        return ()=> abortCont.abort();
     }, [url]);

     return {data, isPending, error}
}

export default useFetch;