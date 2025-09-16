import { createContext, useContext, useState, ReactNode } from "react";

type LiveContextType = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

const LiveContext = createContext<LiveContextType | undefined>(undefined);

export function LiveProvider({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <LiveContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </LiveContext.Provider>
  );
}

export function useLive() {
  const ctx = useContext(LiveContext);
  if (!ctx) throw new Error("useLive must be used within LiveProvider");
  return ctx;
}