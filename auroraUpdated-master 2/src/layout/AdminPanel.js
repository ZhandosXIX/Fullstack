import React from 'react'
import { Link } from "react-router-dom"
import axios from "axios";
function exit()
{
  localStorage.clear();
  window.location.replace("/");
}
export default function() {
  
  return (
    <div class='container' style={{width:'100%',background:'#006BA8',marginTop:'1%'}}>
    <nav class="navbar navbar-expand-lg navbar-light" style={{marginBottom:'50px'}}>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-left" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item mx-0" style={{paddingLeft:'70%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#FFF',caretColor:'transparent'}} href="/PostAdmin">Posts</a>
      </li>
      <li class="nav-item mx-0" style={{paddingLeft:'40%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#FFF',caretColor:'transparent'}} href="/VolunteersAdmin">Volunteers</a>
      </li>
      <li class="nav-item mx-0" style={{paddingLeft:'40%',fontSize:'20px',textTransform:'uppercase',fontFamily:'Livvic'}}>
        <a class="nav-link" style={{color:'#FFF',caretColor:'transparent'}} href="/OrganizationAdmin">Organizations</a>
      </li>
      <li className="nav-item mx-0"
          style={{paddingLeft: '70%', fontSize: '20px', textTransform: 'uppercase', fontFamily: 'Livvic'}}>
        <button onClick={exit}>exit</button>
      </li>
      </ul>
      </div>
      </nav>
      </div>
  )
}
