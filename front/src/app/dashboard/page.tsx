import DashNav from '@/components/dashboard/DashNav'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOption ,CustomSession  } from '../api/auth/[...nextauth]/options'
import CreateChat from '@/components/groupChat/CreateChat'
import { fetchChatGroups } from '@/fetch/groupFetch'
import GroupChatCard from '@/components/groupChat/GroupChatCard'

export default async function dashboard() {
    const session:CustomSession|null = await getServerSession (authOption) 
    const groups:Array<ChatGroupType> | [] = await fetchChatGroups(session?.user?.token!);
    console.log("The groups are", groups) 
 return (
    <div>
      <DashNav name={session?.user?.name!} image={session?.user?.image ?? undefined} />
      <div className='container'>
       <div className='flex justify-end mt-10 text-end'>
         <CreateChat user={session?.user!}/>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {groups.length > 0 &&
            groups.map((item, index) => (
              <GroupChatCard group={item} key={index} user={session?.user!} />
            ))}
        </div> 
      </div>
    </div>
  )
}
