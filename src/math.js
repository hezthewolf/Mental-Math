import { useEffect, useState } from "react";

export default function Mental() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [myAnswer, setMyAnswer] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [text, setText] = useState("")

  // const operators = ["+", "-", "*", "/"]
  // const operator = operators[Math.floor(Math.random() * operators.length)]

  function handleMath() {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  }

  const checkAnswer = () => {
    myAnswer === answer ? setIsCorrect(true) : setIsCorrect(false);
    console.log(answer);
    isCorrect ? setText("Correct") : setText("Wrong")
  };

  const runReset = () => {
    handleMath();
  };

  useEffect(() => {
    handleMath();
  }, []);

  useEffect(() => {
    setAnswer(() => num1 * num2);
  }, [num1, num2]);

  return (
    <div className="mental">
      <div className="question">
        <div className="operation">
          {num1} x {num2}
        </div>
      </div>
      <input
        name="myAnswer"
        value={myAnswer}
        onChange={(e) => setMyAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Answer</button>
      <div className={isCorrect ? "correct-answer" : "wrong-answer"}>
        {text}
      </div>
      <button className="resetBtn" onClick={runReset}>
        Reset
      </button>
    </div>
  );
}
