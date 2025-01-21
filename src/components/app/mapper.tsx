import useCommentStore from "./store"
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
        {per.username==='amyrobson' ? <img src={amyrobson} /> : <p></p> }
        {per.username==='maxblagun' ? <img src={maxblagun} /> : <p></p> }
        {per.username==='juliusomo' ? <img src={juliosomo} /> : <p></p> }
        {per.username==='ramsesmiron' ? <img src={ramsesmiron} /> : <p></p> }
        <p className="text-red-700">{per.content}</p>
        <p>{per.createdAt}</p>
        <p>score: {per.score}</p>
        <p>{per.username}</p>
        
        <ul className="bg-green-950">{per.replies.map(hmm=><li className="text-blue-500">
          {hmm.username==='ramsesmiron' ? <img src={ramsesmiron} /> : <p></p> }
          {hmm.username==='amyrobson' ? <img src={amyrobson} /> : <p></p> }
          {hmm.username==='maxblagun' ? <img src={maxblagun} /> : <p></p> }
          {hmm.username==='juliusomo' ? <img src={juliosomo} /> : <p></p> }
          <p>{hmm.content}</p>
          <p>{hmm.username}</p>
          <p>score: {hmm.score}</p>
          <p>{hmm.createdAt}</p>
          
        </li>)}</ul>
      </li>)}</ul>
    </div>
  )
}