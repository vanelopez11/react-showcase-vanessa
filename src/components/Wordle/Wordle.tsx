import styles from "./Wordle.module.css";
import Letter from "./Letter";
import Message from "./Message";
import React, { ChangeEvent, FormEvent, useEffect } from "react";
import { checkGuess } from "./WordleLogic";
import wordleWordsData from "../Wordle/locales/wordleEs.json"; 

function Wordle() {
  const [wordleWords, setWordleWords] = React.useState<string[]>([]);
  const maxattemp = 6;
  const [attemp, setAttemp] = React.useState(0);
  const [attemps, setAttemps] = React.useState(Array.from({ length: maxattemp }, () => "     "));
  const [answer, setAnswer] = React.useState("");
  const [state, setState] = React.useState({ endgame: false, win: false });
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const filteredValue = event.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
    setInputValue(filteredValue);
    console.log(filteredValue);
  };

  const restart = () => {
    setAttemp(0);
    setAttemps(Array.from({ length: maxattemp }, () => "     "));
    setState({ endgame: false, win: false });

    if (buttonRef.current) {
      buttonRef.current.disabled = false;
    }
    if (inputRef.current) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
    if (wordleWords.length > 0) {
      const randomWord = wordleWords[Math.floor(Math.random() * wordleWords.length)];
      setAnswer(randomWord);
      console.log("Palabra seleccionada:", randomWord); // Verificar la palabra seleccionada
  }
    // Elegir una respuesta aleatoria
    const randomWord = wordleWords[Math.floor(Math.random() * wordleWords.length)];
    setAnswer(randomWord);
  };

  const validateAttemp = (event: FormEvent) => {
    event.preventDefault();
    const currentValue = inputRef.current?.value;

    if (currentValue && currentValue.length === 5) {
      const currentAttemp = [...attemps];
      currentAttemp[attemp] = currentValue;
      setAttemps(currentAttemp);
      setAttemp(prev => prev + 1);

      // Verifica si se ha ganado o se ha alcanzado el máximo de intentos
      if (currentValue === answer || (attemp + 1) >= maxattemp) {
        setState({ endgame: true, win: currentValue === answer });
        if (buttonRef.current) {
          buttonRef.current.disabled = true;
        }
        if (inputRef.current) {
          inputRef.current.disabled = true;
        }
      }

      // Reiniciar el campo de entrada
      setInputValue("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      console.log("Error, debe ingresar una palabra de 5 letras")
    }
  };

  useEffect(() => {
    setWordleWords(wordleWordsData);
  }, []); 

  useEffect(() => {
    if (answer === "" && wordleWords.length > 0) {
      const randomWord = wordleWords[Math.floor(Math.random() * wordleWords.length)];
      setAnswer(randomWord);
    }
  }, [answer, wordleWords]);

  return (
    <div className={styles.container}>
      {attemps.map((word, index) => (
        <div className={styles.guess} key={index}>
          {checkGuess(word, answer).map((letter, letterIndex) => (
            <Letter key={letterIndex} value={letter.Letter} status={letter.status} />
          ))}
        </div>
      ))}

      <form className={styles.form} onSubmit={validateAttemp}>
        <p className={styles.title}>Ingresa tu palabra</p>
        <input
          className={styles.input}
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={inputOnChange}
          maxLength={5}
        />
        <button
          className={styles.button}
          ref={buttonRef}>
          Enviar
        </button>
      </form>

      {state.endgame && (
        <Message attemp={attemp} win={state.win} answer={answer} restart={restart} />
      )}
    </div>
  );
}

export default Wordle;
