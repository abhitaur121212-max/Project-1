import React from "react";
import { useState } from "react";
function landing({onNavigate}){
    return(
        <div style={{
            padding:"50px",height:"100vh",width:"100vw",margin:"0 ",textAlign:"center"
        }}>
         
            <h1>Welcome to our Application</h1>
            <nav style={{display:"flex",justifyContent: "center",alignItems:"center", gap:"15px",marginBottom:"20px"}}>
            <button onClick={()=> onNavigate("home")}>Home</button>
            <button onClick={()=> onNavigate("about")}>About</button>
            <button onClick={()=> onNavigate("contact")}>Contact</button>
            <button onClick={()=> onNavigate("login")}>login</button>
             <button onClick={()=> 
                 onNavigate("register")}>Register</button>
            </nav>
            <p>Welcome to the landing page of the website</p>
        </div>
    )
}
export default landing;