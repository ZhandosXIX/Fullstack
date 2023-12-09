import React from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/NavbarMenu'
import Footer from '../layout/Footer'

export default function Contacts() {
  return (
    <div>
      <Navbar/>
      <Navbar_menu/>
        <div class="container rounded-pill mb-5" style={{background:'#006BA8',boxShadow:'0px 5px 5px black'}}>
        <h1 style={{color:'#FFF',fontFamily:'Livvic',fontSize:'50px'}}><strong>Contacts</strong></h1>
        </div>
        <div class="container mb-5 mt-5" style={{background:'rgba(0, 107, 168, 0.2)',borderRadius:'50px',width:'100%'}}>
        <div class="d-flex flex-column">
        <div class="p-2" style={{fontFamily:'Manrope'}}><h2>Address:</h2><p style={{fontSize:'20px'}}>Almaty,Manasa Street 34/1</p></div>
        <div class="p-2" style={{fontFamily:'Manrope'}}><h2>Phone Number:</h2><p style={{fontSize:'20px'}}>+7 708 535 86 35</p></div>
        <div class="p-2" style={{fontFamily:'Manrope'}}><h2>E-mail:</h2><p style={{fontSize:'20px'}}>tauzhan_kaken@mail.ru</p></div>
        <div class="p-2" style={{fontFamily:'Manrope'}}><a href='/' class="text-decoration-none" style={{fontSize:'20px'}}>Write us</a></div>
        </div>
        </div>
        <div>
            <h1 style={{fontFamily:'Livvic'}}>We are on the map:</h1>
        </div>

        <div class="container mb-5 mt-5">
            <div class="map-area">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.8210575003654!2d76.90744007685869!3d43.23421127112513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883692edc3c8563%3A0x4c47dd516705b4e3!2z0YPQu9C40YbQsCDQnNCw0L3QsNGB0LAgMzQsINCQ0LvQvNCw0YLRiyAwNTAwMDA!5e0!3m2!1sru!2skz!4v1681743459337!5m2!1sru!2skz"
             width={1300} height={650} style={{border: '1'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <Footer/>
    </div>
  )
}



/* Avrora-removebg-preview 2 */


