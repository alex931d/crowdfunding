import thankYouIcon from "../../../assets/icon-check.svg";
import "../../dialog/Dialog.css";
import "../thankDialog/ThankDialog.css";
import { useGameContext } from "../../../utilities/context";
import Modal from "react-modal";
type thankDialogProps = {
  isActive: boolean;
  title: string | null;
};
function ThankDialog({ isActive, title }: thankDialogProps) {
  const { setToggleThankDialog } = useGameContext();
  const handleBtnClick = () => {
    setToggleThankDialog(false);
  };
  return (
    <>
      <Modal
        isOpen={isActive}
        onRequestClose={() => setToggleThankDialog(false)}
        contentLabel="Modal"
        className="dialog thank-you"
        overlayClassName="overlayer"
      >
        <div className="dialog__inner">
          <div className="dialog__thank">
            <img src={thankYouIcon} alt=""></img>
            <span className="secoundary-title">Thanks for your support!</span>
            <p className="secoundary">
              Your pledge brings us one step closer to sharing {title}
              worldwide. You will get an email once our campaign is completed.
            </p>
            <button onClick={handleBtnClick} className="btn">
              got it!
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default ThankDialog;
