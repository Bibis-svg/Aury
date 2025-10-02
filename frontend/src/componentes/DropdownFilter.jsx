import React, { useState, useRef, useEffect } from 'react';

export default function DropdownFilter({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const resetSelection = () => {
    setSelectedOptions([]);
  };

  return (
    <div className="filtro-item">
      <button className="filtro-btn" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={isOpen ? 'arrow-up' : ''}>
          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <span>{selectedOptions.length} Selecionado</span>
            <button onClick={resetSelection} className="reset-btn">Reset</button>
          </div>
          <div className="dropdown-options">
            {options.map((option) => (
              <label key={option} className="checkbox-container">
                {option}
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}