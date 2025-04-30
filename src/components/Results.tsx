import { QuestionType } from "@/types/questionType";

type Props = {
    questions: QuestionType[];
    answers: number[];
}

const Results = ({ questions, answers }: Props) => {
    return (
        <div>
            {questions.map((item, key) => (
                <div key={key} className="mb-3">
                    <div className="font-bold">{key + 1}. {item.question}</div>
                    <div>
                        <span>({item.answer === answers[key] ? 'Acertou' : 'Errou'}) - </span>
                        {item.options[item.answer]}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Results;