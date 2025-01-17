import SendButton from './sendbutton';
import { TextareaDemo } from './textArea';
import UserImage from './userAvater';
function AddComment() {
  return (
    <div className='flex'>
      <UserImage />
      <TextareaDemo />
      <SendButton />   
    </div>

  )
}

export default AddComment;