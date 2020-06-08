import React, { useEffect, useState } from 'react';

import './app.scss';

export const App = () => {
  const [m, setMessage] = useState({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="app">
      <header className="flex">
        <h1>Welcome to site!</h1>
      </header>
      <main>
        {m.message}
      </main>
    </div>
  );
};

export default App;
