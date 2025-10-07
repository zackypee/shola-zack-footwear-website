import React from "react";
import Slider from "react-slick";

const ReviewData = [
  {
    id: 1,
    name: "John Doe",
    review: "Great quality shoes! Highly recommend.",
    img: "/shoe1.jpg",
    rating: 5,
    delay: 0.2,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Very comfortable and stylish.",
    img: "/shoe2.jpg",
    rating: 4,
    delay: 0.5,
  },
  {
    id: 3,
    name: "Alice Johnson",
    review: "Amazing selection and fast shipping.",
    img: "/shoe5.jpg",
    rating: 4,
    delay: 0.8,
  },
];

const Review = () => {
  const setting = {
    dots: true,
    arrows: false, // hide next/prev arrows
    infinite: true, //loop
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024, //768
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, //480
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320, //320
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= count ? "text-teal-500" : "text-gray-300"}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="py-14 mb-10">
      <div className="container px-4 mx-auto">
        {/**Review header */}
        <div className="text-center md:text-left space-y-4 p-6 max-w-[600px] mx-auto mb-6">
         
          <h2 className="text-3xl font-bold mb-4 text-blue-700 text-center">Review</h2>
          <p className="text-3xl font-semibold text-center">What our customers say</p>
        </div>
        {/**Review card */}
        <div>
          <Slider {...setting}>
            {ReviewData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-6 shadow-md mx-4 rounded-xl bg-blue-100">
                    {/** upper section*/}
                    <div className="flex  justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-400"
                      />
                      <div>
                        <p className="text-lg font-bold text-teal-600">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">{item.name}</p>
                      </div>
                    </div>
                    {/**bottom section */}
                    <div className="py-4 space-y-3">
                      <p className="text-sm text-gray-600">{item.review}</p>
                      <div className="text-lg">{renderStars(item.rating)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
