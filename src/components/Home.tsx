import React, { useEffect, useState } from "react";

type Animal = {
  name: string;
  emoji: string;
  mood: string;
};

type Props = {
  animals: Animal[];
  onSelect: (animal: Animal) => void;
};

const AnimalCircle: React.FC<Props> = ({ animals, onSelect }) => {
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsSpinning(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`relative w-100 h-100 rounded-full flex justify-center items-center ${
        isSpinning ? "animate-spin-slow" : ""
      }`}
    >
      {animals.map((animal, index) => {
        const angle = (360 / animals.length) * index;
        const radius = 120;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        return (
          <div
            key={index}
            onClick={() =>{ onSelect(animal);setIsSpinning(true)}}
            className="absolute text-3xl cursor-pointer transition-transform hover:scale-125"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
            title={animal.name}
          >
            {animal.emoji}
          </div>
        );
      })}
    </div>
  );
};

export default AnimalCircle;
