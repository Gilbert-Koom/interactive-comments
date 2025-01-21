import { create } from 'zustand';

interface Message {
  message: string;
}

interface MessageActions {
  updateMessage: (message: string) => void;
}

const useMessageStore = create<Message &MessageActions>((set) => ({
  message: "",
  updateMessage: (message: string) => set({ message: message }),
}));

export default useMessageStore;