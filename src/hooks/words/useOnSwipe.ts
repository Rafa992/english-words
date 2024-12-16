import { selectCurrentWord } from "@/redux/slices/wordsSlice";
import { useAppSelector } from "@/redux/store";
import useRandomWord from "./useRandomWord";
import useUpdateWord from "./useUpdateWord";

interface IProps {
    updateCard: boolean;
    setUpdateCard: (v: boolean)=> void;
  }

export default function useOnSwipe({updateCard, setUpdateCard, }: IProps) {

    const { randomWord } = useRandomWord();
    const {updateWord} = useUpdateWord();
    const currentWord = useAppSelector(selectCurrentWord)

    const onSwipe = (direction: string) => {
        if (direction === "right") {
          setTimeout(() => {
            randomWord();
            setUpdateCard(!updateCard)
            updateWord(currentWord)
          }, 700);
        }
        else if(direction === "left"){
          setTimeout(() => {
            randomWord();
            setUpdateCard(!updateCard)
            updateWord(currentWord)
          }, 700);
        }
      };

  return {onSwipe}
}
