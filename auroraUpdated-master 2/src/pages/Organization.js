import React, {useEffect, useState} from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/NavbarMenu'
import Footer from '../layout/Footer'
import axios from "axios";
import {getElement} from "bootstrap/js/src/util";

function Org(usp) {
  return (
      <div className="container-row border-bottom" style={{background:'#FFFFFF',width:'50%',marginTop:'5%', display:'flex', alignItems:'center'}}>
        <img src={require('../Icon/nophoto.png')} alt="Моя картинка" style={{width: '100px', height: '100px',caretColor:'transparent'}} />
        <div className='container' style={{marginLeft:'10px'}}>
          <h2 style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>{usp.orgName}</h2>
          <h3 style={{textAlign:'left',fontSize:'15px',color:'#8B8888',caretColor:'transparent'}}>ID: {usp.orgId}</h3>
          <p  style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>{usp.orgAbout}</p>
        </div>
      </div>
  );
}

function OrgList(usp) {
  return (
      <div className='container'>
        {usp.orgs.map(org => (
            <Org orgId={org.id} orgName={org.organizationName} orgAbout={org.about}/>
        ))}
      </div>
  );
}


export default function Organization() {

  const [orgs, setOrgs] = useState([]);
  const [orgsbyid, setOrgsByID] = useState('');
  const [orgbyactiv,setOrgsByActiv] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/showAllOrgs')
        .then(response => {
          console.log(response.data);
          setOrgs(response.data);
        })
        .catch(error => {
          console.error('Error fetching posts data:', error);
        });
  }, []);

  function showByID()
  {
    document.getElementById("show-orgs").style.display = "none";
    document.getElementById("show-org-by-id").style.display = "block";
    document.getElementById("show-org-by-activity").style.display = "none";
    const id = document.getElementById('search-input').value;
    axios.get(`http://localhost:8081/api/v1/findOrgById/${id}`)
        .then(response => {
          console.log('Response:', response.data);
          setOrgsByID(response.data);
        })
        .catch(error => {
          console.error('Error fetching org data:', error);
        });
  }

  function showAll()
  {
    document.getElementById("show-orgs").style.display = "block";
    document.getElementById("show-org-by-id").style.display = "none";
    document.getElementById("show-org-by-activity").style.display = "none";
  }

    function getByActivity() {
        document.getElementById("show-orgs").style.display = "none";
        document.getElementById("show-org-by-id").style.display = "none";
        const active = document.getElementById('FromOrg').value;

        axios.get('http://localhost:8081/api/v1/showAllOrgs')
            .then(response => {
                console.log(response.data);
                const orgsWithActivity = response.data.filter(org => org.activity === active);
                if (orgsWithActivity.length > 0) {
                    setOrgsByActiv(orgsWithActivity[0]); // Set the first organization as orgbyactiv
                    document.getElementById("show-org-by-activity").style.display = "block";
                } else {
                    setOrgsByActiv(''); // No matching organization found, set orgbyactiv to an empty string
                }
                console.log('ifwork');
            })
            .catch(error => {
                console.error('Error fetching posts data:', error);
            });
    }




    return (
    <div>
    <Navbar/>
    <Navbar_menu/>
    <img src={require('../Icon/image.png')} alt="Моя картинка" style={{width: '70%', height: '50%'}}/>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between",marginBottom:'5%',marginTop:'5%'}}>
    <div style={{ width: "15%",background:'rgba(217, 217, 217, 0.18)',marginLeft:'15%'}}>
    <div>
  <h5 style={{fontFamily:'Livvic'}}>Region</h5>
  <select className="form-control mr-2" id="region" style={{width:'50%',marginLeft:'25%',background:'#D9D9D9'}}>
      <option value="Almaty">Almaty</option>
      <option value="Astana">Astana</option>
      <option value="Shymkent">Shymkent</option>
      {/* Добавьте остальные варианты регионов здесь */}
    </select>
    <h5 style={{marginTop:'5%',fontFamily:'Livvic'}}>From of organization</h5>
  <div class="text text-start" style={{ display: "flex", flexDirection: "column" }}>
      <select className="form-control mr-2" id="FromOrg"
              style={{width: '90%', marginLeft: '5%', background: '#D9D9D9'}}>
          <option value="Public Association">Public Association</option>
          <option value="Public Foundation">Public Foundation</option>
          <option value="Charity Fund">Charity Fund</option>
          <option value="Volunteer movement">Volunteer movement</option>
          <option value="Initiative">Initiative</option>
          <option value="Group">Group</option>
      </select>
  </div>
  <h5 style={{marginTop:'5%',fontFamily:'Livvic'}}>Direction</h5>
      <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
        <select className="form-control mr-2" id="direction" style={{width: '90%', marginLeft: '5%', background: '#D9D9D9'}}>
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
      <button id="" className="btn btn-outline-secondary" onClick={getByActivity} type="button" style={{marginTop:'5%',marginBottom:'5%'}}>
        Sort
      </button>
</div>
    </div>
  <div style={{ width: "70%" }}>
  <div class="input-group mb-3" style={{width:'50%',marginLeft:'25%'}}>
    <button id="" className="btn btn-outline-secondary" onClick={showAll} type="button">
      SHOW ALL
    </button>
  <input id="search-input" type="text" class="form-control" placeholder="Find by ID" aria-label="Username" aria-describedby="basic-addon1"/>
  <div class="input-group-append">
    <button id="" class="btn btn-outline-secondary" onClick={showByID} type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
    </button>
    </div>
    </div>

    <div id="show-orgs" className="container border-bottom mb-5 mt-5" style={{marginLeft: '5%', width: '80%',display:'yes'}}><OrgList orgs={orgs}/></div>
    <div id="show-org-by-id" className="container mb-5 mt-5" style={{display:'none'}}>
      <div className="container-row border-bottom" style={{background:'#FFFFFF',width:'50%',marginTop:'5%', display:'flex', alignItems:'center'}}>
        <img src={require('../Icon/nophoto.png')} alt="Моя картинка" style={{width: '100px', height: '100px',caretColor:'transparent'}} />
        <div className='container' style={{marginLeft:'10px'}}>
          <h2 style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>{orgsbyid.email}</h2>
          <h3 style={{textAlign:'left',fontSize:'15px',color:'#8B8888',caretColor:'transparent'}}>ID: {orgsbyid.id}</h3>
          <p  style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>{orgsbyid.about}</p>
        </div>
      </div>
    </div>

      <div id="show-org-by-activity" className="container mb-5 mt-5" style={{ display: 'none' ,marginLeft: '5%', width: '80%'}}>
          <div className="container-row border-bottom" style={{ background: '#FFFFFF', width: '50%', marginTop: '5%', display: 'flex', alignItems: 'center' }}>
              <img src={require('../Icon/nophoto.png')} alt="Моя картинка" style={{ width: '100px', height: '100px', caretColor: 'transparent' }} />
              <div className='container' style={{ marginLeft: '10px' }}>
                  <h2 style={{ textAlign: 'left', fontFamily: 'Livvic', fontSize: '20px', caretColor: 'transparent' }}>{orgbyactiv.email}</h2>
                  <h3 style={{ textAlign: 'left', fontSize: '15px', color: '#8B8888', caretColor: 'transparent' }}>ID: {orgbyactiv.id}</h3>
                  <p style={{ textAlign: 'left', fontFamily: 'Livvic', fontSize: '20px', caretColor: 'transparent' }}>{orgbyactiv.about}</p>
              </div>
          </div>
      </div>
  </div>
</div>
    <Footer/>
    </div>
  )
}
