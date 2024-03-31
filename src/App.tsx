import "./App.css";
import Header from "./compunets/Header/Header";
import Body from "./compunets/body/Body";
import Nav from "./compunets/navbar/Nav";
import Dialog from "./compunets/dialog/Dialog";
import ThankDialog from "./compunets/dialog/thankDialog/ThankDialog";
import { useGameContext } from "./utilities/context";

function App() {
  const { state, updateState, toggleDialog, selected, toggleThankDialog } =
    useGameContext();

  const toggleBookmark = () => {
    updateState((prevState) => ({
      ...prevState,
      isBookmarked: !prevState.isBookmarked,
    }));
  };

  return (
    <>
      <div className="crowdfounding-main">
        <div className="crowdfunding-main__inner">
          <header>
            <Nav />
          </header>
          <main>
            <div className="main-container">
              <div className="main-container__inner">
                <div className="crowdfund-card centerlized">
                  <Header
                    title={state.title}
                    subTitle={state.subTitle}
                    isBookMarked={state.isBookmarked}
                    stats={state.stats}
                    toggleBookmark={toggleBookmark}
                  />
                  <Body about={state.about} ul={state.ul} />
                </div>
              </div>
            </div>
          </main>
          <Dialog isActive={toggleDialog} selected={selected} ul={state.ul} />
          <ThankDialog isActive={toggleThankDialog} title={state.title} />
        </div>
      </div>
    </>
  );
}

export default App;
