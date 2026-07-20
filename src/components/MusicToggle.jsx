import { useState } from "react";

function MusicToggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      className="music-toggle"
      onClick={() => setIsOn((prev) => !prev)}
      aria-label={isOn ? "Play sound" : "Mute sound"}
      title={isOn ? "Play sound" : "Mute sound"}
    >
<img
  src={
    isOn
      ? `${import.meta.env.BASE_URL}Icons/MusicOff.png`
      : `${import.meta.env.BASE_URL}Icons/MusicOn.png`
  }
  alt="Music toggle"
/>
    </button>
  );
}

export default MusicToggle;
