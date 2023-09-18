import PropTypes from "prop-types";
const Cart = ({cart,totalPrice,credit}) => {


  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-[#2F80ED] text-lg font-bold">
        Credit Hour Remaining {20-credit} hr
      </h2>
      <hr className="my-4" />
      <h1 className="text-tittle">Course Name</h1>
     <div className=" py-5 text-details font-normal text-base">
     {cart.map(course=><p key={course.id}>{course.name}</p>)}
     </div>
      <hr className="my-4" />
      <h3 className=" text-base font-medium text-[#1C1B1BCC]">Total Credit Hour :{credit}</h3>
      <hr className="my-4" />
      <h3 className="text-base font-semibold text-[#1C1B1BCC]">Total Price : {totalPrice.toFixed(2)} USD</h3>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array,
  totalPrice:PropTypes.number,
  credit:PropTypes.number
};
export default Cart;
