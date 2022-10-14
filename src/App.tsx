import React, {useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './utils/routes';
import {Loading} from "./components/modules/loading";
import {Modal} from "./components/modules/modal";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {useRoutes()}
      </BrowserRouter>
        <Loading />
        <Modal />
    </div>
  );
}

export default App;
