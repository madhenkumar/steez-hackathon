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

import Link from "next/link";
import { getHumeAccessToken } from "~/utils/getHumeAccessToken";
import Chat from "../_components/Chat";


export default async function Home() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error();
  }
  return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
              <Chat accessToken={accessToken} />
      </main>
  );
}
