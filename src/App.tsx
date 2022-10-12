import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './utils/routes';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {useRoutes()}
      </BrowserRouter>
    </div>
  );
}

export default App;
