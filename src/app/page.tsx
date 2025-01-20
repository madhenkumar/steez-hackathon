import Link from "next/link";
import Chat from "./_components/Chat";
import { getHumeAccessToken } from "~/utils/getHumeAccessToken";


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
