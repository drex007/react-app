import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('james');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    return ( 
        <div className="create">
            <h2>Add a new blog </h2>
            <form >
                <label>Blog title:</label>
                <input type="text" value={title} required  onChange={(e)=> setTitle(e.target.value)} />
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e)=> setBody(e.target.value)}>

                </textarea>
                <label>Blog author:</label>
                <select value={author} onChange ={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>  
                <button>Add Blog</button>              
            </form>
        </div>
     );
}
 
export default Create;