import bookmarkIcon from "../../assets/icon-bookmark.svg";
import "../Header/Header.css";
import profileIcon from "../../assets/logo-mastercraft.svg";
import { stats } from "../../models/GeneralTypes";
import { useGameContext } from "../../utilities/context";
type headerProps = {
  title: string | null;
  subTitle: string | null;
  isBookMarked: boolean;
  stats: stats;
  toggleBookmark: () => void;
};

function Header({
  title,
  subTitle,
  isBookMarked,
  stats,
  toggleBookmark,
}: headerProps) {
  const { setSelected, setToggleDialog } = useGameContext();
  const onSelect = () => {
    setSelected(null);
    setToggleDialog(true);
  };
  return (
    <>
      <div className="crowdfund-card__header">
        <div className="crowdfund-card__header__first">
          <div className="profile">
            <img src={profileIcon} alt=""></img>
          </div>
          <h2 className="secoundary-title main">{title}</h2>
          <p className="main-text secoundary">{subTitle}</p>
          <div className="crowdfund-card__header__first__row">
            <button onClick={onSelect} className="btn">
              back this project
            </button>
            <div
              onClick={toggleBookmark}
              className={`bookmark ${isBookMarked ? "isMarked" : ""}`}
            >
              <div className="bookmark__icon">
                <img src={bookmarkIcon} alt=""></img>
              </div>
              <span className="bookmark__icon__text">bookmarked</span>
            </div>
          </div>
        </div>
        <div className="crowdfund-card__header__last">
          <div className="crowdfund-card__header__last__column">
            <div className="crowdfund-stats">
              {stats.stats.map((stat, statIndex) => (
                <div className="crowdfund-stats__column" key={statIndex}>
                  <h3 className="third-title main">{stat.main}</h3>
                  <p className="main-text secoundary"> {stat.secoundary}</p>
                </div>
              ))}
            </div>
            <div className="crowdfund-progress">
              <div className="crowdfund-progress__bar">
                <div
                  className="crowdfund-progress__bar--achived"
                  style={{ width: stats.progress + "%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
