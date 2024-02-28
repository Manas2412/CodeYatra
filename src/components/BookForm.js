import "./Bookform.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { useState } from 'react';






export const BookForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ovl2n1s",
        "template_ctlgwz2",
        e.target,
        "QT5ltA7BuoH7IMiRu"
      )
      .then(
        (result) => {
          alert("Booking request placed! We will contact you shortly.");
        },
        (error) => {
          alert("An error occurred! Please try again later.");
        }
      );
    e.target.reset();
  };
  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="inputbox">
          <h3>Your Name*</h3>
          <input type="text" placeholder="Name" required name="name" />
        </div>
        <div className="inputbox">
          <h3>Email Address*</h3>
          <input
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            name="email"
          />
        </div>
        <div className="inputbox">
          <h3>Contact Number*</h3>
          <input
            type="tel"
            placeholder="Number"
            required
            maxlength="10"
            pattern="[0-9]{10}"
            name="contact"
          />
        </div>
        <div className="inputbox">
          <h3>Enter Your destination*</h3>
          <input
            type="text"
            placeholder="destination"
            required
            name="destination"
          />
        </div>

        <div className="inputbox">
          <h3>Enter the number of people</h3>
          <input
            type="number"
            min="1"
            max="15"
            placeholder="number"
            required
            name="people"
          />
        </div>
        <div className="inputbox">
          <h3>Arrival</h3>
          <input type="date" id="cap" required name="arrival" />
        </div>
        <div className="inputbox">
          <h3>Departure</h3>
          <input type="date" id="cap" required name="dept" />
        </div>





        <div className="inputbox">
          <h3>Maximum Budget(INR)*</h3>
          <input type="number" placeholder="number" required name="budget" />
        </div>
       


        <div className="dropdown">
           <button className="sub-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Type of Trip
           </button>
         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
           <li>
           <a className="dropdown-item" href="#">Family</a>
           </li>
           <li>
           <a className="dropdown-item" href="#">Friends</a>
           </li>
           <li>
           <a className="dropdown-item" href="#">Solo</a>
           </li>
           <li>
           <a className="dropdown-item" href="#">Work</a>
           </li>
         </div>
        </div>




                                             
         
       
       
       
 
        


        <Link className="btn" to="/Final" >
              <button className="exp-btn">Book Now</button>
            </Link>
        
      </form>
    </>
  );
};
