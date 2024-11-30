import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle the form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div class="contact-us-main">
      <h1 class="main text-center py-[6em] bg-[#2E3B80]" ><b>Contact Us </b></h1> 
    <div className="w-full bg-[#93C5FD] py-10 mb-10">
    <div className="px-5 mx-auto md:w-[80%] pt-5">  
    <div className="contact-us">
      <p>Thank you for your interest in AfterEncode. Please use this form to contact us. We will get back to you as soon as we can.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            id="message"
            className="textarea-field"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
      type="submit"
      style={{
        backgroundColor: '#00008B', // Dark blue color
        color: 'white', // Text color
        border: 'none', // No border
        padding: '10px 20px', // Padding
        textAlign: 'center', // Center text
        textDecoration: 'none', // No underline
        display: 'inline-block', // Make it inline block
        fontSize: '16px', // Font size
        margin: '4px 2px', // Margin
        cursor: 'pointer', // Pointer cursor
        borderRadius: '5px', // Rounded corners
      }}
    >
      Submit
    </button>

      </form>
    </div>
    </div>
    </div>
    </div>
  );
}

export default ContactUs;
