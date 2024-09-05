import { useEffect, useState } from "react"

export type CountdownParam = {
  seconds: number;
  start: boolean;
}

export const useTimer = ({ seconds, start }: CountdownParam) => {
  const [second, setSeconds] = useState<{ remainingSeconds: number }>({ remainingSeconds: seconds })

  useEffect(() => {
    let intervalId: number | undefined;
    if (start) {
      intervalId = window.setInterval(() => {
        setSeconds({ remainingSeconds: second.remainingSeconds + 1 })
      }, 1000)
    } else {
      clearInterval(intervalId);
    }
    return () => {

      if (intervalId) {
        clearInterval(intervalId);

      }
    }

  }, [second, seconds, start])

  return second
}