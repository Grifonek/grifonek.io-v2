import Popup from "reactjs-popup";
import PropTypes from "prop-types";

function PopupWindow({ children, popupMessage }) {
  console.log("PopupWindow trigger:", children);

  return (
    <Popup
      trigger={<div>{children}</div>}
      position="right center"
      closeOnDocumentClick
    >
      <div className="bg-white p-2 border border-gray-300 rounded shadow-lg flex items-center justify-center">
        {popupMessage}
      </div>
    </Popup>
  );
}

PopupWindow.propTypes = {
  children: PropTypes.node.isRequired,
  popupMessage: PropTypes.node.isRequired,
};

export default PopupWindow;
