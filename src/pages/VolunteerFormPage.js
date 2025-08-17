import React, { useState } from 'react';
import '../styles/VolunteerForm.css';

const VolunteerFormPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', skills: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for signing up!');
  };

  return (
    <div className="volunteer-form-page">
      <h2>Become a Volunteer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="skills"
          placeholder="Your Skills"
          value={formData.skills}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VolunteerFormPage;