import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { card, about, stats, stat, project } from "../models/GeneralTypes";

interface ContextThankDialog {
  toggleThankDialog: boolean;
  setToggleThankDialog: Dispatch<SetStateAction<boolean>>;
}
interface ContextState {
  state: project;
  updateState: Dispatch<SetStateAction<project>>;
}
interface ContextSelected {
  selected: number | null;
  setSelected: Dispatch<SetStateAction<number | null>>;
}
interface ContextDialog {
  toggleDialog: boolean;
  setToggleDialog: Dispatch<SetStateAction<boolean>>;
}

interface ContextValue
  extends ContextState,
    ContextDialog,
    ContextSelected,
    ContextThankDialog {}

const dummyAbout: about = {
  title: "About this project",
  about:
    "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
};

const dummyStat1: stat = {
  main: "$89,914",
  secoundary: "of $100,000 backed",
};
const dummyStat2: stat = {
  main: "5,007",
  secoundary: "total backers",
};
const dummyStat3: stat = {
  main: "56",
  secoundary: "days left",
};
const dummyStats: stats = {
  stats: [dummyStat1, dummyStat2, dummyStat3],
  progress: 80,
};

const card1: card = {
  title: "Bamboo Stand",
  description:
    "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
  left: 101,
  isActive: true,
  pledge: 25,
};
const card2: card = {
  title: "Black Edition Stand",
  description:
    "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
  left: 64,
  isActive: true,
  pledge: 75,
};
const card3: card = {
  title: "Mahogany Special Edition",
  description:
    "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
  left: 0,
  isActive: false,
  pledge: 200,
};
const dummyProject: project = {
  title: "Mastercraft Bamboo Monitor Riser",
  subTitle:
    "A beautiful & handcrafted monitor stand to reduce neck and eye strain.",
  isBookmarked: false,
  stats: dummyStats,
  about: dummyAbout,
  ul: [card1, card2, card3],
};

const initialState: ContextState = {
  state: dummyProject,
  updateState: () => {},
};

const GameContext = createContext<ContextValue | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, updateState] = useState(initialState.state);
  const [toggleDialog, setToggleDialog] = useState(false);
  const [toggleThankDialog, setToggleThankDialog] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <GameContext.Provider
      value={{
        state,
        updateState,
        toggleDialog,
        setToggleDialog,
        selected,
        setSelected,
        toggleThankDialog,
        setToggleThankDialog,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
}
