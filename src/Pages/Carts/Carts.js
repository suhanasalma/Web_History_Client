import React from 'react';
import {useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  savedCart,
  deletefromLocalStorage,
} from "../../LocalStorage/LocalStorage";
import Cart from '../Cart/Cart';
import LeftSide from '../LeftSide/LeftSide';

const Carts = () => {
  const allCourse = useLoaderData();

  const [carts, setCarts] = useState([]);
  

  useEffect(()=>{
   let newCart = [];
   const loadedCart = savedCart()
   for (const id in loadedCart) {
     const addedCourse = allCourse.find((course) => course.id == id);
     newCart.push(addedCourse);
   }
   setCarts(newCart)
  },[])

  const removeItem = (id) => {
    const restCourse = carts.filter(course=>course.id!=id)
    setCarts(restCourse)
    deletefromLocalStorage(id);
  };

  let total = 0;
  for (let course of carts){
    console.log(course.price)
    total += course.price;

  }

  return (
    <section>
      <div className="course-cotainer mb-10">
        <h1 className="text-white font-bold text-4xl flex h-full justify-center items-center">
          Welcome To Cart List
        </h1>
      </div>

      <article className="flex sm:flex-col md:flex-row justify-around items-center">
        <div className="">
          {carts.map((cart) => (
            <Cart removeItem={removeItem} cart={cart} key={cart.id}></Cart>
          ))}
          <div className="my-10">
            <h1 className="text-4xl mb-5 font-bold">Carts Total</h1>
            <p className="flex justify-between font-semibold text-xl border p-3">
              Total <span> {total}$</span>
            </p>
            <button className="border w-full p-3 mt-5 font-semibold">
              Proceed To CheckOut
            </button>
          </div>
        </div>
        <div>
          <LeftSide />
        </div>
      </article>
    </section>
  );
};;

export default Carts;