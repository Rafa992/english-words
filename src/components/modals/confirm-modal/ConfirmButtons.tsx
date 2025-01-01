import { Button } from "@mui/material";
import s from "./ConfirmModal.module.scss";
import { setOpenConfirmModal } from "@/redux/slices/modalSlice";
import { useAppDispatch } from "@/redux/store";
import useRestartWords from "@/hooks/words/useRestartWords";

const ConfirmButtons = () => {
  const dispatch = useAppDispatch();
  const {restartWords} = useRestartWords();

  const handleDeleteOrder = () => {
    restartWords();
    dispatch(setOpenConfirmModal(false));
  };

  return (
    <div className={s.confirmModal_buttons}>
      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(setOpenConfirmModal(false))}
      >
        Отмена
      </Button>
      <Button variant="contained" color="success" onClick={handleDeleteOrder}>
        Подтвердить
      </Button>
    </div>
  );
};

export default ConfirmButtons;
