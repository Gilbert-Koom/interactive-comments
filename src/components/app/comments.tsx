interface CommentProps {
  id: number;
  user: string;
  time: string;
  score:number;
  content:string;
}





export default function Comments({id,user,time,score,content}: CommentProps) {
  return(
    <div>
      <p>Id: {id}</p>
      <p>User: {user}</p>
      <p>Time: {time}</p>
      <p>Score: {score}</p>
      <p>Content: {content}</p>

    </div>
  )
}