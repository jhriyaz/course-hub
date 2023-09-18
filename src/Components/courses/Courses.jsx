import { useEffect, useState } from "react";
import Course from "./course/Course";
import toast, { Toaster } from "react-hot-toast";
import Cart from "./cart/Cart";
const Courses = () => {
  let [data, SetData] = useState([]);
  let [cart, setCart] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);
  let [credit, setCredit] = useState(0);
  let handleAddToCart = (newData) => {
    let duplicateCheck = cart.find((course) => course.id === newData.id);
    if (duplicateCheck) {
      toast.error("Already added!");
      return;
    }
    if (credit + newData.creditHours > 20) {
      toast.error("Credit exceeded.Maximum 20h!");
      return;
    } else {
      toast.success("Successfully added!");
      setTotalPrice(totalPrice + newData.price);
      setCredit(credit + newData.creditHours);
      return setCart([...cart, newData]);
    }
  };
  useEffect(() => {
    const loadData = async () => {
      const load = await fetch("/data.json");
      const Data = await load.json();
      SetData(Data);
    };
    loadData();
  }, []);

  return (
    <main className="container grid grid-cols-4 gap-10 mx-auto">
      <Toaster position="top-center"></Toaster>
      <div className="lg:col-span-3 col-span-4 grid justify-between grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto gap-10">
        {data.map((course) => (
          <Course
            course={course}
            key={course.id}
            handleAddToCart={handleAddToCart}
          ></Course>
        ))}
      </div>
      <div className="col-span-4 lg:col-span-1">
        <Cart cart={cart} totalPrice={totalPrice} credit={credit}></Cart>
      </div>
    </main>
  );
};

export default Courses;
