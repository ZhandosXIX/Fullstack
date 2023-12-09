import React, {useState} from 'react'
import axios from "axios";

export default function Registration() {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone,setPhone] = useState('');
  const [city,setCity] = useState('');

  const [orgname, setOrgName] = useState('');
  const [activity, setActivity] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [emailOrg, setOrgemail] = useState('');
  const [passwordOrg, setPasswordOrg] = useState('');

  async function registration(event)

  {

    event.preventDefault();

    try

    {

      await axios.post("http://localhost:8081/api/v1/auth/register",

          {

            firstname: name,

            lastname: lastname,

            password: password,

            city: city,

            email: email,

            phone: phone
          });

      alert("Employee Registation Successfully");

      setName("");

      setLastname("");

      setEmail("");

      setPassword("");

      setPhone("");

      window.location.replace('/signIn');
    }

    catch(err)

    {

      alert("User Registation Failed");

    }

  }

  async function registrationOrganization(event)

  {

    event.preventDefault();

    try
    {

      await axios.post("http://localhost:8081/api/v1/auth/registerOrg",

          {
            organizationName: orgname,

            activity: activity,

            adress: address,

            number: number,

            email: emailOrg,

            password: passwordOrg
          });

      alert("Organization Registation Successfully");

      setOrgName("");

      setActivity("");

      setOrgemail("");

      setPasswordOrg("");

      setNumber("");

      window.location.replace('/signIn');
    }

    catch(err)

    {
      alert("User Organization Failed");
    }

  }

  return (
      <div>
        <div style={{justifyContent: 'center',width:'25%',marginLeft:'37.5%',marginTop:'0%'}}>
          <h1 className="navbar-brand" style={{ fontSize: '50px', color: '#006BA8', fontFamily:"Playfair Display",caretColor:'transparent'}} href='/'><strong>Aurora</strong></h1>
          <img src={require('../Icon/Aurora.png')} alt="Моя картинка" style={{width: '80px', height: '55px',caretColor:'transparent'}} />
          <div style={{ backgroundColor: 'rgba(217, 217, 217, 0.18)', border: '1px solid #006BA8', padding: '1px',marginTop:'5%'}}>
            <div class="row justify-content-center text-center" style={{marginTop:'5%'}}>
              <button class="btn btn-primary" onClick={showVolunteerForm} style={{background:'#006BA8', width:'35%',marginRight:'5%', textAlign:'center',fontSize:'150%', fontFamily:'Livvic'}}>Volunteer</button>
              <button class="btn btn-primary" onClick={showOrganizationForm}  style={{background:'#006BA8', width:'35%',marginLeft:'5%', textAlign:'center',fontSize:'150%', fontFamily:'Livvic'}}>Organization</button>
              <div class="border-top" style={{border: '1px solid #006BA8',width:'96%',marginTop:'5%'}}></div>
            </div>
            <div id='volunteer-form' style={{display:'yes'}}>
              <h1 style={{fontFamily:'Livvic',color:'#006BA8',caretColor:'transparent'}}>Volunteer</h1>
              <input type="text" className="form-control" id="name" placeholder="Name"                style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'5%'}}
                     value={name} onChange={(event) =>
              {
                setName(event.target.value);
              }
              }
              />
              <input type="text" className="form-control" id="surname" placeholder="Surname"          style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'5%'}}
                     value={lastname} onChange={(event) =>
              {
                setLastname(event.target.value);
              }
              }
              />
              <input type="text" className="form-control" id="email" placeholder="email"               style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'5%'}}
                     value={email} onChange={(event) =>
              {
                setEmail(event.target.value);
              }
              }
              />
              <input type="text" className="form-control" id="phoneNumber" placeholder="Phone number" style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'5%'}}
                     value={phone} onChange={(event) =>
              {
                setPhone(event.target.value);
              }
              }
              />
              <select className="form-control" id="region" style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'5%'}}          value={city} onChange={(event) =>
              {
                setCity(event.target.value);
              }
              }>
                <option value="Almaty">Almaty</option>
                <option value="Astana">Astana</option>
                <option value="Shymkent">Shymkent</option>
              </select>
              <input type="password" className="form-control" id="password" placeholder="Password"    style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'5%'}}
                     value={password} onChange={(event) =>
              {
                setPassword(event.target.value);
              }
              }
              />
              <button className="btn btn-primary rounded-pill" onClick={registration}                                style={{background:'#006BA8', width:'65%', textAlign:'center',fontSize:'20px', fontFamily:'Livvic',fontWeight:'bold',marginBottom:'2%',marginTop:'5%'}}>Sign up</button>
            </div>
            <div id='organization-form' style={{display:'none'}}>
              <h1 style={{fontFamily:'Livvic',color:'#006BA8',caretColor:'transparent'}}>Organization</h1>
              <input type="text" className="form-control" id="nameOrganization" placeholder="Name of organization"   style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'5%'}}
                     value={orgname} onChange={(event) =>
              {
                setOrgName(event.target.value);
              }
              }/>
              <input type="text" className="form-control" id="address" placeholder="address"                         style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'5%'}}
                     value={address} onChange={(event) =>
              {
                setAddress(event.target.value);
              }
              }/>
              <select className="form-control mr-2" id="direction"
                      value={activity} onChange={(event) =>
              {
                setActivity(event.target.value);
              }
              }
                      style={{width: '65%', marginLeft: '17.5%', background:'rgba(233, 233, 233, 0.56)', marginTop:'5%'}}>
                <option value="Public Association">Public Association</option>
                <option value="Public Foundation">Public Foundation</option>
                <option value="Charity Fund">Charity Fund</option>
                <option value="Volunteer movement">Volunteer movement</option>
                <option value="Initiative">Initiative</option>
                <option value="Group">Group</option>
              </select>
              <input type="text" className="form-control" id="email" placeholder="Email"                             style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'5%'}}
                     value={emailOrg} onChange={(event) =>
              {
                setOrgemail(event.target.value);
              }
              }/>
              <input type="text" className="form-control" id="phoneNumber" placeholder="Phone number"                style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'5%'}}
                     value={number} onChange={(event) =>
              {
                setNumber(event.target.value);
              }
              }/>
              <input type="password" className="form-control" id="password" placeholder="Password"                   style={{width:'65%',background:'rgba(233, 233, 233, 0.56)',marginLeft:'17.5%',marginTop:'5%'}}
                     value={passwordOrg} onChange={(event) =>
              {
                setPasswordOrg(event.target.value);
              }
              }/>
              <button className="btn btn-primary rounded-pill" onClick={registrationOrganization} style={{background:'#006BA8', width:'65%', textAlign:'center',fontSize:'20px', fontFamily:'Livvic',fontWeight:'bold',marginBottom:'2%',marginTop:'5%'}}>Sign up</button>
            </div>
            <label style={{width:'65%',caretColor:'transparent'}}><input type="checkbox" style={{marginLeft:'0%',marginTop:'5%'}}/>By clicking the "Sign up" button, I accept the terms of the Privacy Policy</label>
          </div>
        </div>
      </div>
  )
}

function showVolunteerForm() {
  document.getElementById("volunteer-form").style.display = "block";
  document.getElementById("organization-form").style.display = "none";
}

function showOrganizationForm() {
  document.getElementById("volunteer-form").style.display = "none";
  document.getElementById("organization-form").style.display = "block";
}