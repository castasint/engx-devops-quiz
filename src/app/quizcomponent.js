"use client";

// QuizComponent.js
import React from 'react';

const QuizComponent = ({ question, options, onOptionChange, userAnswer }) => {
    return (
        <div className="p-6 mb-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
            <div className="text-xl font-medium text-black">{question}</div>
            <div className="flex flex-col w-full space-y-4">
                {options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-3">
                        <input
                            type="radio"
                            name={question} // unique name for each group of radio buttons
                            value={option}
                            onChange={() => onOptionChange(option)}
                            checked={userAnswer === option}
                            className="form-radio h-5 w-5 text-blue-600"
                            disabled={userAnswer} // disable once an option is chosen
                        />
                        <span className="text-gray-700 text-lg">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default QuizComponent;
