import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Most travel agencies show you the world through a bus window. We’d rather help you climb out of it. We started Travellogo because 
            we were tired of Top 10 lists and crowded gift shops.
            We believe travel should be messy, loud, and transformative. 
            We don’t just book hotels; 
            we find the guesthouse where the owner tells the best stories. 
            We don’t just point at monuments; we take you to the back-alley kitchen where the secret sauce is made.

            <b>Why Us?</b>Because we’ve been there, gotten lost, and found something better than the guidebook promised.

            We believe that a perfect trip is a symphony of tiny details—the specific corner table with the sunset view, 
            the private driver who knows the shortcut, and the seamless transition from airport to oasis. 
            You provide the vision; we provide the blueprint and the keys.
          </p>
          <br />
          <p>
            The world doesnt need more tourists; it needs more guests. At Travellogo, we curate journeys that respect the rhythm of 
            the local culture and the pulse of the planet. We’ve vetted every partner and pinned every location to ensure your 
            presence supports local economies and preserves natural beauty. We believe that when you travel right, you dont 
            just see a new place—you help it thrive.

            <b>The Difference:</b> Travel that feels good in the moment and looks good for the future.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
