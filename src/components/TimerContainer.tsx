import { useState } from "react";
import { Timer } from "./Timer";

export const TimerContainer = () => {
  const [milliseconds, setMilliseconds] = useState(0);

  return (
    <div className="my-5">
      <h2> useEffect - useRef </h2>
      <div>Milliseconds {1000}</div>
      <button
        onClick={() => setMilliseconds(1000)}
        className="btn btn-outline-success mr-1"
      >
        1000
      </button>
      <button
        onClick={() => setMilliseconds(2000)}
        className="btn btn-outline-success mx-1"
      >
        2000
      </button>
      <Timer milliseconds={milliseconds} />
    </div>
  );
};
