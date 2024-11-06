import React from "react";
import Heading from "./Heading";

const About = () => {
  return (
    <div className="text-black container mx-auto">
      <div className="bg-primary py-10 rounded-2xl">
        <Heading
          title="Testimonials"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div className="card-actions flex flex-col justify-center">
              <h2 className="text-xl font-bold">Name: Alex Johnson</h2>
              
              <h4 className="text-lg font-semibold">Rating : 4.5</h4>
              <p>
                Review: Great products and fast delivery! I am extremely
                satisfied with my new smartphone and accessories.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div className="card-actions flex flex-col justify-center">
              <h2 className="text-xl font-bold">Name: Samantha Lee</h2>
              
              <h4 className="text-lg font-semibold">Rating : 4.8</h4>
              <p>
                Review: Wide selection and great prices. The customer service was really helpful when I had questions.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div className="card-actions flex flex-col justify-center">
              <h2 className="text-xl font-bold">Name: Michael Brown</h2>
              
              <h4 className="text-lg font-semibold">Rating : 4.5</h4>
              <p>
                Review: Exceptional quality and prompt delivery. I will definitely shop here again!
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div className="card-actions flex flex-col justify-center">
              <h2 className="text-xl font-bold">Name: Rahim Hossain</h2>
              
              <h4 className="text-lg font-semibold">Rating : 4.9</h4>
              <p>
                Review: The quality of the gadgets is excellent, and delivery was very fast. I am completely satisfied.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div className="card-actions flex flex-col justify-center">
              <h2 className="text-xl font-bold">Name: Lima Akter</h2>
              
              <h4 className="text-lg font-semibold">Rating : 4.5</h4>
              <p>
                Review: Great quality and beautiful products. The delivery was quick, and I'm happy with my purchase.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div className="card-actions flex flex-col justify-center">
              <h2 className="text-xl font-bold">Name: Asif Mahmud</h2>
              
              <h4 className="text-lg font-semibold">Rating : 4.5</h4>
              <p>
                Review: This was my first order through this website, and I had a fantastic experience.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div className="card-actions flex flex-col justify-center">
              <h2 className="text-xl font-bold">Name: Alex Johnson</h2>
              
              <h4 className="text-lg font-semibold">Rating : 4.5</h4>
              <p>
                Review: Great products and fast delivery! I am extremely
                satisfied with my new smartphone and accessories.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default About;
