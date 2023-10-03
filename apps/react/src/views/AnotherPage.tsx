import { Link } from "react-router-dom";

const AnotherPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-lg mt-6 font-light">Another page</h1>
      <p className="max-w-[500px] mt-2 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ut vitae corporis iste a
        error voluptatum totam at velit laudantium. Debitis nihil unde eveniet quod saepe odit eius
        reiciendis tempora. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, iure
        hic! Quod facilis at vel dolorum enim magnam, blanditiis ullam commodi autem molestiae
        dolorem harum sint sed sunt nobis dolores?
      </p>
      <Link
        to="/"
        className="font-medium text-primary hover:text-secondary transition-colors ease-linear mt-6">
        Homepage
      </Link>
    </div>
  );
};
export default AnotherPage;
