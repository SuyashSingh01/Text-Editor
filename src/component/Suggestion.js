import React from 'react';
export default function Suggestion() {
  return (
    <div className="s-container"> 
    <div className="suggestion-head"><h3>Contact Us</h3></div>
    <form action="" id="contactForm">
        <div className="alert">Your message sent</div>

        <div className="inputBox">
            <input type="text" id="name" placeholder="Your name...." />
        </div>

        <div className="inputBox">
            <input type="email" id="emailid" placeholder="Your Email....." />
        </div>

        <div className="inputBox">
            <textarea id="msgContent" cols="30" rows="10" placeholder="Message"></textarea>
        </div>

        <div className="inputBox">
            <button type="submit">Submit</button>
        </div>
        
    </form>
</div>
  )
}
