import React, { useState } from 'react';

function MathCaptcha({ buttonText, onSuccess }) {
  const [num1] = useState(Math.floor(Math.random() * 5) + 1);
  const [num2] = useState(Math.floor(Math.random() * 5) + 1);
  const [answer, setAnswer] = useState('');

  const expected = num1 + num2;
  const isValid = parseInt(answer, 10) === expected;

  const handleAction = (e) => {
    e.preventDefault();
    if (isValid) {
      onSuccess();
    }
  };

  return (
    <div className="captcha-container">
      <label htmlFor="captcha" className="captcha-label">
        CAPTCHA, vad är {num1} + {num2}? <span className="required">*</span>
      </label>
      
      <input
        type="text"
        id="captcha"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Ditt svar..."
        className="captcha-input"
      />
      
      <button
        onClick={handleAction}
        className="btn-primary btn-submit captcha-btn"
        disabled={!isValid}
      >
        {buttonText} 
      </button>
    </div>
  );
}

export default MathCaptcha;