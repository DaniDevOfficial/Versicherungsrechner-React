import React, { useState } from 'react';

function NumberInputWithSeparator() {
  const [value, setValue] = useState(0);

  const handleInputChange = (event) => {
    const numericValue = event.target.value.replace(/\D/g, '');
    const numberValue = Number(numericValue);
    const formattedValue = numberValue.toLocaleString();
    setValue(numberValue);
  };

  return (
    <div>
      <label>Enter a number:</label>
      <input type="number" value={value} onChange={handleInputChange} />
    </div>
  );
}

export default NumberInputWithSeparator;