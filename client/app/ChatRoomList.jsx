import React, { Component } from 'react'
import $ from 'jquery'
import ChatRoomListEntry from './ChatRoomListEntry.jsx'


const ChatRoomList = ({ chatRooms }) => {
  return (
    <ul>
      {
        chatRooms.map(chatRoom => {
          return <ChatRoomListEntry room={chatRoom}/>
        })
      }
    </ul>
  )
}

export default ChatRoomList