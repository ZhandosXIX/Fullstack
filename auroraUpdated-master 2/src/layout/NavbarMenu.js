import React from 'react'
import { Link } from "react-router-dom"

export default function() {
  return (
<nav class="navbar navbar-expand-lg navbar-light" style={{marginBottom:'50px',width:'100%'}}>
  <div class="collapse navbar-collapse justify-content-left" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item mx-0" style={{paddingLeft:'10%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#000'}} href="/">Home</a>
      </li>
      <li class="nav-item mx-0" style={{paddingLeft:'18%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#000'}} href="/news">News</a>
      </li>
      <li class="nav-item mx-0" style={{paddingLeft:'18%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#000'}} href="/volunteering">Volunteers</a>
      </li>
      <li class="nav-item mx-0" style={{paddingLeft:'18%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#000'}} href="/organization">Organizations</a>
      </li>
      <li style={{paddingLeft: '18%', fontSize: '20px', textTransform: 'uppercase', fontFamily: 'Livvic', display: 'inline-block', whiteSpace: 'nowrap'}}>
        <a className="nav-link" style={{color: '#000'}} href="/about">About Us</a>
      </li>
      <li class="nav-item mx-0" style={{paddingLeft:'18%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#000'}} href="/contacts">Contacts</a>
      </li>
    </ul>
  </div>
</nav>
  )
}
