import { useCallback, useEffect, useRef, useState } from "react";
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
  const [isStarted, setIsStarted] = useState(false);
  const intervalRef = useRef();
  useEffect(() => {
    if (isStarted && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        // avoid stacking multiple setIntervals
        setValue((prevValue) => {
          if (prevValue >= 100) {
            setIsStarted(false);
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            return prevValue;
          }
          return prevValue + 1;
        });
      }, 200);
    }

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isStarted]);
  // since handleComplete is getting created on every render for value change
  const handleComplete = useCallback(() => {
    setIsComplete(true);
  }, []);
  const handleStart = () => {
    setIsStarted(true);
  };
  const handleStop = () => {
    setIsStarted(false);
  };
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsStarted(false);
    setIsComplete(false);
    setValue(0);
    intervalRef.current = null;
  };

  return (
    <div>
      <Bar value={value} onComplete={handleComplete} />
      <div style={{ textAlign: "center" }}>
        {isComplete ? "Success!!" : "Loading..."}
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
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
