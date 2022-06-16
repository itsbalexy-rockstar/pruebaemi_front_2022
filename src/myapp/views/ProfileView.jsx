import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Panel from '../components/Panel'

const ProfileView = () => {
  return (
    <div className='profile-container animate__animated animate__fadeIn'>
      <Navbar />
      <Hero />
      <Panel />
    </div>
  )
}

export default ProfileView