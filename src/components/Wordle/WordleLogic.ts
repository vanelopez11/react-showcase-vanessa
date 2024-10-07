// import Letter from "./Letter";
export type status = "correct" | "misplaced" | "incorrect" | "none";

interface LetterStatus {
  Letter: string;
  status: status;
}

export function checkGuess(guess: string, answer: string): LetterStatus[] {
  console.log(guess);
  console.log(answer);
  const result: LetterStatus[] = [];
  const answerLetters: Array<string | null> = [...answer];
  const guessLetters = [...guess];

  guessLetters.forEach((letter, i) => {
    if (letter === " ") {
      result[i] = { Letter: letter, status: "none" };
    } else if (letter === answer[i]) {
      result[i] = { Letter: letter, status: "correct" };
      answerLetters[i] = null; 
    } else {
      result[i] = { Letter: letter, status: "incorrect" }; 
    }
  });

  guessLetters.forEach((letter, i) => {
    if (
      result[i].status === "incorrect" &&
      answerLetters.includes(letter)
    ) {
      result[i].status = "misplaced";
      const index = answerLetters.indexOf(letter);
      if (index !== -1) answerLetters[index] = null;
    }
  });

  return result;
}
