
import React from "react";
import color from "./Ai.module.css"

const Ai= ()=> {
    return (
    <section className={color.AiBlock}>

      <div className={color.logoBlock}>
        <h1>AI</h1>
        <h2>Artificial Intelligence</h2>
      </div>

      <div className={color.menuBlock}>
        <ul>
        <li><a href="About">About</a></li>
        <li><a href="Gallery">Gallery</a></li>
        </ul>
      </div>

      <div className={color.imageBlock}>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" alt="" />  
      </div>
      
    </section>
    )
  }

export default Ai;