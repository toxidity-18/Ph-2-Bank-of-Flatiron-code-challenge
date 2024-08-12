import React from "react";
import container from "./Components/container";

function App() {
  return (
    <div className= "ui raised segment">
      <div className= "ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>

      <container.AccountContainer />
    </div>
  );
}

export default App;