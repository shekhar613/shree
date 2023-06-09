import React, { useEffect, useState } from 'react';
import '../Assets/Styles/feedback.css'
import '../Assets/Styles/Notification Styles/Formsubmition.css'
import '../Assets/Styles/Notification Styles/FlotingBtn.css'
import FormSubmition from './Notification/FormSubmition';
import FlotingBtn from './Notification/FlotingBtn';
import Review from './Review'


import {useNavigate} from 'react-router-dom';
// import bg1 from '../Assets/Images/bg1.jpg';



export default function Feedback() {
  
  const navigate = useNavigate();
  
  var month_number = new Date()
  month_number.setMonth(month_number.getMonth()-1)
  

  const [name, setname] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [problem, setproblem] = useState("");
  const [experience, setexperience] = useState("");
  const [bookmark, setbookmark] = useState("");
  const [date, setdate] = useState(`${new Date().getDate()} ${month_number.toLocaleString('en-us',{month:'short'})} ${new Date().getFullYear()}`);
  
  
  // SENDING DATA
  const submiteData = async (event) => {

    event.preventDefault();
    
    const res = fetch('https://bherav-shakti-default-rtdb.firebaseio.com/feedbackData.json',
    {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
      },
      body:JSON.stringify({name,Phone, Address,problem,experience,bookmark,date})
    }
    );
    
    if(res){
     
      setname('')
      setPhone('')
      setAddress('')
      setproblem('')
      setexperience('')
    document.getElementById('formsubmited').style.display = 'block'
    window.scrollTo(1000, 0)
    }else{
      alert("not send")
    }
  }

  // FETCHING DATA
 
  const fetchData = async() => {
    const url = "https://bherav-shakti-default-rtdb.firebaseio.com/feedbackData.json";
    try {
      const response = await fetch(url);
      const json = await response.json();
      var len = Object.values(json).length;
      let data =  Object.values(json)
      let id=0
      for (let i=0 ; i<len;i++){
       
          if(data[i]['bookmark'].length!==0){
            window.localStorage.setItem(id,JSON.stringify({'name':data[i]['name'],'address':data[i]['Address'],'phone':data[i]['Phone'],'experience':data[i]['experience'],'problem':data[i]['problem'],'date':data[i]['date']}))
            id++;
          }
        
      }
      var d = JSON.parse(window.localStorage.getItem(0))
      // console.log(d.name)
      
      // console.log(`${new Date().getDate()} ${month_number.toLocaleString('en-us',{month:'short'})} ${new Date().getFullYear()}`)
    } catch (error) {
      console.log("error", error);
    }
  };

  const get_feedBack_data=()=>{

  
    const feed = window.localStorage
    
    // console.log(window.localStorage)
  }
  get_feedBack_data()


  useEffect(() => {
    fetchData()
  },[]);





  return (<>

    {/* feedBack*/}
    <FormSubmition></FormSubmition>
    <div className='mx-2 my-5' id='feedbackSectionHeading' >
      <h4 className='my-2 mx-2 ' id='FeedbackForm' >बेहतर सेवाओं के लिए अपना अनुभव हमारे साथ साझा करें</h4>
    </div>
    <div className='container feedback my-5'>
      <form method='POST'>
        <div className="mb-3 my-3">
          <label className="mx-3 form-label">अपना नाम दर्ज करें</label>
          <input required type="text" className="form-control" value={name} onChange={(e) => setname(e.target.value)} required/>
        </div>

        <div className="mb-3">
          <label className="mx-3 form-label">अपना फोन नंबर दर्ज करें</label>
          <input required type="tel" className="form-control" value={Phone} onChange={(e) => setPhone(e.target.value)} required/>
        </div>

        <div className="mb-3">
          <label className="mx-3 form-label">अपना पता दर्ज करें</label>
          <input required type="text" className="form-control" value={Address} onChange={(e) => setAddress(e.target.value)} required/>
        </div>

        <div className="mb-3">
          <label className="mx-3 form-label">आपकी समस्या क्या थी</label>
          <textarea className="form-control" rows="2" value={problem} onChange={(e) => setproblem(e.target.value)} required></textarea>
        </div>

        <div className="mb-3">
          <label className="mx-3 form-label">अब आपका क्या अनुभव है</label>
          <textarea className="form-control" value={experience} onChange={(e) => setexperience(e.target.value)} id="exampleFormControlTextarea1" rows="3" required></textarea>
        </div>

        <button onClick={submiteData} className='my-4 mx-3 btn btn-primary' type='submite'>सब्मिट करे</button>
      </form>
    </div>






    <button className='giveFeedback' onClick={() =>navigate('/profile')}  style={{"color":'white'}}>और अधिक जानें</button>
    <br />

    

{/* 
    <button className='giveFeedback' onClick={() => window.scrollTo(0, 1599)}>अपनी प्रतिक्रिया दें </button>
    <br /> */}
    {/* <button className='seeReview' onClick={() => window.scrollTo(0, 300)} >हमारी समीक्षा</button>
    <br />
    <button className='ourServices' onClick={() => window.scrollTo(0, 2000)} >हमारी सेवाएँ</button>
    <br />
    <br />
    <br /> 
     */}





    <div className='mx-2 my-4' id="reviewSectionHeading">
      <h4 className='my-3 mx-2' >जानिए लोग क्या कहते हैं</h4>
    </div>
    {/* reviews */}
    <div className='container'>
     
      <Review ></Review>
    </div>


    {/* services */}

    {/* <div className='mx-2 my-5' id='ourServicesSectionHeading' >
      <h4 className='my-2 mx-2 ' >हमारी सेवाएँ</h4>
    </div> */}
    <FlotingBtn></FlotingBtn>
  </>
  );
}
