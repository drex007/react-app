import { useState, useEffect } from "react";
import BlogList from "./Bloglist";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsPending] = useState(true);

 useEffect(()=>{
    setTimeout(()=> {
        fetch('http://localhost:8000/blogs').then(res=>{
        return res.json();
        }).then(data=>{
        setBlogs(data);
        setIsPending(false);
        })
    },1000);
 }, []);   
    return (  
        <div className="home">
            {isLoading && <div>Loading.............</div>}
            {blogs && <BlogList blogs = {blogs} title="All Blogs" />}
        </div>
    );
}
 
export default Home;