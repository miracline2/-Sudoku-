type Animal = {
    name: string;
    emoji: string;
    mood: string;
  };
  
  const AnimalDetails: React.FC<{ animal: Animal }> = ({ animal }) => {
    return (
      <div className="mt-8 text-center p-4 rounded-xl  relative right-[17em]">
        <div className="text-4xl">{animal.emoji}</div>
        <h2 className="text-xl font-bold mt-2 text-pink-600">{animal.name}</h2>
        <p className="text-gray-600 mt-1">{animal.mood}</p>
      </div>
    );
  };
  
  export default AnimalDetails;
  