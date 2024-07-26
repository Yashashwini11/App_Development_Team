import React from "react";
import home from "../../assets/img/home.png";
import {
  GraduationCapIcon,
  ComputerIcon,
  AwardIcon,
  SchoolIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";

const Home = () => {
  return (
    <div className="h-full w-full flex  flex-col justify-center items-start">
      <div className="h-2/5 w-full flex  justify-center items-center">
        <div className="h-full w-1/2">
          <img src={home} alt="noimg" className="h-full w-full" />
        </div>
        <div className="h-full w-1/2 flex justify-center flex-col gap-11 text-3xl font-bold items-start ">
          <p>Bring your goals into focus</p>
          <p>
            SKCT offers online courses and programs that prepare you for every
            career moment{" "}
          </p>
          <Button className="text-xl font-bold">Start Learning</Button>
        </div>
      </div>
      <div className="w-full h-[4vh] flex justify-evenly items-center flex-row bg-slate-600 ">
        <p className="text-primary font-bold">Total Courses 13150 +</p>
        <p className="text-primary font-bold">Total Enrollments 4.4 crore+</p>
        <p className="text-primary font-bold">Total Certifications 30.8 lakh+</p>
      </div>
      <div className="h-2/5 w-full bg-secondary">
        <div className="h-1/8 w-full flex justify-center items-start ">
          <h1 className=" text-3xl">Why SKCT?</h1>
        </div>
        <div className="h-3/4 w-full  grid grid-cols-1 md:grid-cols-4 gap-3 p-7 ">
          <div className=" h-full w-3/4  p-4 text-center  flex justify-center items-center  flex-col  border border-gray-300">
            <GraduationCapIcon className="w-full h-[9vh]" />

            <h1 className="font-bold text-xl">
              {" "}
              Free Course from Top Universities
            </h1>
            <p className=""> Find Free courses from the Best Universities</p>
          </div>
          <div className="w-3/4  p-4 text-center flex justify-center items-center  flex-col border border-gray-300">
            <ComputerIcon className="w-full h-[9vh]" />
            <h1 className="font-bold text-xl text-primary">
              Self-Paced Learning
            </h1>{" "}
            <p className="">Learn at your own pace, Anytime, Anywhere</p>
          </div>
          <div className="w-3/4  p-4 text-center flex justify-center items-center  flex-col  border border-gray-300">
            <AwardIcon className="w-full h-[9vh]" />

            <h1 className="font-bold text-xl">Earn Certifications</h1>
            <p className="">
              {" "}
              Earn Certifications and Recognition from the Top Companies
            </p>
          </div>
          <div className="w-3/4  p-4 text-center flex justify-center items-center  flex-col  border border-gray-300">
            <SchoolIcon className="w-full h-[9vh] gap-8" />
            <h1 className="font-bold text-xl ">Get University Credits</h1>{" "}
            <p className="line-clamp-2">
              {" "}
              Earn University Credits and get them transferred to your degree
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
