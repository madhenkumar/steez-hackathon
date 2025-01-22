// import React from 'react'
// import ChatLayout from './_components/ChatLayout'
// import { getHumeAccessToken } from '~/utils/getHumeAccessToken';
// import Chat from '../_components/Chat';

// const page = async () => {
//   const accessToken = await getHumeAccessToken();
//   if (!accessToken) {
//     return <div>No access token</div>;
//   }
//   return (
//     <div>
//         {/* <ChatLayout/> */}
//         <Chat accessToken={accessToken}/>
//     </div>
//   )
// }

// export default page

import { redirect } from 'next/navigation'


export default function Home() {
  redirect('/home');
  return (
    <main>
hi    </main>
  );
}
