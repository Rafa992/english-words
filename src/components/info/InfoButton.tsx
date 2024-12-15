import { selectUser } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/redux/store";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { IconButton } from "@mui/material";
import s from "./InfoButton.module.scss";

export default function InfoButton() {
  const user = useAppSelector(selectUser);
  const style =
    user.laterality === "right" ? { right: "30px" } : { left: "30px" };

  return (
    <IconButton style={style} className={s.infoButton}>
      <QuestionMarkIcon className={s.infoButton_icon} />
    </IconButton>
  );
}
