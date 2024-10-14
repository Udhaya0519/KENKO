import React, { useRef, useEffect, useState } from "react";
import "../css/Steps.css";
import products from "../db";


let valus;
const Steps = () => {
  const canvasRef = useRef(null);

  const drawWavyLine = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");



    const amplitude = 50; // Get amplitude
    const canvasHeight =valus; // Get canvas height
    const lineThickness = 25; // Get line thickness
    const frequency = 0.01; //0.015 Get wave frequency

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
      if (Math.abs(Math.sin(y * frequency)) === 1) {
        // Check if it's a peak (1 or -1)
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

  const [lengthchecker , setlengthchecker ] = useState(3)
  const [statelength , setstatelength ] = useState(lengthchecker)

function access(){
      
   products.forEach((el)=>{
      if(el.testNO === statelength){
        valus = el.length
      }
   })
    
}
access()
  const [mouseEnter, mouseleave] = useState(null);
  function handleMouseenter(index) {
    mouseleave(index);
  }
  function handleMouseleave() {
    mouseleave(null);
  }
  return (
    <section className="steps">
      <div className="canvapre">
        <canvas ref={canvasRef} width="200" height="400"></canvas>
        <div className="levels">
          <ul>
            {products.map((el, index) => (
                  
                el.testNO <=lengthchecker ? 
                <>     
                <li
                key={index}
                onMouseLeave={() => {
                  handleMouseleave();
                }}
                onMouseEnter={() => {
                  handleMouseenter(index);
                }}
                style={{
                  height: mouseEnter === index ? "120px" : "120px",
                  width: mouseEnter === index ? "270px" : "120px",
                  borderRadius: mouseEnter === index ? "100px" : "50%",
                  marginLeft: mouseEnter === index ? "-50px" : "0",
                }}
              >
                <img
                  width="60"
                  height="60"
                  src={`/src/assets/steps/${el.img}`}
                  alt=""
                />
                <div
                  style={{
                    display: mouseEnter === index ? "block" : "none",
                    maxWidth: mouseEnter === index ? "180px" : 0,
                    paddingLeft: mouseEnter === index ? "10px" : "0px",
                  }}
                >
                  <h4>{el.testName}</h4>
                  <h4>{el.venue}</h4>
                </div>
              </li>
              </>  : <></>
            ))
          }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Steps;
