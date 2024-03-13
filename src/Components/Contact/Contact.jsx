import "./Contact.css"
import { useState } from "react"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"

export default function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "72c1b177-71e5-4d13-98c3-eb460e0a13ad");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



    return (
        <div className="contact">
        <div className="contact-col">
          <h3>Send us a message <img src={msg_icon} alt="" /></h3>
          <p>Feel free to reach out through contact form or find our Contact
            information below. Your feedback, questions and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.</p>
          <ul>
            <li><img src={mail_icon} alt=""/>Contact@ayush_ac7</li>
            <li><img src={phone_icon} alt=""/> +91 999-999-9999</li>
            <li><img src={location_icon} alt=""/>Chinkpokli Nagar, Bombay<br/> NomansLand</li>
          </ul>
       </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name"
            required/>
            <label>Phone number</label>
            <input type="tel" name="phone" placeholder="Enter your number"
            required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter yor message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit now</button>
          </form>
          <span>{result}</span>
            
        </div>
    </div>
    )
    
}