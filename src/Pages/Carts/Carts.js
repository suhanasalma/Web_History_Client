import React from 'react';
import {useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {savedCart} from '../../LocalStorage/LocalStorage'
import CourseDisplay from '../CourseDisplay/CourseDisplay'

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

  console.log(carts)


  return (
    <section>
      <div className="course-cotainer mb-10">
        <h1 className="text-white font-bold text-4xl flex h-full justify-center items-center">
          Welcome To Cart List
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {
          // carts.map(cart=><p>{cart.name}</p>)
          carts.map((course) => (
            <CourseDisplay course={course} key={course.id}></CourseDisplay>
          ))
        }
      </div>
    </section>
  );
};;

export default Carts;