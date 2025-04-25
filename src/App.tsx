// src/App.tsx
import React from "react";
import HelloCard from "./components/HelloCard";


const App: React.FC = () => {


  return (
    <div className="min-h-screen bg-gradient-to-r from-[135deg] via-[#ffd6e8] to-[#ffe4f0] p-4 text-center flex justify-center items-center">
     <HelloCard/>
    
    </div>
  );
};

export default App;
