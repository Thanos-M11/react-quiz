import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();

  const question = questions[index];

  return (
    <div>
      <h3>{question.question}</h3>
      <Options />
    </div>
  );
}

export default Question;
