import { useCallback, useEffect, useState } from "react";
import "../../styles/progressbar.css";
const ProgressBar = () => {
  //approach 1
  // const [progress, setProgress] = useState(0);
  // const timerRef = useRef();
  // useEffect(() => {
  //   timerRef.current = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress >= 100) {
  //         clearInterval(timerRef.current);
  //         return prevProgress;
  //       }
  //       return prevProgress + 1;
  //     });
  //   }, 100);
  //   return () => {
  //     clearInterval(timerRef.current);
  //   };
  // }, []);
  const [value, setValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, 200);
    return () => clearInterval(intervalId);
  }, []);
  // since handleComplete is getting created on every render for value change
  const handleComplete = useCallback(() => {
    setIsComplete(true);
  }, []);

  return (
    <div>
      <Bar value={value} onComplete={handleComplete} />
      <div style={{ textAlign: "center" }}>
        {isComplete ? "Success!!" : "Loading..."}
      </div>
    </div>
  );
};

export default ProgressBar;

const Bar = ({ value = 0, onComplete = () => {}, classNames = "" }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(() => Math.min(100, Math.max(0, value)));
    if (value >= 100) {
      onComplete();
    }
  }, [value]);
  return (
    <div className={`progress ${classNames}`}>
      <span style={{ color: progress >= 49 ? "white" : "black" }}>
        {progress.toFixed()}%
      </span>
      {/* adding accessibility */}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress.toFixed()}
        className="progressbar"
        style={{
          // width: `${progress}%`, one way
          transform: `scaleX(${progress / 100})`,
          transformOrigin: "left",
        }}
      />
    </div>
  );
};
