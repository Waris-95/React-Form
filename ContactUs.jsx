import React, { useState } from 'react';
import './index.css'; // Import CSS file for styling

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // Create a new object for the contact information
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date(),
    };
    console.log(contactUsInformation);

    // Reset the form state
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
  };

  return (
    <div className="contact-us-container">
      <h2 className="form-heading">🌟 Contact Us 🌟</h2>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor='name' className="form-label">Name:</label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Enter your mystical name"
          />
        </div>
        <div className="form-group">
          <label htmlFor='email' className="form-label">Email:</label>
          <input
            id='email'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Your enchanted email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor='phone' className="form-label">Phone:</label>
          <input
            id='phone'
            type='text'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
            placeholder="Your secret communication crystal"
          />
        </div>
        <div className="form-group">
          <label htmlFor='comments' className="form-label">Comments:</label>
          <textarea
            id='comments'
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="form-input"
            placeholder="Share your mystical insights"
          />
        </div>
        <button type="submit" className="submit-button">
          SEND🪄
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
