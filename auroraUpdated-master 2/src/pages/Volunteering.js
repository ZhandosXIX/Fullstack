import React, {useEffect, useState} from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/NavbarMenu'
import Footer from '../layout/Footer'
import axios from "axios";

function User(usp) {
  return (
      <div className="container-row border-bottom" style={{background:'#FFFFFF',width:'50%',marginTop:'5%', display:'flex', alignItems:'center'}}>
        <img src={require('../Icon/nophoto.png')} alt="Моя картинка" style={{width: '100px', height: '100px',caretColor:'transparent'}} />
        <div className='container' style={{marginLeft:'10px'}}>
          <h2 style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>{usp.firstname},{usp.lastname}</h2>
          <h3 style={{textAlign:'left',fontSize:'15px',color:'#8B8888',caretColor:'transparent'}}>ID: {usp.userId}</h3>
          <p  style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>{usp.about}</p>
        </div>
      </div>
  );
}


function FindUser(fub) {
  return (
      <div className="container-row border-bottom" style={{background:'#FFFFFF',width:'50%',marginTop:'5%', display:'flex', alignItems:'center'}}>
        <img src={require('../Icon/nophoto.png')} alt="Моя картинка" style={{width: '100px', height: '100px',caretColor:'transparent'}} />
        <div className='container' style={{marginLeft:'10px'}}>
          <h2 style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>{fub.firstname},{fub.lastname}</h2>
          <h3 style={{textAlign:'left',fontSize:'15px',color:'#8B8888',caretColor:'transparent'}}>ID: {fub.userId}</h3>
          <p  style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>{fub.about}</p>
        </div>
      </div>
  );
}

function UserList(usp) {
  return (
      <div className='container'>
        {usp.users.map(user => (
            <User userId={user.id} firstname={user.firstname} lastname={user.lastname} rating={user.rating} about={user.about}/>
        ))}
      </div>
  );
}

function FindUserList(fub){
  return (
      <div className='container'>
        {fub.volByName.map(vol => (
            <FindUser userId={vol.id} firstname={vol.firstname} lastname={vol.lastname} rating={vol.rating} about={vol.about}/>
        ))}
      </div>
  )
}
export default function Volunteering() {
  const [users, setUsers] = useState([]);
  const [volByName, setVolByName] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/showAllUsers')
        .then(response => {
          console.log('Posts data:', response.data);
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching posts data:', error);
        });
  }, []);

  function showByName()
  {
    document.getElementById("show-orgs").style.display = "none";
    document.getElementById("show-org-by-id").style.display = "block";
    const lastname = document.getElementById('search-input').value;///osp
    axios.get(`http://localhost:8081/api/v1/getUserByLastname/${lastname}`)
        .then(response => {
          console.log('Response:', response.data);
          setVolByName(response.data);
        })
        .catch(error => {
          console.error('Error fetching org data:', error);
        });
  }

  function showAll()
  {
      document.getElementById("show-orgs").style.display = "block";
      document.getElementById("show-org-by-id").style.display = "none";
  }

  return (
    <div>
    <Navbar/>
    <Navbar_menu/>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between",marginBottom:'5%',marginTop:'5%'}}>
        <div style={{width: "15%", background: 'rgba(217, 217, 217, 0.18)', marginLeft: '15%'}}>
            <div>
                <h5 style={{fontFamily: 'Livvic'}}>Region</h5>
                <select className="form-control mr-2" id="region"
                        style={{width: '50%', marginLeft: '25%', background: '#D9D9D9'}}>
                    <option value="Almaty">Almaty</option>
                    <option value="Astana">Astana</option>
                    <option value="Shymkent">Shymkent</option>
                    {/* Добавьте остальные варианты регионов здесь */}
                </select>
                <h5 style={{marginTop: '5%', fontFamily: 'Livvic'}}>From of organization</h5>
                <div className="text text-start" style={{display: "flex", flexDirection: "column"}}>
                    <select className="form-control mr-2" id="direction"
                            style={{width: '90%', marginLeft: '5%', background: '#D9D9D9'}}>
                        <option value="Volunteering in medicine">Public Association</option>
                        <option value="Environmental volunteering">Public Foundation</option>
                        <option value="Social volunteering">Charity Fund</option>
                        <option value="Media volunteering">Volunteer movement</option>
                        <option value="Event volunteering">Initiative</option>
                        <option value="Help animals">Group</option>
                    </select>
                </div>
                <h5 style={{marginTop: '5%', fontFamily: 'Livvic'}}>Direction</h5>
                <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <select className="form-control mr-2" id="direction"
                            style={{width: '90%', marginLeft: '5%', background: '#D9D9D9'}}>
                        <option value="Volunteering in medicine">Volunteering in medicine</option>
                        <option value="Environmental volunteering">Environmental volunteering</option>
                        <option value="Social volunteering">Social volunteering</option>
                        <option value="Media volunteering">Media volunteering</option>
                        <option value="Event volunteering">Event volunteering</option>
                        <option value="Help animals">Help animals</option>
                        <option value="Emergency volunteering">Emergency volunteering</option>
                        <option value="Cultural volunteering">Cultural volunteering</option>
                        <option value="Donorship">Donorship</option>
                        <option value="Sports volunteering">Sports volunteering</option>
                        <option value="Pro bono volunteering">Pro bono volunteering</option>
                        <option value="Corporate volunteering">Corporate volunteering</option>
                        <option value="Online volunteering">Online volunteering</option>
                        <option value="Ethno – volunteering">Ethno – volunteering</option>
                    </select>
                </div>
                <button id="" className="btn btn-outline-secondary" onClick={showAll} type="button"
                        style={{marginTop: '5%', marginBottom: '5%'}}>
                    Sort
                </button>
            </div>
        </div>
  <div style={{ width: "70%" }}>
  <div class="input-group mb-3" style={{width:'50%',marginLeft:'25%'}}>

      <button className="btn btn-outline-secondary" type="button" onClick={showAll}>
          SHOW ALL
      </button>
  <input id="search-input" type="text" class="form-control" placeholder="Find by Lastname" aria-label="Username" aria-describedby="basic-addon1"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" onClick={showByName}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
    </button>
  </div>
    </div>


    <div id="show-orgs" className="container border-bottom mb-5 mt-5" style={{marginLeft: '5%', width: '80%',display:'yes'}}><UserList users={users}/></div>
    <div id="show-org-by-id" className="container border-bottom mb-5 mt-5" style={{marginLeft: '5%', width: '80%',display:'none'}}><FindUserList volByName={volByName}/></div>

    </div>
    </div>
    <Footer/>
    </div>
  )
}
