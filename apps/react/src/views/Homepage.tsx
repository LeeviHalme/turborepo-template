import { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center my-4">
        <button
          className="bg-dark cursor-pointer text-lg rounded-lg border-[1px] border-transparent hover:border-primary my-2 px-4 py-2 text-white transition-colors ease-linear"
          onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <div className="flex justify-around my-4">
        <Link
          to="/"
          className="font-medium text-primary hover:text-secondary transition-colors ease-linear mr-10">
          Homepage
        </Link>
        <Link
          to="/another-page"
          className="font-medium text-primary hover:text-secondary transition-colors ease-linear">
          Another page
        </Link>
      </div>
    </>
  );
};
export default Homepage;
