import React from 'react';
import '../Assets/Styles/card.css';
import logo from '../Assets/Images/shreeLogo.jpg';
import top_10Award from '../Assets/Images/top_10_Award.jpg';
import phd_gold from '../Assets/Images/phd_gold.jpg';
import mharshi from '../Assets/Images/mharshi.jpeg';
import LifetimeAchivement from '../Assets/Images/Lifetime Achievement Award.jpeg';
import march52023 from '../Assets/Images/5march2023.jpeg';
import Slider from './Slider';
import { NavLink } from 'react-router-dom';
// Phd oct 2023
import phd_oct_2023_1 from '../Assets/Images/Phd-oct-2023img-1.jpeg';
import phd_oct_2023_2 from '../Assets/Images/Phd-oct-2023img-2.jpeg';
import phd_oct_2023_3 from '../Assets/Images/Phd-oct-2023img-3.jpeg';
import phd_oct_2023_4 from '../Assets/Images/Phd-oct-2023img-4.jpeg';
import phd_oct_2023_5 from '../Assets/Images/Phd-oct-2023img-5.jpeg';

const Card = () => {
  const images = [
    phd_gold,
    top_10Award,
    mharshi,
    LifetimeAchivement,
    march52023,
    phd_oct_2023_1,
    phd_oct_2023_2,
    phd_oct_2023_3,
    phd_oct_2023_4,
    phd_oct_2023_5,
  ];
  // Array of blog card data
  const blogCards = [
    {
      id: 1,
      image: phd_oct_2023_2,
      title: 'वैदिक ज्योतिष में मानद डॉक्टरेट',
      subtitle: 'मध्य प्रदेश , इंदौर',
      date: '7 अक्टूबर 2023',
      content:
        'माॅ भुवनेश्वरी ज्योतिष वास्तु कर्मकांड शोध संस्थान एवं माॅ भुवनेश्वरी इंटरनेशनल यूनिवर्सिटी के तत्वाधान मे आयोजित वेदांग ज्योतिष महोत्सव एंव अलंकरण महोत्सव मे  वरिष्ठजानो द्वारा दिंनाकः 7-10-2023 को श्री पंडित जमनालाल जोशी को स्वर्ण पदक एवं वैदिक ज्योतिष में मानद डॉक्टरेट देकर सम्मानित किया गया',
    },
    {
      id: 2,
      image: top_10Award,
      title: 'TOP 10 अंतर्राष्ट्रीय ज्योतिष पुरस्कार',
      subtitle: 'मध्य प्रदेश , उज्जैन',
      date: '27 अगस्त 2022',
      content:
        'मां शारदा ज्योतिषधाम अनुसंधान इन्दौर द्वारा 29 वा अंतर्राष्ट्रीय ज्योतिष वास्तु सेमिनार & ज्योतिष फेयर का आयोजन उज्जैन की होटल EMPIRIYL में दिनाक २५,२६,२७ अगस्त को रखा गया! इस सेमिनार में बाबा भदेसर भेरू नाथ जी की कृपा से गोल्ड मेडलिस्ट ज्योतिष पंडित जमना लाल जी जोशी को Top-10 अंतर्राष्ट्रीय 2022 ज्योतिष में स्थान प्राप्त करने पर संस्था द्वारा पुरस्कृत किया गया !',
    },
    {
      id: 3,
      image: LifetimeAchivement,
      title: 'लाइफटाइम अचीवमेंट अवार्ड',
      subtitle: 'राजस्थान , कोटा',
      date: '27 अगस्त 2022',
      content:
        'दिनांक 24 व 25 सिंताम्बर 2022 के*अखिल भारतीय ज्योतिष सम्मेलन आयोजन में सम्मान किया गया *अथर्व आदित्य सेवा संस्थान* ( कोटा,राजस्थान) *अखिल भारतीय ज्योतिष सम्मेलन एवं सम्मान समाहरो अनुसंधान के तत्वाधान में महासम्मेसलन* ( कोटा राजस्थान द्वारा) माहा विद्वानों द्वारा *लाइफटाईम अचीवमेंट अवार्ड से * 🙏 पंडित जमनालाल जी जोशी*,मेनारिया इंदौर को सम्मानित किया गया🙏🏻',
    },
    {
      id: 4,
      image: phd_gold,
      title: 'ज्योतिषी (पीएचडी) की डिग्री और स्वर्ण पदक से सम्मानित।',
      subtitle: 'मध्य प्रदेश , इंदौर',
      date: '24/25 दिसंबर 2022',
      content:
        'मां भुवनेश्वरी ज्योतिष वास्तु कर्मकांड शोध संस्था परिवार, इंदौर में दिनांक 24/25 दिसंबर 2022 को वेदांग ज्योतिष महोत्सव एवं अलंकरण समारोह में मेनारिया ब्राह्मण समाज के पुत्र श्री पंडित जमनालाल जोशी (मेनारिया) को ज्योतिषी की मानद उपाधि से विभूषित किया गया (पीएचडी) समकक्ष) और स्वर्ण पदक से सम्मानित किया गया।',
    },
    {
      id: 5,
      image: mharshi,
      title: 'देवज्ञ रत्न की उपाधि व स्वर्ण पदक से सम्मानित किया गया',
      subtitle: 'मध्य प्रदेश , इंदौर',
      date: '25 फरवरी 2023',
      content:
        'देव गुरुकुलम द्वारा 25 फरवरी को आयोजित भव्य ज्योतिष वास्तु दीक्षांत सम्मान समारोह श्री राजेश जी अग्रवाल (राज्य मंत्री मध्य प्रदेश शासन) उपाध्यक्ष राज्य आपूर्ति निगम एवं श्री महेंद्र सिंह सोलंकी जी सांसद (देवास शाजापुर लोकसभा) के मुख्य आतिथ्य एवं श्री योगेंद्र महेंद्र जी पूर्व मंत्री (मध्य प्रदेश शासन) की अध्यक्षता  में पूजनीय जमना भैयाजी को देवज्ञ रत्न  की उपाधि व स्वर्ण पदक से सम्मानित किया गया ।',
    },
    {
      id: 6,
      image: march52023,
      title: 'प्राच्यविद्या शिरोमणी अलंकरण पुरुस्कार से समानित किया',
      subtitle: 'मध्य प्रदेश , इंदौर',
      date: '5 मार्च 2023',
      content:
        'श्री जैन प्राच्यविद्या अनुसंधान संगठन प्राच्यविद्या शिरोमणी अलंकरण प्राच्यविद्या,अध्य्यन एवं शोध कार्य द्वारा अर्जित ज्ञान से जन मानस की उत्कृष्ट सेवाओं के लिये श्री योगेन्द्र महंत (पूर्व राज्य मंत्री म,प्र) श्री मति आभा जेन (राष्टीय अध्यक्ष) और अन्य समानिय वरिष्ठ जन द्वारा पं श्री जमनालाल जोशी प्रिय भैया जी को प्राच्यविद्या शिरोमणी अलंकरण पुरुस्कार से  समानित किया गया है 💐🙏श्री भदेसर भैरव भक्त मन्डल की ओर से बहुत बहुत शुभकामनाएँ बधाई🙏💐',
    },
  ];

  return (
    <div className="card-container">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-logo">
          <img src={logo} alt="Logo" />
        </div>
       
       
        <div className="profile-description">
          <h5 className="profile-name">डॉ.जमना लाल जोशी</h5>
          <p className="profile-title">
            श्री भेरव शक्ति जन कल्याण रथ <br />
            ज्योतिष परामर्श - इंडिया<br /><br />
            38 मंगल मार्ग गांधीनगर इंदौर मध्य प्रदेश
          </p>
        </div>
      </div>

      {/* Achievement Gallery */}
      <h4 className="gallery-title">उपलब्धि गैलरी</h4>
      <div className="blogs-gallery">
        {/* Dynamically Render Blog Cards */}
        {blogCards.map((card) => (
          <div className="blog-card" key={card.id}>
            <div className="top-section">
              <img src={card.image} alt="Award" className="blog-card-img" />
              <div className="text-section">
                <p className="blog-card-title text-warning">{card.title}</p>
                <p className="blog-card-subtitle text-danger">{card.subtitle}</p>
                <p className="blog-card-date">{card.date}</p>
              </div>
            </div>
            <div className="card-content">{card.content}</div>
          </div>
        ))}
      </div>

      {/* Slider */}
      <Slider
        img={images}
      />
    </div>
  );
};

export default Card;