import React, { useState, useMemo } from 'react';
import '../styles/VolunteerForm.css';

const isEmail = (v) => /\S+@\S+\.\S+/.test(v);

const VolunteerFormPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', skills: '' });
  const [submitted, setSubmitted] = useState(false);

  const valid = useMemo(() => {
    const nameOk = formData.name.trim().length > 0;
    const emailOk = isEmail(formData.email);
    const skillsOk = formData.skills.trim().length >= 20;
    return nameOk && emailOk && skillsOk;
  }, [formData]);

  const handleChange = (e) => {
    setSubmitted(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setSubmitted(true);
    setFormData({ name: '', email: '', skills: '' });
  };

  return (
    <div className="volunteer-form-page">
      <h2>Become a Volunteer</h2>

      {submitted && (
        <div role="status" aria-live="polite" className="success">
          Thank you! Your volunteer form has been received.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Your Name"
                 value={formData.name} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Your Email"
                 value={formData.email} onChange={handleChange} required />
          {formData.email.length > 0 && !isEmail(formData.email) && (
            <p className="error">Enter a valid email.</p>
          )}
        </div>

        <div>
          <label htmlFor="skills">Your Skills</label>
          <textarea id="skills" name="skills" placeholder="Describe your skills (min 20 chars)"
                    value={formData.skills} onChange={handleChange} required />
          {formData.skills.trim().length > 0 && formData.skills.trim().length < 20 && (
            <p className="error">Please write at least 20 characters.</p>
          )}
        </div>

        <button type="submit" disabled={!valid}>Submit</button>
      </form>
    </div>
  );
};

export default VolunteerFormPage;