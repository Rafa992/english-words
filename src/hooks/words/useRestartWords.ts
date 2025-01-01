import { axiosWithAuth } from "@/api/interceptors";
import useInitialError from "../error/useInitialError";
import useGetAllWords from "./useGetAllWords";

export default function useRestartWords() {

  const {initialError} = useInitialError();
  const {getAllWords} = useGetAllWords();

  const restartWords = async () => {
    try {
      await axiosWithAuth.get("/words/delete-words");
      await getAllWords();
    } catch (error) {
        initialError(true, 'error while restart words', 'error')
    }
  };

  return { restartWords };
}
