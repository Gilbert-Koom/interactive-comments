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
      <ul className="">{comments.map(per=><li className="bg-green-300 my-4">
        {per.user.username==='amyrobson' ? <img src={amyrobson} /> : <p></p> }
        {per.user.username==='maxblagun' ? <img src={maxblagun} /> : <p></p> }
        {per.user.username==='juliusomo' ? <img src={juliosomo} /> : <p></p> }
        {per.user.username==='ramsesmiron' ? <img src={ramsesmiron} /> : <p></p> }
        <p className="text-red-700">{per.content}</p>
        <p>{per.createdAt}</p>
        <p>score: {per.score}</p>
        <p>{per.user.username}</p>
        
        <ul className="bg-green-950">{per.replies.map(hmm=><li className="text-blue-500">
          {hmm.user.username==='ramsesmiron' ? <img src={ramsesmiron} /> : <p></p> }
          {hmm.user.username==='amyrobson' ? <img src={amyrobson} /> : <p></p> }
          {hmm.user.username==='maxblagun' ? <img src={maxblagun} /> : <p></p> }
          {hmm.user.username==='juliusomo' ? <img src={juliosomo} /> : <p></p> }
          <p>{hmm.content}</p>
          <p>{hmm.user.username}</p>
          <p>score: {hmm.score}</p>
          <p>{hmm.createdAt}</p>
          
        </li>)}</ul>
      </li>)}</ul>
    </div>
  )
}