import { useState, useEffect } from "react";
import BlogList from "./Bloglist";
const Home = () => {
  

   
    return (  
        <div className="home">
            {isLoading && <div>Loading.............</div>}
            {blogs && <BlogList blogs = {blogs} title="All Blogs" />}
        </div>
    );
}
 
export default Home;