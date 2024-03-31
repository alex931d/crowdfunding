import "../dialog/Dialog.css";
import { useState } from "react";
import { card } from "../../models/GeneralTypes";
import { useGameContext } from "../../utilities/context";

import Modal from "react-modal";

type dialogProps = {
  isActive: boolean;
  selected: number | null;
  ul: card[] | null;
};

function Dialog({ isActive, selected: selectedProp, ul }: dialogProps) {
  const [pledge, setPledge] = useState<number | null>(null);

  const { setSelected, setToggleDialog, setToggleThankDialog } =
    useGameContext();
  const handleSelectChange = (option: number, card: card) => {
    if (!card.isActive) {
      return;
    }
    setSelected(option);
  };
  const handleConfirm = () => {
    if (pledge !== null && ul !== null && pledge >= ul[selectedProp!].pledge) {
      setToggleDialog(false);
      setToggleThankDialog(true);
    } else {
      alert(
        "Please enter a valid pledge amount higher than or equal to the minimum pledge."
      );
    }
  };

  return (
    <>
      <Modal
        isOpen={isActive}
        onRequestClose={() => setToggleDialog(false)}
        contentLabel="Modal"
        className="dialog"
        overlayClassName="overlayer"
      >
        <div className="dialog__inner">
          <span className="forth-title">back this project</span>
          <p className="secoundary">description</p>

          <div className="dialog__inner__options">
            {ul?.map((card: card, cardIndex: number) => (
              <button
                key={cardIndex}
                type="button"
                className={`option ${card.isActive ? "" : "deactivated"}
                 ${selectedProp === cardIndex ? "selected" : ""}`}
                onClick={() => handleSelectChange(cardIndex, card)}
              >
                <div className="option__inner">
                  <div className="option__inner__row">
                    <div className={`option__inner__row__select-circle`}>
                      <div
                        className={`option__inner__row__select-circle__inner ${
                          selectedProp === cardIndex ? "active" : ""
                        }`}
                      ></div>
                    </div>
                    <div className="option__inner__row__last-item">
                      <div className="option__inner__row__last-item__header">
                        <div className="option__inner__row__last-item__header__first">
                          <span>{card.title}</span>
                          <span className="pledge">
                            Pledge ${card.pledge} or more
                          </span>
                        </div>
                        <div className="option__inner__row__last-item__header__row">
                          <span className="left">{card.left}</span>
                          <span className="secoundary">left</span>
                        </div>
                      </div>
                      <p className="secoundary">{card.description}</p>
                    </div>
                  </div>
                  {selectedProp === cardIndex && (
                    <>
                      <div className="option__inner__row__footer">
                        <span>Enter your pledge</span>
                        <div className="option__inner__row__footer__row">
                          <div className="input">
                            <span>$</span>
                            <input
                              onChange={(e) =>
                                setPledge(
                                  e.target.value !== ""
                                    ? parseInt(e.target.value)
                                    : null
                                )
                              }
                              type="number"
                              value={pledge !== null ? pledge : card.pledge}
                            />
                          </div>
                          <button
                            onClick={handleConfirm}
                            disabled={!card.isActive}
                            className="btn"
                          >
                            continue
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Dialog;
