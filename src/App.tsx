import React from 'react';
import Navbar from "./features/navbar/components/navbar";
import {StudentTableComponent, TableBarComponent} from "./features/student-rates";

function App() {
  return (
    <div className="w-full h-full bg-[#f7fcff] flex justify-center">
      <div className="w-[960px] flex flex-col">
        <Navbar />
        <TableBarComponent />
        <StudentTableComponent />
      </div>
    </div>
  );
}

export default App;
