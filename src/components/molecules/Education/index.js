import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* bsc */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Bsc in CSE
              </h3>

              <p className="text-sm text-neutral font-semibold">2019 - 2023</p>
              <p className="text-sm text-neutral text-justify">
                computer science and engineering result{" "}
                <b>GPA - 3.88 out of 4</b>
              </p>
            </div>
            <p className="text-sm text-neutral text-justify">
              The curriculum was comprehensive and up-to-date, covering
              essential theoretical knowledge and practical skills. The faculty
              members were highly knowledgeable and supportive, always willing
              to help and provide guidance. The university's infrastructure and
              resources were excellent, providing a conducive learning
              environment. Overall, I am grateful for the quality education and
              valuable insights gained during my time at the university.
            </p>
          </div>

          {/*  Developer */}
          <div className="my-6 md:my-4 p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg  hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Phitron Course (Computer Science Fundamentals)
              </h3>

              <p className="text-sm text-neutral text-justify">
                Batch-2 successfully completed  Programming Hero platform
                instructor was Jhanker Mahbub and many more  especially here i have learned problem 1000+ solving DSA,C,C++,Python Networking,Many more
              </p>
            </div>
          </div>

          <div className="my-6 md:my-4 p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg  hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Web development Programming Hero Course
              </h3>

              <p className="text-sm text-neutral text-justify">
                Batch-6 successfully completed web development Programming Hero
                instructor was Jhanker Mahbub. especially its was fornt end
                foucs MERN stack course
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg  hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                ReactJS with Prisma Development Course
              </h3>
              <p className="text-sm text-neutral font-semibold">
                Batch -1 successfully completed from ostad platform instructor
                was Rabbil hasan Rupom and Sumit Saha
              </p>
            </div>
          </div>

          <div className="p-6 mt-4 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg  hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">MERN-5 stack Ostad Course</h3>
              <p className="text-sm text-neutral font-semibold">
                MERN Batch -5 successfully completed from ostad platform instructor
                was Rabbil hasan Rupom.
              </p>
            </div>

          </div>

          <div className="p-6 mt-4 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg  hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">Reactive Accelerator Course lws</h3>
              <p className="text-sm text-neutral font-semibold">
                Batch-1 successfully completed from ostad platform instructor
                was Sumit saha owner of learn with sumit saha platform
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Education;
