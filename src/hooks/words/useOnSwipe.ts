import useRandomWord from "./useRandomWord";

interface IProps {
    updateCard: boolean;
    setUpdateCard: (v: boolean)=> void;
  }

export default function useOnSwipe({updateCard, setUpdateCard, }: IProps) {

    const { randomWord } = useRandomWord();

    const onSwipe = (direction: string) => {
        if (direction === "right") {
          console.log("Карта смахнута вправо!");
          setTimeout(() => {
            randomWord();
            setUpdateCard(!updateCard)
          }, 700);
        }
        else if(direction === "left"){
          console.log("Карта смахнута влево!");
          setTimeout(() => {
            randomWord();
            setUpdateCard(!updateCard)
          }, 700);
        }
      };

  return {onSwipe}
}
