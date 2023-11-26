// HomePage.js
"use client";

import React, { useState } from 'react';

import QuizComponent from './quizcomponent';
import devOpsQuestions from './data';

const HomePage = () => {
    const [userAnswers, setUserAnswers] = useState(new Array(devOpsQuestions.length).fill(""));
    const [submitted, setSubmitted] = useState(false);

    const handleOptionChange = (questionIndex, selectedOption) => {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[questionIndex] = selectedOption;
        setUserAnswers(newUserAnswers);
    };

    const handleSubmitAll = (event) => {
        event.preventDefault();
        setSubmitted(true); // Set the submitted state to true to show feedback
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto p-6 py-6">
                <form onSubmit={handleSubmitAll}>
                    {devOpsQuestions.map((quiz, index) => (
                        <QuizComponent
                            key={index}
                            question={quiz.question}
                            options={quiz.options}
                            onOptionChange={(option) => handleOptionChange(index, option)}
                            userAnswer={userAnswers[index]}
                        />
                    ))}
                    <div className="flex justify-center space-y-2 ">
                        <button
                            type="submit"
                            className="mt-4  py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        >
                            Submit All Answers
                        </button>
                    </div>
                </form>
                {submitted && (
                    <div className="mt-10">
                        <h3 className="text-2xl font-semibold text-center mb-4">Quiz Feedback</h3>
                        <ul className="list-disc space-y-4 p-4">
                            {devOpsQuestions.map((quiz, index) => (
                                <li key={index} className="bg-gray-50 p-3 rounded-md">
                                    <p className="font-semibold">{quiz.question}</p>
                                    <p className={`text-lg ${userAnswers[index] === quiz.options[quiz.correctAnswerIndex] ? 'text-green-600' : 'text-red-600'}`}>
                                        Your answer: {userAnswers[index] || "Not Answered"}
                                    </p>
                                    {userAnswers[index] !== quiz.options[quiz.correctAnswerIndex] && (
                                        <p className="text-lg text-green-600">Correct answer: {quiz.options[quiz.correctAnswerIndex]}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};

export default HomePage;
