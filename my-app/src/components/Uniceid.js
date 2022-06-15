
// Type "rafce" to bring full react template 

// HOW MAKE UNIC ID FOR EVERYOBJECT:
// 0. cd project name (cd my-app)
// 1. npm install uuid
// 2. import { v4 as uuidv4} from "uuid"

import React from 'react'
import { v4 as uuidv4} from "uuid"

const Bahalul=[


    {   id: uuidv4(),
        name: "Motimia",
        cooupation: "cook"
    },
    {
        id: uuidv4(),
        name: "Abbas",
        cooupation: "it"
    },
    {
        id: uuidv4(),
        name: "Odhm",
        cooupation: "cricketer"
    },
    {
        id: uuidv4(),
        name: "Bindu",
        cooupation: "Student"
    }

]

const Uniceid = () => {
  return (
    <div>
        {
            Bahalul.map((elem)=>{
                const{id,name,cooupation}=elem
                return (
                    <div key={id}>
                       <h1>{name}</h1>
                       <p>{cooupation}</p>
                    </div>
                )
            })
        }
      
      
    </div>
  )
}

export default Uniceid


