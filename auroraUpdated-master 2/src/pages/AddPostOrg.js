import React, {useEffect, useState} from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/NavbarMenu'
import {Link} from "react-router-dom";
import axios from "axios";

export default function AddPostOrg() {

  const token = localStorage.getItem('token');
  const [orgData,setOrgData] = useState('');


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timeAndPlace, setTimeAndPlace] = useState('');
  const [ratingOfVolunteer, setRating] = useState('');
  const [count, setCount] = useState('');


  useEffect(() => {
    const config = {
      headers: {Authorization: `Bearer ${token}`},
    };

    if(config != null){
      axios.get('http://localhost:8081/api/v1/getOrganization', config)
          .then(response => {
            if(response.data.role === 'ORGANIZATION') {
              setOrgData(response.data);
            }
          })
          .catch(error => {
            console.error('Error fetching profile data:', error);
            window.location.replace('/');
          });
    }
  }, [token]);

  async function addPost(event) {

    event.preventDefault();
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    };

    try {
      await axios.post("http://localhost:8081/api/v1/addPost",
          {
            title: title,
            description: description,
            count: count,
            timeAndPlace: timeAndPlace,
            ratingOfVolunteer: ratingOfVolunteer
    },config);

      alert("Post added");

      setTitle("");

      setDescription("");

      setCount("");

      setRating("");

      setTimeAndPlace('');

      window.location.replace('/organizationProfile');
    } catch (err) {
      alert("Add error");
    }
  }

  return (
      <div>
        <Navbar/>
        <Navbar_menu/>
        <div className="container mb-5 mt-5">
          <div className="row">
            <div className="col-md-6">

              <div className="profile-block border" style={{
                background: 'rgba(217, 217, 217, 0.18)',
                borderColor: '#141414',
                width: '400px',
                height: '600px'
              }}>
                <p className="text-start"
                   style={{fontWeight: 'bold', marginLeft: '5%', marginTop: '5%'}}>{orgData.organizationName}</p>
                <p className="text-start" style={{color: 'rgba(139, 136, 136, 1)', marginLeft: '5%'}}>Organization
                  ID:<a>{orgData.id}</a></p>
                <div className="container border-top mt-5"></div>
                <p className="text-start" style={{
                  fontWeight: 'bold',
                  marginTop: '40px',
                  marginLeft: '5%',
                  color: 'rgba(139, 136, 136, 1)'
                }}>City:</p>
                <p className="text-start" style={{marginLeft: '5%', fontWeight: 'bold'}}>Astana</p>
                <p className="text-start" style={{
                  fontWeight: 'bold',
                  marginTop: '40px',
                  marginLeft: '5%',
                  color: 'rgba(139, 136, 136, 1)'
                }}>Activity:</p>
                <p className="text-start" style={{marginLeft: '5%', fontWeight: 'bold'}}>{orgData.activity}</p>
                <p className="text-start" style={{
                  fontWeight: 'bold',
                  marginTop: '40px',
                  marginLeft: '5%',
                  color: 'rgba(139, 136, 136, 1)'
                }}>Contacts:</p>
                <p className="text-start" style={{marginLeft: '5%', fontWeight: 'bold'}}>{orgData.number}</p>
                <p className="text-start" style={{marginLeft: '5%', fontWeight: 'bold'}}>{orgData.email}</p>
                <div className='text text-start' style={{marginLeft: '2%', marginTop: '5%'}}>
                  <Link className='btn btn-light' to={'/addPostOrganization'}>Add post</Link>
                </div>
                {/*<div className='text text-start' style={{marginLeft: '2%'}}>*/}
                {/*  <Link className='btn btn-light'>Settings</Link>*/}
                {/*</div>*/}
              </div>
            </div>
            <div className="col-md-6">

              <div className="settings-menu">
                <div className="settings-menu">
                  <h3 className='text-start' style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Add post</h3>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                      <label htmlFor="experience" className="mr-2"
                             style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>TimeAndPlace:</label>
                      <input type="text" className="form-control" id="title" placeholder="Enter post title"
                             value={timeAndPlace} onChange={(event) =>
                      {
                        setTimeAndPlace(event.target.value);
                      }
                      }
                             style={{width: '530px', marginLeft: '9%', background: '#D9D9D9'}}/>
                    </div>
                  </div>
                  <div className="container border-top mt-5"></div>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <label htmlFor="description" className="mr-2"
                           style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Description:</label>

                    <select className="form-control mr-2" id="description"
                            value={description} onChange={(event) =>
                    {
                      setDescription(event.target.value);
                    }
                    }
                            style={{width: '600px', marginLeft: '15%', background: '#D9D9D9'}}>
                      <option type="text"  value="Volunteering in medicine">Volunteering in medicine</option>
                      <option type="text"  value="Environmental volunteering">Environmental volunteering</option>
                      <option type="text"  value="Social volunteering">Social volunteering</option>
                      <option type="text"  value="Media volunteering">Media volunteering</option>
                      <option type="text"  value="Event volunteering">Event volunteering</option>
                      <option type="text"  value="Help animals">Help animals</option>
                      <option type="text"  value="Emergency volunteering">Emergency volunteering</option>
                      <option type="text"  value="Cultural volunteering">Cultural volunteering</option>
                      <option type="text"  value="Donorship">Donorship</option>
                      <option type="text"  value="Sports volunteering">Sports volunteering</option>
                      <option type="text"  value="Pro bono volunteering">Pro bono volunteering</option>
                      <option type="text"  value="Corporate volunteering">Corporate volunteering</option>
                      <option type="text"  value="Online volunteering">Online volunteering</option>
                      <option type="text" value="Ethno – volunteering">Ethno – volunteering</option>
                    </select>
                  </div>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <label htmlFor="experience" className="mr-2"
                           style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Title:</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter post title"
                           value={title} onChange={(event) =>
                    {
                      setTitle(event.target.value);
                    }
                    }
                           style={{width: '600px', marginLeft: '20%', background: '#D9D9D9'}}/>
                  </div>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <label htmlFor="experience" className="mr-2"
                           style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Rating:</label>
                    <input type="number" className="form-control" id="ratingOfVolunteer" placeholder="Rating of volunteers"
                           value={ratingOfVolunteer} onChange={(event) =>
                    {
                      setRating(event.target.value);
                    }
                    }
                           style={{width: '600px', marginLeft: '20%', background: '#D9D9D9'}}/>
                  </div>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <label htmlFor="experience" className="mr-2"
                           style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Count:</label>
                    <input type="number" className="form-control" id="count" placeholder="Enter count of people"
                           value={count} onChange={(event) =>
                    {
                      setCount(event.target.value);
                    }
                    }
                           style={{width: '600px', marginLeft: '20%', background: '#D9D9D9'}}/>
                  </div>
                  <div className="container border-top mt-5"></div>
                  <div className="container" style={{marginTop: '5%', marginLeft: '10%'}}>
                    <Link className="btn btn-light" style={{marginLeft: '50%'}} to='/organizationProfile'>Cancel</Link>
                    <button className="btn" onClick={addPost}
                            style={{background: '#006BA8', fontFamily: 'Livvic', color: '#FFF', marginLeft: '10%'}}>Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
}
