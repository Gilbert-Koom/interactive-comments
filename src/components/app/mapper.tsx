import useCommentStore from "./store"
import Comments from "./comments"
import amyrobson from './images/avatars/image-amyrobson.webp'
import juliosomo from './images/avatars/image-juliusomo.webp'
import maxblagun from './images/avatars/image-maxblagun.webp'
import ramsesmiron from './images/avatars/image-ramsesmiron.webp'
export default function Mapper() {
  const comments=useCommentStore(state=>state.comments)
  return (
    <div>
      <h1>Mapper</h1>
      <ul className="bg-black">
        {comments.map(comment=>(
          <li key={comment.id}>
            <Comments 
              content={comment.content}
              score={comment.score}
              id={comment.id}
              time={comment.createdAt}
              user={comment.user.username}
            />

          </li>
        ))}
      </ul>
      <ul className="">{comments.map(per=><li className="bg-green-300 my-4">
        {per.user.username==='amyrobson' ? <img src={amyrobson} /> : <p></p> }
        {per.user.username==='maxblagun' ? <img src={maxblagun} /> : <p></p> }
        {per.user.username==='juliusomo' ? <img src={juliosomo} /> : <p></p> }
        {per.user.username==='ramsesmiron' ? <img src={ramsesmiron} /> : <p></p> }
        <p className="text-red-700">{per.content}</p>
        <p>{per.createdAt}</p>
        <p>{per.id}</p>
        <p>{per.score}</p>
        <p>{per.user.username}</p>
        
        <ul className="">{per.replies.map(hmm=><li className="text-blue-500">
          {per.user.username==='amyrobson' ? <img src={amyrobson} /> : <p></p> }
          {per.user.username==='maxblagun' ? <img src={maxblagun} /> : <p></p> }
          {per.user.username==='juliusomo' ? <img src={juliosomo} /> : <p></p> }
          {per.user.username==='ramsesmiron' ? <img src={ramsesmiron} /> : <p></p> }
          <p>{hmm.content}</p>
          <p>{hmm.createdAt}</p>
          <p>{hmm.id}</p>
          <p>{hmm.replyingTo}</p>
          <p>{hmm.score}</p>
          <p>{hmm.user.username}</p>
        </li>)}</ul>
      </li>)}</ul>
    </div>
  )
}