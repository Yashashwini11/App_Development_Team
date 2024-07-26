import React, { useEffect } from "react";
// import { Container,Row,Col } from "reactstrap";
import CountUp from "react-countup";
import '../../assets/css/About.css';
// import aboutImg from "../../assets/Images/aboutus.png";

const About = () => {
  useEffect(() => {
    console.log("About component rendered");
  }, []);

  return (
    <>
      {/* <section>
        <h1 className="font-bold text-black text-3xl flex justify-center items-center">About Us</h1>
      </section> */}
      <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold mb-2">About Us</h1>
        <div className="flex flex-col items-start w-full px-8">
          <div className="flex flex-col items-start mb-4">
            <div className="flex mb-4">
              <div className="flex flex-col items-center mx-2 text-lg text-black dark:text-white">
                <CountUp start={0} end={100} duration={2.5} suffix="K" />
                <p>Courses Available</p>
              </div>
              <div className="flex flex-col items-center mx-2 text-lg text-black dark:text-white">
                <CountUp start={0} end={200} duration={2.5} />
                <p>Students Enrolled</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mx-2 text-lg text-black dark:text-white">
                <CountUp start={0} end={300} duration={2.5} />
                <p>Active Courses</p>
              </div>
              <div className="flex flex-col items-center mx-2 text-lg text-black dark:text-white">
                <CountUp start={0} end={400} duration={2.5} />
                <p>Graduates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-end p-8">
        <img src="/path/to/your/image.jpg" alt="About Us" className="w-48 h-48 object-cover" />
      </div> */}
    </div>
    </>
  );
};

export default About;





// <section>
    //         <h1 className="font-bold text-black text-3xl flex justify-center items-center mb-7">About Us</h1>
    //   <Container>
    //     <div className="about-container">

    //       <div className="about__content mt-0">
    //         <p>
    //         Welcome to Learners, your premier destination for personalized online education! At Learners, we believe that every student deserves access to high-quality education that fits their unique needs and learning style. 
    //         Our platform is designed to make learning accessible, engaging, and effective for students of all ages and backgrounds.
    //         </p>

    //         <div className="about__counter">
    //           <div className="d-flex gap-5 align-items-center mt-4">
    //             <div className="single-counter">
    //               <span className="counter">
    //                 <CountUp start={0} end={10} duration={10} suffix="K" />
    //               </span>
    //               <p className="counter-title">Courses Available</p>
    //             </div>

    //             <div className="single-counter">
    //               <span className="counter">
    //                 <CountUp start={0} end={5} duration={5} suffix="M" />
    //               </span>
    //               <p className="counter-title">Students</p>
    //             </div>
    //           </div>

    //           <div className="d-flex gap-5 align-items-center">
    //             <div className="single-counter">
    //               <span className="counter">
    //                 <CountUp start={0} end={2} duration={6} suffix="k" />
    //               </span>
    //               <p className="counter-title">Tutors</p>
    //             </div>

    //             {/* <div className="single-counter">
    //               <span className="counter">
    //                 <CountUp start={0} end={5} duration={4} suffix="K" />
    //               </span>
    //               <p className="counter-title">Categories Served</p>
    //             </div> */}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="about__img">
    //         <img src={aboutImg} alt="About Us" />
    //       </div>
    //     </div>
    //   </Container>
    // </section>
//  
