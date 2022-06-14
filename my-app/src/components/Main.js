

import React from "react";

//THIS IS CALLED PROPS SENDING DATA FROM APP.JS AND REACIVING FROM HERE BY PROPS.
const Main=(props)=>{
    
    // THIS CALLED destructuring. TO TAKE OUT MAIN THINGS FROM PROPS
    const{name,age,email}=props
    return(
        
        <div>
            <div className="myMain">
              <h2>Hello I am my Main</h2>
              <h3>Myname is: {name} <br></br> My age is: {age} <br></br> My e-mail: {email} <hr></hr></h3>
            </div>

        </div>
    )
}

export default Main