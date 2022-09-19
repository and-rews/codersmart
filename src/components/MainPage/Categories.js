import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Men",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Women",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Sneakers",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Bags",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Jewelry",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Clothing",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Vintage",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Baby",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Exottic",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Casual",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
