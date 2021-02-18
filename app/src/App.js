import Stock from "./components/Stock";
import { connect } from "react-redux";

function App({ isLoading, error }) {
  return (
    <div>
      <section>
        <h1>Realtime Stock Info</h1>
        <p>Find a stock. Learn its History.</p>
        <p>Change your future</p>
      </section>
      {isLoading ? <p>Loading...</p> : error ? <p>{error}</p> : <Stock />}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { error, isLoading } = state.stockReducer;
  return {
    isLoading,
    error,
  };
};

export default connect(mapStateToProps)(App);
