import Stock from "./components/Stock";
import { connect } from "react-redux";
import { test } from "./actions";
import { useState } from "react";

function App({ isLoading, error, symbol, test }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleClick = () => {
    test();
  };

  const display = (
    <section>
      <h1>Realtime Stock Info</h1>
      <p>Find a stock. Learn its History.</p>
      <p>Change your future</p>
      <input value={input} placeholder={symbol} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <Stock />
    </section>
  );

  return (
    <div>
      {isLoading ? <p>Loading...</p> : error ? <p>{error}</p> : display}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { error, isLoading, data } = state.stockReducer;
  return {
    isLoading,
    error,
    symbol: data["01. symbol"],
  };
};

export default connect(mapStateToProps, { test })(App);
