import React, {useEffect} from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/NavbarMenu'
import Footer from '../layout/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Setting() {

    const token = localStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    /*Место для хранение данных после получение json формате*/
  
  
    const [userData, setUserData] = useState('');

    const [dayOfBirth, setDay] = useState('');
    const [gender,setGender] = useState('');
    const [region,setRegion] = useState('');
    const [expiriance,setExp] = useState('');
    const [about,setAbout] = useState('');


   
  async function update(event)
  {
    event.preventDefault();
    try
    {
      await axios.put("http://localhost:8081/api/v1/aboutMe",

          {
          // dayOfBirth: dayOfBirth,
          //
          // gender: gender,
          //
          // region: region,
          //
          // expiriance: expiriance,

          about: about
          },config);

      alert("Update Successfully");
      //
      // setDay("");
      //
      // setGender("");
      //
      // setRegion("");
      //
      // setExp("");

      setAbout("");
    }
    catch(err)
    {
      alert("User Registation Failed");
    }
  }

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/getUser', config).then((response) => {
            console.log('User Data',response.data);
            setUserData(response.data);
        }).catch((error) => {
            console.log('cannot get user data',error);
        })}, []);

    return (
        <div>
          <Navbar/>
          <Navbar_menu/>
          <div class="container mb-5 mt-5" style={{caretColor:'transparent'}}>
            <div class="row">
              <div class="col-md-6">
  
                <div class="profile-block border" style={{
                  background: 'rgba(217, 217, 217, 0.18)',
                  borderColor: '#141414',
                  width: '400px',
                  height: '600px'
                }}>
                  <img src={require('../Icon/nophoto.png')} alt="Моя картинка"
                       style={{width: '100px', height: '100px'}}/>
                  <h2 class="text-start"
                      style={{fontWeight: 'bold', marginLeft: '5%', marginTop: '5%', fontFamily: 'Livvic'}}>{userData.firstname}</h2>
                  <h4 class="text-start"
                      style={{color: 'rgba(139, 136, 136, 1)', marginLeft: '5%', fontFamily: 'Livvic'}}>Volunteer
                    ID:<a>{userData.id}</a></h4>
                  <div class="rating">
                    <p class="text-start" style={{fontWeight: 'bold', marginLeft: '5%', fontFamily: 'Livvic'}}>Volunteer
                      Rating</p>
                    <div className="progress" style={{width: '90%', marginLeft: '5%'}}>
                        <div className="progress-bar" role="progressbar" style={{ width: `${userData.rating}%` }} aria-valuenow={userData.rating} aria-valuemin={0} aria-valuemax={100}>
                            {userData.rating}
                        </div>
                    </div>
                  </div>
                  <div class="container border-top mt-5"></div>
                  <table style={{width:'50%',marginTop:'5%'}}>
                     <tr>
                      <td class="text-start" style={{paddingBottom: '50px',paddingLeft:"15%"}}>
                          <Link to='/profile' class="text-start" style={{fontWeight: 'bold', fontFamily: 'Livvic',textDecoration:'none',color:'#000',fontSize:'20px'}}>
                          My profile
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td  class="text-start" style={{paddingBottom: '50px',paddingLeft:"15%"}}>
                          <Link to='/myproject' class="text-start" style={{fontWeight: 'bold', fontFamily: 'Livvic',textDecoration:'none',color:'#000',fontSize:'20px'}}>
                          My project
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-start" style={{paddingLeft:"15%"}}>
                         <Link to='/setting' class="text-start" style={{fontWeight: 'bold', fontFamily: 'Livvic',textDecoration:'none',color:'#000',fontSize:'20px'}}>
                         Setting
                          </Link>
                        </td>
                      </tr>
                      </table>
  
                </div>
              </div>
              <div class="col-md-6">
  
                <div className="settings-menu">
                  <h3 className='text-start' style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Personal Information</h3>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                  </div>
                  <div class="container border-top mt-5"></div>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <label htmlFor="direction" className="mr-2"
                           style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Direction:</label>
                    <select className="form-control mr-2" id="direction"
                            style={{width: '600px', marginLeft: '15%', background: '#D9D9D9'}}>
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
                      {/* Добавьте остальные варианты направлений здесь*/}
                    </select>
                  </div>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <label htmlFor="experience" className="mr-2"
                           style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Experience:</label>
                    <input type="number" className="form-control" id="experience" placeholder="Years of Experience"
                           style={{width: '600px', marginLeft: '13%', background: '#D9D9D9'}}/>
                  </div>
                    <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                        <label htmlFor="experience" className="mr-2"
                               style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>AboutYou:</label>
                        <input type="text" className="form-control" id="about" placeholder="Max char is 300"
                               style={{width: '600px', marginLeft: '15%', background: '#D9D9D9', height:'250px'}}
                               value={about} onChange={(event) =>
                        {
                            setAbout(event.target.value);
                        }
                        }/>
                    </div>
                  <div class="container border-top mt-5"></div>
                  <div class="container" style={{marginTop: '5%', marginLeft: '13%'}}>
                    <button className="btn btn-light" style={{marginLeft: '50%'}}>Cancel</button>
                    <button className="btn" onClick={update}
                            style={{background: '#006BA8', fontFamily: 'Livvic', color: '#FFF', marginLeft: '10%'}}>Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    )
  }
