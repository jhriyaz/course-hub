import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa";
import { BsBook } from "react-icons/bs";




const Course = ({ course ,handleAddToCart}) => {
  let { name, photo, price, creditHours, details } = course;
  return (
    <div className="bg-white rounded-xl p-4 w-80">
      <img src={photo} className="w-full h-36 rounded-lg" alt="Course photo" />
      <h1 className=" text-sm font-semibold my-4 text-tittle">{name}</h1>
      <p className="text-description text-xs font-normal ">{details}</p>
      <div className=" my-5 flex justify-between items-center text-description text-xs font-medium">
        <p className="flex gap-2 items-center">
          <FaDollarSign></FaDollarSign>Price :{price}
        </p>
        <p className="flex gap-2 items-center">
          <BsBook></BsBook> Credit : {creditHours}hr
        </p>
      </div>
      <button className="btn btn-primary w-full text-white rounded-lg font-semibold" onClick={()=>handleAddToCart(course)}>
        Select
      </button>
    </div>
  );
};
Course.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  details: PropTypes.string,
  course: PropTypes.object,
  creditHours: PropTypes.number,
  handleAddToCart: PropTypes.func,
};
export default Course;
