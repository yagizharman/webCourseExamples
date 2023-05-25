import React, { useState } from 'react';
import { franc } from 'franc';
import langs from 'langs';

function App() {
  const [sentence, setSentence] = useState('');
  const [languageName, setLanguageName] = useState('');

  const handleInputChange = (e) => {
    setSentence(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const langCode = franc(sentence);
    if (langCode !== 'und') {
      const language = langs.where('3', langCode);
      if (language) {
        setLanguageName(language.name);
      } else {
        setLanguageName('Dil bilgisi bulunamadı.');
      }
    } else {
      setLanguageName('Dil tespit edilemedi.');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="sentence">Cümle:</label>
        <input type="text" id="sentence" value={sentence} onChange={handleInputChange} />
        <button type="submit">Gönder</button>
      </form>

      <p>{languageName}</p>
    </div>
  );
}

export default App;
