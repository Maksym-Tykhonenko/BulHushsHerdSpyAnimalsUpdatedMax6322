import React, { useState } from 'react';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';

export default function QuizContainer({ backToLevels }: { backToLevels: () => void }) {
    const [screen, setScreen] = useState<'quiz' | 'result'>('quiz');
    const [finalAnswers, setFinalAnswers] = useState<{ answer: string, correct: boolean }[]>([]);

    const goToResult = (answers: { answer: string, correct: boolean }[]) => {
        setFinalAnswers(answers);
        setScreen('result');
    };

    if (screen === 'result') {
        return <ResultScreen userAnswers={finalAnswers} backToLevels={backToLevels} />;
    }

    return <QuizScreen goToResult={goToResult} />;
}
