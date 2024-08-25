import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1
            className="mb-4 text-4xl font-extrabold  
                           text-center text-gray-900"
          >
            About Us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            deserunt nam pariatur enim, asperiores possimus voluptates eius vero
            neque nisi, aspernatur earum voluptatum nesciunt molestias dolores
            doloribus nostrum, labore similique ab. Saepe recusandae iste
            similique iusto reprehenderit sint, architecto dolore omnis nobis!
            Enim distinctio exercitationem accusamus esse debitis, eveniet
            possimus.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}
