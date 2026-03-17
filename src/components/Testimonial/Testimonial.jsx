import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Smriti Singh",
    text: "I usually hate organized tours because they feel like a school field trip. But WeTravell is different. They handled the boring stuff (transfers, permits, logistics) and left the actual exploring to me. It felt like traveling with a local friend who happens to know all the secret shortcuts. 10/10 would disappear into the mountains with them again.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Ravi Kumar",
    text: "Planning a trip for a family of five is usually a second full-time job. This was the first time I actually felt like I was on vacation too. From the kid-friendly snacks waiting in the van to the 'emergency' late-night pharmacy run the team helped with—they thought of everything before I even realized I needed it.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Mr. Sudesh Sharma",
    text: "I was terrified of navigating a country where I didn't speak the language. WeTravell took all that anxiety away. Having a 24/7 WhatsApp contact gave me so much peace of mind. I went from being scared to leave the airport to bartering at local markets by day three. Thank you for giving me my confidence back!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
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
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              {" "}
              To make customer reviews feel authentic, they shouldnt just say it was good. 
              They need to mention specific problems solved or unexpected moments.
            </p>
          </div>
          {/* testimonial section */}
          <div data-aos="zoom-in" data-aos-duration="300" className="grid grid-cols-1 max-w-[800px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
