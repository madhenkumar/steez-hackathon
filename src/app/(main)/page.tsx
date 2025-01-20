import React from 'react'
import ChatLayout from './_components/ChatLayout'
import { getHumeAccessToken } from '~/utils/getHumeAccessToken';

const page = async () => {

  return (
    <div>
        <ChatLayout/>
    </div>
  )
}

export default page