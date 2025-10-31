import React from 'react'
import './Profile.css'

function Profile({ data }) {
  return (
    <div className='profile-container'>
          <h1>Profile Page</h1>
      <div className='content'>
          <img src={data.pic} alt="Profile Pic" style={{ width: '150px', height: '150px'}} />
        <h3>Name: {data.myname}</h3>
          <h3>Branch: {data.branch}</h3>
          <h3>Section: {data.section}</h3>
          <h3>College: {data.college}</h3>
          </div>
    </div>
  )
}

export default Profile
