import profile from '/Users/noellecharter/profilecard/src/Noelle_Charter.jpg';
import './App.css';
import Skills from "./components/Skills";
import { useState } from 'react';

function App() {
  var Job = 'Special Education Teacher Grades (7-12)'
  var Name ='My name is Noelle Charter'
  var Skill=(<p><b>Skills</b>: Front-end development, Tarot reading</p>)
  var Edu = (<p><b>Buffalo State (BS)</b>: Speech-language pathology <br/> 
      <b>Pace University (MSEd)</b>: Special Education Teacher Grades (7-12)</p>)
  const [text, setSkills] = useState(Name)
  const handleName = () =>{
    setSkills(Name)
  }
  const handleSkill = () =>{
    setSkills(Skill)
  }
  const handleEdu = () =>{
    setSkills(Edu)
  }
  const [count, setCount] = useState(0)
  return (
    <>
     <div className="Main">
       <img src={profile} alt="profile"/>
        <Skills job={Job} content={text}/>

       <div className="Buttons">
         <button onClick={handleName}>Name</button>
         <button onClick={handleSkill}>Skills</button>
         <button onClick={handleEdu}>Education</button>
       </div>
       <div className="Counter">
          <button onClick={()=> setCount(count + 1)} style={{backgroundColor:"transparent", border: "none"}}><i class="fas fa-heart" style={{color: "red", display:"inline-block"}}></i></button>
            <p>{count}</p>
       </div>
       <div className="Misc">
         <div>
         <a href="https://www.instagram.com/thealchemistpantry/" target="_blank" rel="noreferrer">
         <i class="fab fa-instagram"></i>
         </a>
         <a href="https://www.etsy.com/shop/TheAlchemistPantry" target="_blank" rel="noreferrer"><i class="fab fa-etsy"></i>
         </a>
         <a href="https://github.com/noelle529" target="_blank" rel="noreferrer"><i class="fab fa-github"></i>
         </a>
         <a href="https://www.linkedin.com/in/noelle-charter12/" target="_blank" rel="noreferrer">
         <i class="fab fa-linkedin-in"></i>
         </a>
         </div>
         <h5>Email: thealchemistpainting@gmail.com</h5>
       </div>
     </div>
    </>
  );
}

export default App;
