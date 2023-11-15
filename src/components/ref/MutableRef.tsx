import { useEffect, useRef, useState } from "react"

export default function MutableRef() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef<number | null>(null)

    const stopTimer = () => {
        if(intervalRef.current) window.clearInterval(intervalRef.current)
    }
    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTime(time => time + 1)
        }, 1000)
        return () => stopTimer();
    }, [])
  return (
    <div>
        Timer - {time}
        <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  )
}
