import { useVoice } from "@humeai/voice-react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

export default function StartCall() {
  const { status, connect } = useVoice();

  if (status.value === "connected") {
    return null;
  }

  return (
    <Button
      className="flex items-center gap-1.5"
      onClick={() => {
        connect()
          .then(() => {})
          .catch(() => {})
          .finally(() => {});
      }}
    >
      <span>
        <Phone
          className="size-4 opacity-50"
          strokeWidth={2}
          stroke="currentColor"
        />
      </span>
      <span>Start Call</span>
    </Button>
  );
}