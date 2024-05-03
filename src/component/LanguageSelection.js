import React, { useState } from 'react';

const LanguageSelection = ({ supportedLanguages, onChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setSelectedLanguage(selectedLanguage);
    onChange(selectedLanguage);
  };

  return (
    <div>
      <label htmlFor="language">Select Language:</label>
      <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Select a language</option>
        {supportedLanguages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelection;
