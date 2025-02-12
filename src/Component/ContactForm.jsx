import React, { useState } from "react";
import "./ContactForm.css";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <div className="contact">contact</div>
        <form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="53207d76-d2bd-42a4-8d81-0ca043a85fa4" />
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
<button className="btn" type="submit">Send Message</button>
</form>



    </div>
    
  );
};

export default ContactForm;
