import "../selectCard/SelectCard.css";
import { card } from "../../models/GeneralTypes";

interface SelectCardProps extends card {
  index: number;
  onSelect: (index: number) => void;
}

function SelectCard({
  title,
  description,
  left,
  isActive,
  pledge,
  index,
  onSelect,
}: SelectCardProps) {
  const handleSelectClick = () => {
    onSelect(index);
  };
  return (
    <>
      <div className={`select-card ${isActive ? "" : "deactivated"}`}>
        <div className="select-card__header">
          <span className="select-card__header__title">{title}</span>
          <span className="select-card__header__pledge">
            Pledge {pledge} or more
          </span>
        </div>
        <p className="main-text secoundary">{description}</p>
        <div className="select-card__footer">
          <div className="select-card__footer__row">
            <span className="left">{left}</span>
            <span className="secoundary">left</span>
          </div>
          <button
            onClick={handleSelectClick}
            className="btn"
            disabled={!isActive}
          >
            select reward
          </button>
        </div>
      </div>
    </>
  );
}
export default SelectCard;
