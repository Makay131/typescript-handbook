import { useEffect, useRef } from "react"

export default function DomRef() {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus(); //to get rid of ?. use assertion above (useRef<HTMLInputElement>(null!))
    }, [])
  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}
