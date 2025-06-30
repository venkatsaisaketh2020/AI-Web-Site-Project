
import React from "react";
import color from "./Gallery.module.css";
import { Link } from "react-router-dom";

const Gallery= ()=>{
    return(
      <div className={color.GalleryBlock}>
        <h1>Gallery</h1>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp" alt="" /> 
        <br />
        <img src="https://thefusioneer.com/wp-content/uploads/2023/11/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg" alt="" />
        <br />
        <img src="https://news.columbia.edu/sites/default/files/styles/cu_crop/public/content/2023/artificial-intelligence.jpg?itok=8KSVUG8e" alt="" />
        <br />
        <img src="https://www.esa-automation.com/wp-content/uploads/2024/11/immagine_articolo_blog_ai_esa-copia.jpg" alt="" />
        <br />
        <img src="https://rksdesign.com/wp-content/uploads/2024/05/The-Future-of-AI-in-Healthcare-Product-Design-Cover.png" alt="" />
        <br/>
        <img src="https://guptadeepak.com/content/images/size/w2000/2024/07/The-Future-of-AI-and-Its-Impact-on-Humanity.webp" alt="" />
        <br />
        <img src="https://www.collidu.com/media/catalog/product/img/8/5/85953df34515b0acd145431c5053a8ded5e292fcb99978f2104a6a213538c461/applications-of-ai-slide1.png" alt="" />

        <Link to='/Ai'>Back To Home</Link>
      </div>    
    )
}

export default Gallery;