import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  const onPlustClick = () => {
    const plusCount = count + 1;
    setCount(plusCount);
  }

  const onMinusClick = () => {
    const minusCount = count - 1;
    setCount(minusCount);
  }

  return (
    <div>
      {count}
      <br />
      <button type="button" onClick={onPlustClick}>+ 1</button><button type="button" onClick={onMinusClick}>- 1</button>
    </div>
  );
}

export default App;