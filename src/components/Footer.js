import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/Styles/footer.css'

export default function Footer() {
  return (
        <footer>
            <h3 className='footerTitle text-white text-center'>🚩 श्री भैरव शक्ति जन कल्याण रथ 🚩</h3>
            <h5 className='footersubTitle text-white '>- ज्योतिष परामर्श केन्द्र</h5>
            <div className='socialMedia'>
                <a className='instagram' href='https://instagram.com/shree_bherav_nath?igshid=ZDdkNTZiNTM='><i className="fa-brands fa-instagram"></i>@shree_bherav_nath</a>
                <a className='youtube' href='https://www.youtube.com/@shreebheravnath'><i className="fa-brands fa-youtube"></i>shree bherav nath</a>            </div>
        </footer>
    );
}
