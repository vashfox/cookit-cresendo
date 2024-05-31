import { useDispatch, useSelector } from "react-redux";
import RecipeItem from "../RecipeItem";
import { toggleModal } from "../../store";

const Modal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);
  const modalProps = useSelector((state) => state.modal.modalProps);

  const onHideModal = () => {
    dispatch(toggleModal());
  };

  return showModal ? (
    <div className="modal">
      <div className="backdrop" onClick={onHideModal}></div>
      <div className="modal-content relative">
        <a
          onClick={onHideModal}
          className="bg-white px-4 py-2 rounded-xl max-sm:shadow-lg text-md md:text-xl font-bold absolute right-3 top-1 cursor-pointer"
        >
          X
        </a>
        <RecipeItem details={modalProps} view />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
