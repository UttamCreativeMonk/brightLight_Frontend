// components/SimpleCaptcha.js
import React, { useState } from 'react';

const SimpleCaptcha = ({ onChange }) => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  }

  const handleChange = (e) => {
    setUserInput(e.target.value);
    onChange(e.target.value === captcha.answer.toString());
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setUserInput('');
    setError('');
  };

  return (
    <div>
      <p>What is {captcha.num1} + {captcha.num2}?</p>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter your answer"
      />
      <button type="button" onClick={refreshCaptcha}>
        Refresh
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SimpleCaptcha;
