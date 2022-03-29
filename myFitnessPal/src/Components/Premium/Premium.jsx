import React from 'react'
import "./Premium.css"
import Typography from '@mui/material/Typography';

function Premium() {
  return (
    <div className='Premium-container'>
    <h1>Premium</h1>

    <div className="jss78">
    <div className="jss79">
    <div className="left-div">
    <div className='jss90'>PREMIUM</div>
    <Typography className='	.MuiTypography-root'><h1>Start Your 
Free Trial Today</h1></Typography>
    <p>Premium members are 65% more likely to reach their weight loss goal.</p>
    <button className="free-trial-btn">START FREE 1-MONTH TRIAL</button>
    </div>


    <div>
    <img className='app-img' src="https://www.myfitnesspal.com/react-static/e4537e1d014a66cb6083eb6025813bb6.png" alt="app"/>   </div>

    </div>

    <div className='second'>
      <div>
        <img src='https://www.myfitnesspal.com/react-static/51b6c01dec78ddfb6d693b1ff8d23d44.png' alt='first'/>
        <h3>Meal Plans & Recipes</h3>
        <p>Gain insight into your nutrition</p>
      </div>
      <div>
        <img src='https://www.myfitnesspal.com/react-static/c51db6a037b248c10816974faac845f9.png' alt='first'/>
        <h3>Personalized Goals</h3>
        <p>Get guidance & coaching tailored to you</p>
      </div>
      <div>
        <img src='https://www.myfitnesspal.com/react-static/93c7966575adb77a179235b991596985.png' alt='first'/>
        <h3>Ad-Free Experience</h3>
        <p>Focus on your goals without distraction</p>
      </div>
    </div>
    </div>
    <div className='outer-bottom'></div>
<div className='jss140'>
    <div className='inner-bottom'>
      <div className='jss90'>1-MONTH FREE</div>
      <h2>Go Premium, Get Results</h2>
      <p>Choose a MyFitnessPal Premium plan to start your 1-month free trial. You will be charged after the trial has ended—cancel anytime.</p>
      <div className='subscription'>
        <div></div>
        <div></div>
      </div>
    </div>
</div>


    </div>
  )
}

export default Premium