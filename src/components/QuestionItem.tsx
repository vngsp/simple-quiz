import { questions } from "@/data/questions";
import { QuestionType } from "@/types/questionType";
import { useState } from "react";

type Props = {
    question: QuestionType;
    count: number;
    onAnswer: (answer: number) => void;
}

const QuestionItem = ({ question, count, onAnswer }: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    
    const checkQuestion = (key: number) => {
        if(selectedAnswer === null) {
            setSelectedAnswer(key);
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null);
            }, 500)
        }
    }

    return (
        <div>
            <div className="text-2xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        onClick={() => checkQuestion(key)}
                        key={key}
                        className={`cursor-pointer border p-3 mb-2 rounded-md border-gray-400 bg-blue-50 hover:opacity-50
                        ${selectedAnswer !== null && 'cursor-auto hover:opacity-100'}
                        ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-200 border-green-400'}
                        ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-200 border-red-400'}
                        `}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default QuestionItem;