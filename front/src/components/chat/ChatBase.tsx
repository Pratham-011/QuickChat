// "use client"
// import { getSocket } from '@/lib/socket.config'
// import React, { useEffect, useMemo } from 'react'
// import { Button } from '../ui/button'
// import { v4 as uuidV4 } from 'uuid'

// export default function ChatBase() {
//   let socket = useMemo(() => {
//     const socket = getSocket()

//     return socket.connect()

//   },[])
//   useEffect(() => {

//     socket.on("message",(data:any) => {
//         console.log("The socket message is",data)
//     })
//     return() => {
//         socket.close()
//     }
//   },[])

//   const handleClick = () => {
//     console.log("Hey i am..." + uuidV4())
//     socket.emit("message",{name:"Pratham" ,id:uuidV4()})
//   }
//   return (
//     <div>
//         <Button onClick={handleClick}>Send Message</Button>
//     </div>
//   )
// }



"use client";
import { getSocket } from '@/lib/socket.config';
import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '../ui/button';
import { v4 as uuidV4 } from 'uuid';
import ChatSidebar from './ChatSidebar';
import ChatNav from './ChatNav';
import ChatUserDialog from './ChatUserDialog';
import Chats from './Chats';

export default function ChatBase({ group, users ,oldMessages}: { group: ChatGroupType, users:Array<GroupChatUserType> | [] ,oldMessages:Array<MessageType> | [] }) {
  // Initialize socket with useMemo and connect within useEffect
  // // const socket = useMemo(() => {
  // //   const socketInstance = getSocket();
  // //   socketInstance.auth = { room: groupId };
  // //   return socketInstance; // Return the socket instance
  // // }, [groupId]); // Add groupId as a dependency in case it changes

  // // useEffect(() => {
  // //   socket.connect(); // Connect the socket when the component mounts

  // //   // Listen for incoming "message" events
  // //   socket.on("message", (data: any) => {
  // //     console.log("The socket message is", data);
  // //   });

  //   // Clean up: remove the listener and disconnect socket when component unmounts
  //   return () => {
  //     socket.off("message"); // Remove event listener
  //     socket.disconnect(); // Properly disconnect the socket
  //   };
  // }, [socket]); // Add socket as a dependency

  // Emit a message when the button is clicked
 
  const [open, setOpen] = useState(true)
  const [chatUser,setChatUser] = useState<GroupChatUserType>()
  useEffect(() => {
    const data = localStorage.getItem(group.id)
    if(data) {
      const pData = JSON.parse(data)
      setChatUser(pData)
    }
  },[group.id])
  return (
    <div className='flex'>
      <ChatSidebar users={users} />
      <div className='w-full md:w-4/5 bg-gradient-to-b from-gray-50 to-white'>
      {open ? (<ChatUserDialog open={open} setOpen={setOpen} group={group} />) : (<ChatNav chatGroup={group} users={users} />)}

      <Chats group={group} chatUser={chatUser} oldMessages={oldMessages}/>

      </div>

    </div>
  );
}
