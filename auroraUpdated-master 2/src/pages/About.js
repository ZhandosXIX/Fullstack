 import React from 'react'
 import Navbar from '../layout/Navbar'
 import Navbar_menu from '../layout/NavbarMenu'
 import Footer from '../layout/Footer'

export default function About() {
  return (
    <div>
      <Navbar/>
      <Navbar_menu/>
        <div class="container rounded-pill mb-5" style={{background:'#006BA8',boxShadow:'0px 5px 5px black'}}>
        <h1 style={{color:'#FFF',fontFamily:'Livvic',fontSize:'50px'}}><strong>About us</strong></h1>
        </div>
        <div class="container mt-5 mb-5">
        <h1 style={{color:'#000'}}>Dear visitors, welcome to the Aurora.kz platform!</h1>
        </div>
        <div class="container" style={{background:'rgba(0, 107, 168, 0.2)',borderRadius:'50px'}}>
         <h2><strong>Our Mission:</strong></h2>   
         <p style={{fontSize:'30px'}}>
         We are dedicated to fostering a culture of volunteerism and service to others,
         by empowering individuals to engage in meaningful volunteer work that aligns
         with their skills, interests, and passions. We strive to create a world where 
         everyone has the opportunity to contribute to the greater good and create 
         positive change.
         </p>
        </div>
        <div class="container mb-5 mt-5">
        <img src="https://pinellas.gov/wp-content/uploads/2022/03/Parks_volunteers1.jpg" alt="Картинка 2" class="img-fluid" style={{borderRadius:'50px'}}/>
        </div>
        <div class="container" style={{background:'rgba(0, 107, 168, 0.2)',borderRadius:'50px'}}>
         <h2><strong>Join Us:</strong></h2>   
         <p style={{fontSize:'30px'}}>
         If you are looking for meaningful volunteer opportunities, we invite you 
         to join our community. Sign up for free on our platform, browse our database of opportunities, 
         and connect with organizations that align with your values and passions. 
         Together, we can create a better world through service and volunteerism.
         </p>
        </div>
        <div class="container mb-5 mt-5 rounded-pill" style={{background:'#006BA8',width:'500px'}}>
            <a class="btn"style={{fontSize:'40px',color:'#FFF'}}><strong>Become a volunteer</strong></a>
        </div>
        <Footer/>
    </div>
  )
}
