import React, {useState} from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/NavbarMenu'
import Footer from '../layout/Footer'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useEffect} from 'react';
import AdminPanel from "../layout/AdminPanel";


export default function AddPost() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [timeAndPlace, setTimeAndPlace] = useState('');
    const [rating, setRating] = useState('');
    const [count, setCount] = useState('');

    const [navbar, setNavbar] = useState('');
  
    const token = localStorage.getItem('token');

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
                    ratingOfVolunteer: rating
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

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}`
            }
        };
      axios.get('http://localhost:8081/api/v1/getUser', config)
          .then((response) => {
            console.log('data', response.data);
            if (response.data.role === 'ADMIN') {
              setNavbar(
                  <div>
                    <AdminPanel/>
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
    <input type="number" className="form-control" id="rating" placeholder="Rating of volunteers"
           value={rating} onChange={(event) =>
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
              );
            }
          })
          .catch((error) => {
            console.log('You dont have permission', error);
            window.location.replace('/');
          });
    });
  
    return (
        <nav>
          <ul>
            {navbar}
          </ul>
        </nav>
    );
}
