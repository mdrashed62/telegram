import { Avatar } from '@mui/material'
import React from 'react'

function SidebarChat() {
  return (
    <div className='sidebar__chat'>
      <Avatar></Avatar>
      <div className='text'>
      <h4>User Name</h4>
      <p>Last Message...</p>
      </div>
    </div>
  )
}

export default SidebarChat
