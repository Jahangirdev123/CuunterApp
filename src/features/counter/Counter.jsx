import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 style={{ textAlign: 'center' }}>Counter App</h1>
      <div className="counter-display" style={{ textAlign: 'center', fontSize: '48px', fontWeight: 'bold' }}>
        <span>{count}</span>
      </div>
      <div className="button-group" style={{ textAlign: 'center' }}>
        <button
          className="btn btn-primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;