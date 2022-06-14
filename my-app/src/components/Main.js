

import React from "react";

//THIS IS CALLED PROPS SENDING DATA FROM APP.JS AND REACIVING FROM HERE BY PROPS.
const Main=(props)=>{
    
    // THIS CALLED destructuring. TO TAKE OUT MAIN THINGS FROM PROPS
    const{mysonname,myname}=props
    return(
        
        <div>
            <div className="myMain">
              <h2>Hello I am my Main</h2>
              <h3>Myname is: {myname} <br></br> My son name is: {mysonname}</h3>
            </div>

        </div>
    )
}

export default Main