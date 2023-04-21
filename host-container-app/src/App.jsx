import React, { useEffect, useRef } from 'react';
import ReactDOM from "react-dom";

import { mount } from 'vueModuleApp/Sample';
import solidCounterWrapper from 'solidModuleApp/counterWrapper'
import { Counter } from 'reactModuleApp/Counter'

import "./index.css";

const App = () => {
  const vueRef = useRef(null)
  const solidRef = useRef(null)

  useEffect(() => {
    mount(vueRef.current);
    solidCounterWrapper(solidRef.current)
  }, []);

  return (
    <div className="container">
      <div>Name: host-container-app</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>

      <h1>나는 React: Vue와 Solid.js에 대한 Container 역할을 하고 있어!</h1>
      <div ref={vueRef} />
      <div ref={solidRef}/>
      <Counter/>
    </div>
  );
}
export default App

ReactDOM.render(<App />, document.getElementById("app"));
