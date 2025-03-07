import React, { useEffect, useState } from 'react';
import '../Assets/Styles/feedback.css';
import '../Assets/Styles/Notification Styles/Formsubmition.css';
import '../Assets/Styles/Notification Styles/FlotingBtn.css';
import FormSubmition from './Notification/FormSubmition';
import FlotingBtn from './Notification/FlotingBtn';
import Review from './Review';
import { useNavigate } from 'react-router-dom';

export default function Feedback() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [problem, setProblem] = useState('');
  const [experience, setExperience] = useState('');
  const [bookmark, setBookmark] = useState('');
  const [date, setDate] = useState(
    `${new Date().getDate()} ${new Date().toLocaleString('en-us', { month: 'short' })} ${new Date().getFullYear()}`
  );

  // Submit Feedback Data
  const submitData = async (event) => {
    event.preventDefault();

    const res = await fetch('https://bherav-shakti-default-rtdb.firebaseio.com/feedbackData.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone, address, problem, experience, bookmark, date }),
    });

    if (res.ok) {
      setName('');
      setPhone('');
      setAddress('');
      setProblem('');
      setExperience('');
      document.getElementById('formsubmited').style.display = 'block';
      window.scrollTo(0, 0);
    } else {
      alert('Failed to submit feedback.');
    }
  };

  // Fetch Feedback Data
  const fetchData = async () => {
    const url = 'https://bherav-shakti-default-rtdb.firebaseio.com/feedbackData.json';
    try {
      const response = await fetch(url);
      const json = await response.json();
      const data = Object.values(json);
      let id = 0;
      data.forEach((item) => {
        if (item.bookmark.length !== 0) {
          window.localStorage.setItem(
            id,
            JSON.stringify({
              name: item.name,
              address: item.address,
              phone: item.phone,
              experience: item.experience,
              problem: item.problem,
              date: item.date,
            })
          );
          id++;
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Feedback Form */}
      <FormSubmition />
      <div className="feedback-container">
        <h2 className="feedback-heading">बेहतर सेवाओं के लिए अपना अनुभव हमारे साथ साझा करें</h2>
        <div className="feedback-form">
          <form onSubmit={submitData}>
            <div className="form-group">
              <label>अपना नाम दर्ज करें</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>अपना फोन नंबर दर्ज करें</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>अपना पता दर्ज करें</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>आपकी समस्या क्या थी</label>
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>अब आपका क्या अनुभव है</label>
              <textarea
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              सब्मिट करे
            </button>
          </form>
        </div>
      </div>

      {/* Learn More Button */}
      <button className="learn-more-button" onClick={() => navigate('/profile')}>
        और अधिक जानें
      </button>

      {/* Reviews Section */}
      <div className="reviews-container">
        <h2 className="reviews-heading">जानिए लोग क्या कहते हैं</h2>
        <Review />
      </div>

      {/* Floating Button */}
      <FlotingBtn />
    </>
  );
}