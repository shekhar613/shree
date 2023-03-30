import React from 'react';
import '../Assets/Styles/review.css'

// card examples 
// https://bootcamp.uxdesign.cc/4-popular-types-of-cards-in-ui-design-c805406ea0f3


function Review() {
  const feed = window.localStorage

  return (
    <>
      {
        Object.keys(feed).map((keyName, i) => (
          // <div key={i} >{i} : {JSON.parse(feed[keyName])['name']}</div>
          <div className='review_card' key={i}>
            <div className='reviewsubSection'>
              <i className="fa-solid fa-user"></i>
              <div className='review_name'>
                <h6>@{JSON.parse(feed[keyName])['name']}</h6>
                <h6>{JSON.parse(feed[keyName])['date']}</h6>
              </div>
            </div>
            <h5>{JSON.parse(feed[keyName])['name']}</h5><br/>
            <p><b>'{JSON.parse(feed[keyName])['problem']}'</b></p>
            <hr />
            <p>{JSON.parse(feed[keyName])['experience']}</p>
            <i className="mx-2 text-warning fa-solid fa-star"></i>
            <i className="mx-2 text-warning fa-solid fa-star"></i>
            <i className="mx-2 text-warning fa-solid fa-star"></i>
            <i className="mx-2 text-warning fa-solid fa-star"></i>
            <i className="mx-2 text-warning fa-solid fa-star"></i>
          </div>
        ))

      }







    </>
  );
}

export default Review;
