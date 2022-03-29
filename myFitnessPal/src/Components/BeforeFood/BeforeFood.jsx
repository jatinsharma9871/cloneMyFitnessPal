
import React from 'react'
import '../BeforeFood/BeforeFood.css'

function BeforeFood() {
  return (<>
  
   <div className='main-div'>

   <div className='main_searchbar'><i class="fa-solid fa-magnifying-glass"></i><input type="search" placeholder='search for Food Brand or Restorent' className='serchbar'/></div>
   
   <div className='img_1'><img src="https://www.myfitnesspal.com/react-static/e95f17aa29d83b7a7588a0f825f7b66f.svg" alt="" /></div>
   <div className='food_name'>
   <h3>Food Analysis</h3>
   <span>Understand how the food you’re eating contributes to your daily calories, macronutrients, and micronutrients.</span>
   </div>
   <div className='all_carts'>
       <div className='cart_1'>
           <div><img src="https://www.myfitnesspal.com/react-static/b3754d3c0fff1f109ab484002e29f3a3.png" alt="" className='img_22'/></div>
           <h3>10 Make-Ahead Breakfasts Under 300 Calories <span>MyFitnessPal Blog</span></h3>
       </div>
       <div className='cart_1'>
           <div><img src="https://www.myfitnesspal.com/react-static/fda07e55f2952750bad581ed72cfad0a.png" alt="" className='img_22'/></div>
           <h3>10 Make-Ahead Breakfasts Under 300 Calories <span>MyFitnessPal Blog</span></h3>
       </div>
       
   </div>
   </div>

   
   </>
  )
}

export default BeforeFood