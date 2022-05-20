import { useState } from "react";
import { Timer } from "./Timer";

export const TimerContainer = () => {
  const [milliseconds, setMilliseconds] = useState(0);

  return (
    <>
      <div>Milliseconds {1000}</div>
      <button
        onClick={() => setMilliseconds(1000)}
        className="btn btn-outline-success"
      >
        1000
      </button>
      <button
        onClick={() => setMilliseconds(2000)}
        className="btn btn-outline-success"
      >
        2000
      </button>
      <Timer milliseconds={milliseconds} />
    </>
  );
};
