"use client"

import QuestionItem from "@/components/QuestionItem";
import Results from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";

const Page = () => {
  const [ showResult, setShowResult ] = useState(false);
  const [ answers, setAnswers ] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const tile = 'Quiz de Culínaria';

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnswer = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

  const handleRestartBtn = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }

  return (
    <div className="h-screen w-screen bg-blue-900 flex flex-col justify-center items-center">
      <div className="bg-gray-100 w-full max-w-xl flex flex-col justify-center rounded-md p-2 text-black">
        <h2 className="border-b border-gray-40 font-bold text-2xl p-5">{tile}</h2>
        <div className="p-5">
          {!showResult &&
            <QuestionItem
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswer}
           />          
          }
          {showResult &&
            <Results questions={questions} answers={answers} />
          }
        </div>
        <div className="p-5 text-center border-t border-gray-400">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} ${questions.length > 1 ? 'perguntas' : 'pergunta'}`
          }
          {showResult &&
            <button onClick={handleRestartBtn} className="px-3 py-2 rounded-md bg-indigo-800 text-white">Reiniciar Quiz</button>
          }
        </div>
      </div>
    </div>
  )
}
export default Page;