import { HumeClient } from "hume";
import { env } from "~/env";
const client = new HumeClient({ apiKey: env.HUME_API_KEY });
export const chats = await client.empathicVoice.chats.listChats({
  pageNumber: 0,
  pageSize: 10,
  ascendingOrder: false
});


// const chatGroups = await client.empathicVoice.chats.listChatGroups({
//   pageNumber: 0,
//   pageSize: 10,
//   ascendingOrder: false
// });



