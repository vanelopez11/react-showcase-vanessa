export type status = "correct" | "misplaced" | "incorrect" | "none";

interface LetterStatus {
    Letter: string;
    status: status;
}

export function checkGuess(guess: string, answer: string): LetterStatus[] {
    return [...guess].map((value, i) => {
        if (value === " ") {
            return { Letter: value, status: "none" }
        }
        if (value === answer[i]) {
            return { Letter: value, status: "correct" }
        }
        if (answer.includes(value)) {
            return { Letter: value, status: "misplaced" }
        }
        return { Letter: value, status: "incorrect" }
    });
}