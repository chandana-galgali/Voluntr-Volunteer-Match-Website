import React from 'react';
import { FaPaw, FaChalkboardTeacher, FaRecycle, FaHandsHelping, FaPizzaSlice, FaHeart, FaPhoneAlt, FaFootballBall, FaMask, FaHouseDamage, FaTabletAlt, FaSmile } from 'react-icons/fa'; // Corrected imports
import '../styles/VolunteerList.css';

const VolunteerListPage = () => {
  const volunteers = [
    { title: 'Tutoring for Kids', description: 'Help children with their homework and make a difference in their education.', icon: <FaChalkboardTeacher /> },
    { title: 'Elderly Assistance', description: 'Provide companionship and help with daily tasks for the elderly.', icon: <FaHeart /> },
    { title: 'Environmental Cleanup', description: 'Join efforts for cleaning up parks, beaches, and nature reserves.', icon: <FaRecycle /> },
    { title: 'Animal Shelter Support', description: 'Assist in caring for and finding homes for animals in shelters.', icon: <FaPaw /> },
    { title: 'Food Bank Assistance', description: 'Help distribute food to those in need at local food banks.', icon: <FaPizzaSlice /> },
    { title: 'Homeless Outreach', description: 'Provide support and resources for homeless individuals in your community.', icon: <FaHandsHelping /> },
    { title: 'Mental Health Awareness', description: 'Support and advocate for mental health awareness in your community.', icon: <FaSmile /> },
    { title: 'Youth Sports Coaching', description: 'Volunteer to coach and mentor kids in local sports programs.', icon: <FaFootballBall /> },
    { title: 'Crisis Hotline Volunteer', description: 'Offer support and resources to those in crisis through a phone hotline.', icon: <FaPhoneAlt /> },
    { title: 'Public Health Campaign', description: 'Educate communities about health practices and disease prevention.', icon: <FaMask /> },
    { title: 'Disaster Relief Assistance', description: 'Provide aid and assistance to communities affected by natural disasters.', icon: <FaHouseDamage /> },
    { title: 'Senior Citizens’ Tech Support', description: 'Help elderly individuals with their technology needs, from setting up devices to teaching them to use software.', icon: <FaTabletAlt /> }
  ];

  return (
    <div className="volunteer-list-page">
      <h2>Available Volunteer Opportunities</h2>
      <div className="volunteer-cards">
        {volunteers.map((volunteer, index) => (
          <div key={index} className="volunteer-card">
            <div className="volunteer-icon">{volunteer.icon}</div>  {}
            <h3>{volunteer.title}</h3>
            <p>{volunteer.description}</p>
            <button className="apply-button">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerListPage;
