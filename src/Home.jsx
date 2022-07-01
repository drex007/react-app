import { useState, useEffect } from "react";
import BlogList from "./Bloglist";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);
    const handleDelete = (id)=> {
        const newBlogs = blogs.filter(blog => blog.id !==id);
        setBlogs(newBlogs);

    };
   
 useEffect(()=>{
    console.log('use effect ran');
    console.log(blogs);
 }, []);   // The empty array serve as a dependency array for useEffect, or you can add a useState label into the array so immediately the UseState changes, then the useEffect rerenders "try this with blogs UseState"
    return (  
        <div className="home">
            <BlogList blogs = {blogs} title="All Blogs"  handleDelete = {handleDelete}/>
            {/* <h1>----------------------------------------</h1>
            <BlogList blogs = {blogs.filter((blog)=> blog.author ==='mario')} title="Mario's Blogs" handleDelete = {handleDelete} /> */}
        </div>
    );
}
 
export default Home;