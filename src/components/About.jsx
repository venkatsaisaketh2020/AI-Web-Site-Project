
import React from "react";
import color from "./About.module.css";
import { Link } from "react-router-dom";

const About= ()=>{
    return(
      <div className={color.AboutBlock}>
         <h1>➤Introduction</h1>
         <p> Artificial intelligence (AI)
            is intelligence exhibited by machines. In computer science, an ideal "intelligent" machine is a flexible rational agent that perceives its environment and takes actions that maximize its chance of success at some goal.
         </p>
         <h2>➤ History</h2>
         <p> 1943: McCullough and Pitts' invented "artificial neurons", 
            1950: Inventions of Alan Turing's "Computing machinery and Intelligence", 
            1951: Al was using in Games, 
            1956: Dartmouth conference; And the birth of Al, 
            1965: Robinson's complete algorithm for logical reasoning, 
            1969-79: Early development of knowledge based systems took place, 
            1980-88: Expert system industry booms, 
            1988-93: Expert system industry busts "Al winter", 
            1993-Present: Al is now using rapidly in different technologies; And is achieving it's goal.
         </p>
         <h3>➤ Applications</h3>
         <p> Expert systems, 
            Natural Language Processing (NLP), 
            Speech recognition, 
            Computer vision, 
            Robotics, 
            Automatic Programming.
         </p>
         <h4>➤ Future of A.l</h4>
         <p> The future is really UNKNOWN.
            Researchers seem to disagree on a lot of the same issues.
            With the rate at which technology is improving it is logical to believe Al will continue to get more and more sophisticated.
            But we can imagine two different kind of future of A.I.
             They are:
             (1) Positive
             (2) Negative
             (1) Positive imagination of Future : 
             Maybe, the day is not far when we will just sit back in our cozy little beds and just command our personal Robot's to entirely do our ruts. He will be a perfect companion for us. Just enjoy the Technology.
             (2) Negative imagination of Future : 
             It may end in other way too. Some day there will be a knock at our door. As we open it, we'll see a large number of Robots marching into our house destroying everything we own and looting you. This is because ever since there is an advantage in the Technology, it attracts anti-social elements. This is true for Robots too. Because now they will have full power to think as human, even as of anti-social elements. So we should think trice before giving them power of Cognition.
         </p>
         <h5>➤ A.l in daily life</h5>
         <p> ➤Virtual Personal Assistant : 
            Siri, Google Now, and Cortana are all intelligent digital personal assistants on various platforms(iOS, Android, Windows) which are based on A.I.
            ➤Video Games : 
            One of the instances of Al that most people are probably familiar with, video game Al has been used for a very long time-since the very first video games, in fact.
            ➤Smart Cars : 
            Although we haven't seen smart cars on street yet. But as the Artificial intelligence is developing, that day is not so far when we won't need a driver.            
         </p>
         <h6>➤Conclusion</h6>
         <p> In it's short existence, Al has increased understanding of the nature of intelligence and provided an impressive array of application in a wide range of areas. 
            It has sharpened understanding of human reasoning, and of the nature of intelligence in general. 
            At the same time, it has revealed the complexity of modeling human reasoning providing new areas and rich challenges for the future.
         </p>

         <Link to='/Ai'>Back To Home</Link>
      </div>
    )
}

export default About;