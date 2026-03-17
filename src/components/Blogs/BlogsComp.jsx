import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "In India, there are many places to visit, but some of the top places include the Taj Mahal, Jaipur, Kerala, Goa, and Varanasi. The Taj Mahal is a UNESCO World Heritage Site and one of the Seven Wonders of the World. Jaipur is known for its beautiful palaces and forts, while Kerala is famous for its backwaters and houseboats. Goa is a popular beach destination, and Varanasi is a spiritual city located on the banks of the Ganges River.",
    author: "Someone",
    date: "April 22, 2024",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "The United States is a vast country with many incredible places to visit. Some of the top destinations include New York City, Los Angeles, San Francisco, Las Vegas, and Miami. New York City is known for its iconic landmarks such as the Statue of Liberty and Times Square. Los Angeles is famous for Hollywood and its beautiful beaches. San Francisco is home to the Golden Gate Bridge and Alcatraz Island. Las Vegas is known for its vibrant nightlife and casinos, while Miami offers stunning beaches and a vibrant culture.",
    author: "Someone",
    date: "Jan 20, 2024",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Japan is a fascinating country with a rich culture and stunning landscapes. Some of the top destinations include Tokyo, Kyoto, Osaka, Hiroshima, and Okinawa. Tokyo is known for its vibrant city life and amazing food scene. Kyoto is famous for its traditional temples and beautiful gardens. Osaka is a culinary paradise with its street food and vibrant atmosphere. Hiroshima is a city of peace and resilience, while Okinawa offers beautiful beaches and unique cultural experiences.",
    author: "Someone",
    date: "Dec 01, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
