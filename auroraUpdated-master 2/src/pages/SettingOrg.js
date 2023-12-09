import React, {useEffect} from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/NavbarMenu'
import axios from 'axios'
import { useState } from 'react'
import {Link} from "react-router-dom";

export default function OrganizationProfile() {

    const token = localStorage.getItem('token');
    const [orgData,setOrgData] = useState('');
    const [about,setAbout] = useState('');



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

    async function update(event) {
        event.preventDefault();
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        try {
            await axios.put(
                "http://localhost:8081/api/v1/aboutMeOrg",
                { about: about },
                config
            );
            alert("Update Successfully");
            window.location.replace('/organizationProfile');
            setAbout("");
        } catch (err) {
            alert("Failed");
        }
    }

    return (
        <div>

            <Navbar/>
            <Navbar_menu/>
            <div class="container mb-5 mt-5">
                <div class="row">
                    <div class="col-md-6">

                        <div class="profile-block border" style={{background:'rgba(217, 217, 217, 0.18)',borderColor:'#141414',width:'400px',height:'600px'}}>
                            <p class="text-start" style={{fontWeight:'bold',marginLeft:'5%',marginTop:'5%'}}>{orgData.organizationName}</p>
                            <p class="text-start" style={{color:'rgba(139, 136, 136, 1)',marginLeft:'5%'}}>Organization ID:<a>{orgData.id}</a></p>
                            <div class="container border-top mt-5"></div>
                            <p class="text-start" style={{fontWeight:'bold',marginTop:'40px',marginLeft:'5%',color:'rgba(139, 136, 136, 1)'}}>City:</p>
                            <p class="text-start" style={{marginLeft:'5%',fontWeight:'bold'}}>{orgData.adress}</p>
                            <p class="text-start" style={{fontWeight:'bold',marginTop:'40px',marginLeft:'5%',color:'rgba(139, 136, 136, 1)'}}>Activity:</p>
                            <p class="text-start" style={{marginLeft:'5%',fontWeight:'bold'}}>{orgData.activity}</p>
                            <p class="text-start" style={{fontWeight:'bold',marginTop:'40px',marginLeft:'5%',color:'rgba(139, 136, 136, 1)'}}>Contacts:</p>
                            <p class="text-start" style={{marginLeft:'5%',fontWeight:'bold'}}>{orgData.number}</p>
                            <p class="text-start" style={{marginLeft:'5%',fontWeight:'bold'}}>{orgData.email}</p>
                            <div className='text text-start' style={{marginLeft:'2%',marginTop:'5%'}}>
                                <Link className='btn btn-light' to={'/addPostOrganization'}>Add post</Link>
                            </div>
                            <div className='text text-start' style={{marginLeft:'2%',marginTop:'2.5%'}}>
                                <Link className='btn btn-light' to={'/settingOrg'}>Setting</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">

                        <div className="settings-menu">
                            <h1 class="text-start" style={{fontWeight:'bold'}}>Pleas write About organization</h1>
                            <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                                <label htmlFor="experience" className="mr-2"
                                       style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>AboutYou:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="about"
                                    placeholder="Max char is 300"
                                    style={{
                                        width: '600px',
                                        marginLeft: '15%',
                                        background: '#D9D9D9',
                                        height: '250px',
                                        resize: 'none', // Отключение возможности изменения размера текстового поля
                                        overflowY: 'auto', // Позволяет прокручивать текст, если превышает высоту текстового поля
                                        paddingTop: '10px', // Добавление отступа сверху для выравнивания текста
                                    }}
                                    value={about}
                                    onChange={(event) => {
                                        setAbout(event.target.value.substring(0, 300)); // Ограничение на 300 символов
                                    }}
                                />

                            </div>
                            <button className="btn" onClick={update}
                                    style={{background: '#006BA8', fontFamily: 'Livvic', color: '#FFF', marginLeft: '10%'}}>Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}
