import { useState } from "react";
const Home = () => {
    const handleClick = (name) =>{
        console.log(name, "Clicked me")
    }
    return (  
        <div className="home">
            <h1>HomePage</h1>
            <button onClick={() => handleClick("Viktor")}>Click me</button>
        </div>
    );
}
 
export default Home;