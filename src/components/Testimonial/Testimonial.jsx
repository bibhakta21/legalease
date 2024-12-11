import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "Sumina",
    text: "This chatbot helped me understand my constitutional rights clearly and quickly. It’s like having a lawyer available 24/7!",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Ashish",
    text: "I was able to get accurate legal advice in minutes. The chatbot is incredibly user-friendly and provides trustworthy information.",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Salina",
    text: "This service saved me a lot of time and effort. The responses were informative, and I felt confident in the legal information provided.",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 4,
    name: "Sajala",
    text: "I love how easy it is to get legal help without scheduling an appointment. This chatbot is a game changer for anyone needing legal advice.",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
];

const Testimonial = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            OUR TESTIMONIALS
          </h1>
          <p className="font-semibold text-3xl">
            What Users Say About Our Legal Chatbot
          </p>
        </div>
        {/* Testimonial cards section */}
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                    {/* upper section */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-black/80">
                          {item.name}
                        </p>
                        <p>{item.name}</p>
                      </div>
                    </div>
                    {/* bottom section */}
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-500">{item.text}</p>
                      <p>⭐⭐⭐⭐⭐</p>
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

export default Testimonial;
