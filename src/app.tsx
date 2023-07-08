import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('demo');
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <h1>{value}</h1>
    </div>
  );
};

export default App;
