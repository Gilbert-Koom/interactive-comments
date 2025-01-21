import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function TextareaDemo() {
  const [message,setMessage]=useState('')
  console.log(message)
  return <Textarea
            placeholder="Type your message here." 
            onChange={(e)=>setMessage(e.target.value)}
            value={message}
  />
}
