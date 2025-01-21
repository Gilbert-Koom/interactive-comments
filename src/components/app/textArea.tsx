import { Textarea } from "@/components/ui/textarea"
import useMessageStore from "./messageStore"

export function TextareaDemo() {
  const message = useMessageStore(state => state.message)

  console.log(message)
  return <Textarea
            placeholder="Type your message here." 
            value={message}
            onChange={(e) => useMessageStore.getState().updateMessage(e.target.value)}
  />
}
