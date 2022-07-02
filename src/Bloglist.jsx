import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
 
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                    <Link to={`/blogs/${blog.id}`}>
                        <p>Read more...</p>
                    </Link>
                    
                  
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;