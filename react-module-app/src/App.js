import React, { useEffect, useRef } from 'react';
import { mount } from 'vueModuleApp/Sample';
import solidCounterWrapper from 'solidModuleApp/counterWrapper'

const App = () => {
  const ref = useRef(null)
  const solidRef = useRef(null)

  useEffect(() => {
    mount(ref.current);
    solidCounterWrapper(solidRef.current)
  }, []);

  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>나는 React: Vue와 Solid.js에 대한 Container 역할을 하고 있어!</h1>
      <div ref={ref} />
      <div ref={solidRef}/>
    </div>
  );
};

export default App;
