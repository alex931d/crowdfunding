import SelectCard from "../selectCard/SelectCard";
import "../body/Body.css";
import { about, card } from "../../models/GeneralTypes";
import { useGameContext } from "../../utilities/context";

type bodyProps = {
  about: about | null;
  ul: card[] | null;
};
function Body({ about, ul }: bodyProps) {
  const { setToggleDialog, setSelected } = useGameContext();

  const onSelect = (index: number) => {
    setToggleDialog(true);
    setSelected(index);
  };

  return (
    <>
      <div className="crowdfund-card__body">
        <div className="crowdfund-card__body__about">
          <h4 className="forth-title main">{about?.title}</h4>
          <p className="main-text secoundary">{about?.about}</p>
        </div>
        <div className="crowdfund-card__body__options">
          {ul === null ? (
            <p>no options here</p>
          ) : (
            ul.map((card: card, cardIndex) => (
              <SelectCard
                title={card.title}
                description={card.description}
                left={card.left}
                isActive={card.isActive}
                pledge={card.pledge}
                index={cardIndex}
                onSelect={(data) => onSelect(data)}
                key={cardIndex}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
export default Body;
