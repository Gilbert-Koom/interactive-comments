import { create } from "zustand";
import initialData from "./data";



interface Reply {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  username: string;
}

 interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  username: string;
  replies: Reply[];
}

interface InitialData {
  currentUser: string;
  comments: Comment[];
}



const useCommentStore= create<InitialData>((set) => ({
  currentUser: initialData.currentUser,
  comments: initialData.comments,
}));

export default useCommentStore;