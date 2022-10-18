import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../Services/Actions/CounterAction";

function Counter({ count, increment, decrement, reset }) {
  return (
    <div>
        <p>This is an integration React-Redux</p>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counterwithaction.count
});

const mapDispatchToProps = {
  decrement,
  increment,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);