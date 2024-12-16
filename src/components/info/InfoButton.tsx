import { selectUser } from "@/redux/slices/userSlice";
import { setIncrease } from "@/redux/slices/wordsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { IconButton } from "@mui/material";
import s from "./InfoButton.module.scss";

export default function InfoButton() {

    const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const style =
    user.laterality === "right" ? { right: "30px" } : { left: "30px" };

    const handleClick = ()=> {
        dispatch(setIncrease(false))
    }

  return (
    <IconButton style={style} className={s.infoButton} onClick={handleClick}>
      <QuestionMarkIcon className={s.infoButton_icon} />
    </IconButton>
  );
}
