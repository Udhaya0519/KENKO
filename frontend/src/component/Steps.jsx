import React, { useRef, useEffect } from "react";
import "../css/Steps.css";
import products from "../db";

const Steps = () => {
  const canvasRef = useRef(null);

  const drawWavyLine = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const amplitude = 60; // Get amplitude
    const canvasHeight = 1000; // Get canvas height
    const lineThickness = 15; // Get line thickness
    const frequency = 0.015; // Get wave frequency

    canvas.height = canvasHeight;

    // Clear the previous wave
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gradient for the wavy line
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#F5E4C3");
    gradient.addColorStop(1, "#8B5D0C");

    // Style for the line
    ctx.strokeStyle = gradient;
    ctx.lineWidth = lineThickness; // Set the line thickness dynamically

    // Begin drawing the wavy line
    ctx.beginPath();
    for (let y = 0; y <= canvas.height; y++) {
      let x = 100 + Math.sin(y * frequency) * amplitude; // 100 centers the wave
      ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Mark peaks and place text at those points
    ctx.fillStyle = "red"; // Color for the peak markers
    ctx.font = "16px Arial"; // Font for the text
    ctx.textAlign = "center"; // Center the text

    for (let y = 0; y <= canvas.height; y++) {
      let x = 100 + Math.sin(y * frequency) * amplitude; // Calculate x position
      if (Math.abs(Math.sin(y * frequency)) === 1) { // Check if it's a peak (1 or -1)
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2, false); // Draw a circle for the peak
        ctx.fill(); // Fill the circle

        // Draw the title at peak
        ctx.fillText("Blood Count", x, y - 10); // Adjust vertical position as needed
      }
    }
  };

  // Initial rendering effect to draw the line
  useEffect(() => {
    drawWavyLine();
  }, []); // Draw only once on initial render

  let elemt = []

 for (let index = 3; index >=1; index--) {
       elemt.push(index)
 }


let chn;

function changeable(el)
{   
  if(elemt.length-(elemt.length-1) === el){
       chn = "ts"
  }else{
      chn = "st"
      
  }
  return chn 
}

let md;
function tomode(el)
{
    if(elemt.length-(elemt.length-1) === el){
        md = "change"
   }else{
        md = ""
       
   }
   return md; 
}


  return (
    <section className="steps">
      <div className="contain">
        <div className="canvapre">
          <canvas ref={canvasRef} width="200"  height='400'>
          </canvas>
          <div className="summa">
            {
                elemt.map((el,index)=>(
                      <h1 key={index}   className={tomode(el)}><span className={changeable(el)}>{el}</span></h1>
                ))

            }
          </div>
        </div>
        </div>
       
     
    </section>
  );
};

export default Steps;
