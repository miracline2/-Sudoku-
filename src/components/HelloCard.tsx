import jungle from '../assets/jungle.png'
const HelloCard = () => {
    return (
      <div className="w-150 h-100 bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
        <img
          src={jungle}
          alt="Cupcake"
          className="w-50 h-50 mb-4 animate-pulse"
        />
        <h2 className="text-xl font-bold text-pink-500">
          Hello World!! This is Jungle 
        </h2>
        <button  className='mx-auto cursor-pointer mt-5 w-30 h-10 bg-[#ffd6e8] border-0 shadow-xl '>Welcome</button>
      </div>
    );
  };
  
  export default HelloCard;
  