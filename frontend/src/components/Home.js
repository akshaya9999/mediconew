import React from "react";
import "./Home.css"


const Home = () => {
  return (
    <>
    <div className="full">
      <div className="bgpic"></div>
      <div className="inpara">
      <p>MEDICO</p>
      </div>
      <div className="para2">
      <p>Have you ever taken a medicine and had some reactions but where not sure if it was because of the medicine</p>
      <p>Medico will provide you a platform to explore the symptoms that people experienced due to certain medicines</p>
      <p>Check if you've had the symptoms and also add your own symptoms as well</p>
      </div>
      
      <div className="pic1"></div>
      
      <div className="para3">
      <p>Medico is a platform that can provide information on reported symptoms and potential side effects of various medications. If you have taken a medication and experienced symptoms that you are unsure of, Medico can be a helpful resource in identifying whether those symptoms may be related to the medication.</p>
      </div>
      <div className="pic2"></div>
      <div className="para4">
        <p>Additionally, if you have experienced symptoms related to a medication, you can add your own information to Medico to help others who may be taking the same medication in the future.By sharing your experiences, you can help build a more comprehensive understanding of the potential side effects associated with different medications, and provide valuable insights to others who may be seeking information about a particular drug.</p>
      </div>
      <div className="para5">
        <p>Go to 'Explore' to find about potential side effects of medicines</p>
        <p>Go to 'Add' to add your own symptoms and help others</p>

      </div>
      <div className="para6">
        <p>It's important to note that while Medico can provide helpful information, it's always a good idea to consult with a healthcare professional if you are experiencing any concerning symptoms. Your healthcare provider can help determine the best course of action and provide personalized guidance based on your individual needs and circumstances.</p>
      </div>
      </div>
    </>
    
  );
};
export default Home;