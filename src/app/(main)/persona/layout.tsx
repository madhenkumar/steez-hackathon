import { AnamContextProvider } from '@../../contexts/AnamContext';
import { getSessionToken } from "../../../lib/server-lib";

export default async function TalkToAnamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get session token from server-side function or environment variables
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';
  const sessionToken = await getSessionToken(API_KEY); // Ensure you are correctly fetching the session token

  return (
    <AnamContextProvider sessionToken={sessionToken || API_KEY}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        {children}
      </div>
    </AnamContextProvider>
  );
}
