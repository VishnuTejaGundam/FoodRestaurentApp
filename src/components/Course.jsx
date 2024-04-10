import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-20 item-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-orange-500"> Here :)</span>
          </h1>
          <p className="mt-10">
            Discover the culinary wonders of our restaurant's most unique and
            special dishes, crafted to delight your senses and elevate your
            dining experience. Dive into our signature Sizzling Steak, a
            masterpiece of perfectly seared beef served with grilled vegetables
            and savory sauces, or indulge in our Gourmet Pizza featuring a thin,
            crispy crust topped with premium ingredients like fresh mozzarella
            and ripe tomatoes
          </p>
          <Link to="/">
          <button className=" mt-6 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-4 ">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
