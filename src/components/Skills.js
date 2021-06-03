import React from 'react'
import './Skills.css';

 function Skills({job,content}) {
    return (
        <>
        <h5>Current Position: <br/> {job}</h5>
        <p>{content}</p>
        </>
    )
}
export default Skills;
