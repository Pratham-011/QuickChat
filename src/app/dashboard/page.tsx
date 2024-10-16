import DashNav from '@/components/dashboard/DashNav'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOption ,CustomSession  } from '../api/auth/[...nextauth]/options'

export default async function dashboard() {
    const session:CustomSession|null = await getServerSession (authOption)  
 return (
    <div>
      <DashNav name={session?.user?.name!} image={session?.user?.image ?? undefined} />
    </div>
  )
}
