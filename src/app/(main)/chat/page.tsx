import React from 'react'
import Chat from '~/app/_components/Chat';
import { getHumeAccessToken } from '~/utils/getHumeAccessToken';

const page = async () => {
    const accessToken = await getHumeAccessToken();

    if (!accessToken) {
      throw new Error();
    }

  return (
    <div>
    
        <Chat accessToken={accessToken} />
    </div>
  )
}

export default page