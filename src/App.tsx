// src/App.tsx
import React, { useState } from "react";
import HelloCard from "./components/HelloCard";
import Home from "./components/Home";
import AnimalCircle from "./components/Home";
import AnimalDetails from "./components/Gallery";


const App: React.FC = () => {
  const animals = [
    { name: "Bunny", emoji: "🐰", mood: "Feeling playful!" },
    { name: "Kitty", emoji: "🐱", mood: "Taking a nap" },
    { name: "Foxy", emoji: "🦊", mood: "Ready for mischief" },
    { name: "Panda", emoji: "🐼", mood: "Loves bamboo" },
    { name: "Lion", emoji: "🦁", mood: "King of the jungle" },
    { name: "Koala", emoji: "🐨", mood: "Sleepy head" },
    { name: "Cow", emoji: "🐮", mood: "Moo-dy today" },
    { name: "Bear", emoji: "🐻", mood: "Big softie" },
  ];

  const [selectedAnimal, setSelectedAnimal] = useState(animals[0]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[135deg] via-[#ffd6e8] to-[#ffe4f0] p-4 text-center flex justify-center items-center">
     {/* <HelloCard/> */}
     <AnimalCircle animals={animals} onSelect={setSelectedAnimal} />
      <AnimalDetails animal={selectedAnimal} />
    
    </div>
  );
};

export default App;
