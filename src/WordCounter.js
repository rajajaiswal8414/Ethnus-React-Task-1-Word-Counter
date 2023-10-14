import React, { useState } from 'react';
import './WordCounter.css';

function WordCounter() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="word-counter">
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleChange}
      />
      <div className="counter">
        Word Count: {wordCount}
      </div>
    </div>
  );
}

export default WordCounter;
