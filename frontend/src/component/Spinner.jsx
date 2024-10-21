import React, { useEffect, useState } from 'react';
import '../css/spinner.css';
import ApexCharts from 'apexcharts';
import e from "/assets/steps/image1.svg"
import h from "/assets/steps/image2.svg"
import w from "/assets/steps/image3.svg"
import { useNavigate } from "react-router-dom";

const Spinner = () => {

  const pathput = useNavigate()

  useEffect(() => {
    // ApexCharts options
    const options = {
      chart: {
        height: 500,
        width: 500,
        type: "pie",
      },
      dataLabels: {
        enabled: true,
        formatter: function () {
          return ``;
        },
        style: {
          fontSize: '14px',
          colors: ['#fff'],
        },
      },
      series: [20, 20, 20, 20, 20, 20],  // Pie chart data
      colors: ['#0A2724'],
      stroke: {
        width: 1,
        colors: ['#cb9749'],
      },
      legend: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      states: {
        hover: {
          filter: {
            type: 'none',
          },
        },
      },
    };

    // Initialize the chart
    const chart = new ApexCharts(document.querySelector("#apexcharts-pie"), options);
    chart.render();

    // Animation logic
    const circleText = document.querySelectorAll(".circle-test-text");
    const testNumberImage = document.querySelectorAll(".number-image");
    const testNumber = [1 , 2 , 3 ];
    const dataPresent = [  ];
    const testName = [
      "B",                         
      "F",
      "E",                         
      "G",                       
      "H",                            
      "I",                          
      "J"
    ];


let d = 0;
let e = 1;
let f = 2;



let clear = setInterval(()=>{
               dataPresent.pop(d);  
               dataPresent.pop(e);  
               dataPresent.pop(f);
               dataPresent.push(testName[d])   
                dataPresent.push(testName[e]);   
                dataPresent.push(testName[f]);   
    d+=3
    e+=3
    f+=3
  if (dataPresent[1] === undefined && dataPresent[2]===undefined) {
            dataPresent[0]="H"
            dataPresent[1]="I"
            dataPresent[2]="J"
  }

    console.log(dataPresent)
},2500)


setTimeout(()=>{
    clearInterval(clear)
},15000)



    let n =10;


 


    // Add the animate-in class initially to display the first set of text and images
    circleText.forEach((text) => text.classList.add('animate-in'));
    testNumberImage.forEach((img) => img.classList.add('animate-in'));

    
  
      function change() {
      
        if (testNumber[2] > n) return;
  
        else if(testNumber[2] === n){
          setTimeout(()=>{pathput("/final")},2500)
          
        }
     
        else if(testNumber[2] < n) {
          
        setTimeout(() => {
          // Update test numbers
          testNumber[0] = testNumber[0]  === 7 ? testNumber[0] = 8  :  testNumber[0]+ 3;
          testNumber[1] = testNumber[1]  === 8 ? testNumber[1] = 9   : testNumber[1]+ 3;
          testNumber[2] = testNumber[2]  === 9 ? testNumber[2] = 10  : testNumber[2]+ 3;
  
          // Remove animation class before updating text and images
          circleText.forEach((text) => text.classList.remove('animate-in'));
          testNumberImage.forEach((img) => img.classList.remove('animate-in'));
  
          // Short delay before updating content and re-adding animation class
          setTimeout(() => {
            circleText[0].innerText = dataPresent[0];
            circleText[1].innerText = dataPresent[1];
            circleText[2].innerText = dataPresent[2];
            
            if (circleText[2].innerText === `Test ${n}`){
              setTimeout(()=>{pathput("/final")},2500)
              
            }
            testNumberImage[0].src = `/assets/steps/image${testNumber[0]}.svg`;
            testNumberImage[1].src = `/assets/steps/image${testNumber[1]}.svg`;
            testNumberImage[2].src = `/assets/steps/image${testNumber[2]}.svg`;
  
            circleText.forEach((text) => text.classList.add('animate-in'));
            testNumberImage.forEach((img) => img.classList.add('animate-in'));
          }, 1000);
  
          change();
        
        }, 2500);
  
  
      }
  }
      change();
  
  }, []);


  return (
      <>
    <section className={`circle-section`}>
    <div className="container">
    <div className="circle-container" style={{position:"relative"}}>
      <div id="apexcharts-pie" style={{position:"relative"}}></div>
       <img className="number-image" src={e} style={{position: "absolute", top: "12%", left: "60%", width: "50px", height: "40px"}} alt="Image 1"/>
      <img className="number-image" src={h} style={{position: "absolute", top: "43%", left: "85%", width:"50px", height: "40px"}} alt="Image 2"/>
      <img className="number-image" src={w} style={{position: "absolute", top: "80%", left: "65%", width: "30px", height: "40px"}} alt="Image 3"/>
      <span className="circle-test-text" style={{ position: 'absolute', top: '23%', left: '55%' , fontSize:"50px"}}>C</span>
      <span className="circle-test-text" style={{ position: 'absolute', top: '42%', left: '67%' ,fontSize:"50px" }}>A</span>
      <span className="circle-test-text" style={{ position: 'absolute', top: '64%', left: '55%',fontSize:"50px" }}>D</span> 
    </div>
    </div>
    </section>
    </>
  );
};

export default Spinner;
