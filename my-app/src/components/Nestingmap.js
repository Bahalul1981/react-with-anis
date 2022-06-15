
import React from 'react'

const mynestingmap=[
    {
        name:"Adhik",
        hobbie:"playing cricket",
        childerns:[
            {
                name:"Tuba",
                age:36,
                favouritegame:[
                    {
                        one:"kanamachi",
                        two:"doribandha",
                        three:"dool"
                    }
                ]
            }
        ]
    },
    {
        name:"Malik",
        hobbie:"Football",
        childerns:[
            {
                name:"Nidham",
                age:3,
                favouritegame:[
                    {
                        one:"cartoon",
                        two:"icebroken",
                        three:"dpolopulu"
                    }
                ]
            }
        ]
    },
    {
        name:"Lindha",
        hobbie:"Cooking",
        childerns:[
            {
                name:"Niloy",
                age:13,
                favouritegame:[
                    {
                        one:"Cyckling",
                        two:"Voliball",
                        three:"Badminton"
                    }
                ]
            }
        ]
    },
]



const Nestingmap = () => {
  return (
    <div>

        <hr /> <h1 className='nesmap'>Hello I am Nesting map</h1>

        {mynestingmap.map((elem,index)=>(
           <div key={index}>
               <h2>Parants Name: {elem.name} <br /> Hobbies: {elem.hobbie}</h2>
               <h3>First nest element</h3>
              
               {elem.childerns.map((newelem,index)=> (

                   <div key={index}>
                   <h4> I am first child and my name is: {newelem.name}</h4>
                   <h4> My age is: {newelem.age}</h4>
                   <h5>Second nest element</h5>
                   {newelem.favouritegame.map((nati,index)=> (
                       <div key={index}>
                           <p>My first favourite game is: {nati.one} <br />And then {nati.two} <br /> And then{nati.three}</p> <hr />
                       </div> 
                   ))}
                   </div>
                
                

               ))}
               
           </div> 
           

        ))}
      
    </div>
  )
}

export default Nestingmap
