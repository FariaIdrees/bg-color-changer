import { useState } from "react"


function App() {
    const [color , setColor]=useState("White")
    return (

    
    <div className="ab" style={{backgroundColor: color, width: 1280, height: 555 }}>


     <h1 style={{color:"black", fontSize:44}}> BG Color Changer </h1>
    


      <button onClick={()=>setColor("blue")} style={{backgroundColor:"Blue" }}>Blue </button>
       &nbsp;
      
      <button onClick={()=>setColor("maroon")} style={{backgroundColor:"maroon" }}> Maroon </button>
        &nbsp;

      
      <button onClick={()=>setColor("pink")} style={{backgroundColor:"pink" }}> Pink </button>
         &nbsp;

      <button onClick={()=>setColor("aqua")} style={{backgroundColor:"aqua" }}> Aqua </button> 
        &nbsp;

      <button onClick={()=>setColor("brown")} style={{backgroundColor:"brown" }}> Brown </button> 


    </div>
  )
}

export default App