import { create } from "zustand";
import initialData from "./data";

interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

interface Reply {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: User;
}

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[];
}

interface InitialData {
  currentUser: User;
  comments: Comment[];
}

const useCommentStore= create<InitialData>((set) => ({
  currentUser: initialData.currentUser,
  comments: initialData.comments,

}));

export default useCommentStore;