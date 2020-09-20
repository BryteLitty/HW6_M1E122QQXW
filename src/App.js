import React from "react";
import Header from "./components/header";
import Global from "./components/global";
import GlobalTable from "./components/globalTable";
import Sidenote from "./components/sidenote";
function App() {
  return (
    <>
      <Header></Header>
      <Global></Global>
      
      <div className="container move">
        <div className="row">
          <div className="col-8">
            <GlobalTable></GlobalTable>
          </div>
          <div className="col-4">
            <Sidenote></Sidenote>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
