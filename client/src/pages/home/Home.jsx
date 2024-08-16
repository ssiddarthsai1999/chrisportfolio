import React from 'react'

function Home() {
  return (
      <div className="bg-white h-screen flex items-center justify-center">
          <div className=" align-middle flex mx-auto  gap-24">
              <div className="flex flex-col justify-center items-center align-middle ">
                  <img
                      className="w-[500px] h-[500px] rounded-full object-cover"
                      src="https://upload.wikimedia.org/wikipedia/commons/2/22/The_International_2018_%2829274193217%29.jpg"
                      alt=""
                  />
                  <h1 className="font-bold text-[40px] border-b-2 border-black pb-2 mt-4">
                      Captain Chris
                  </h1>

                  <h1 className="font-semibold text-[26px] mt-3">
                      Graphic Designer
                  </h1>
              </div>
              <div className="flex flex-col  w-[700px]">
                  <h3 className="font-bold text-[80px]">Hello</h3>
                  <p className="font-semibold text-[30px]">A Bit About Me</p>
                  <h3 className="font-semibold text-[30px] my-4">
                      (12 Years Experience | Creative Graphics Designer |
                      Product Photography | Video editor)
                  </h3>
                  <p className="font-regular text-[22px]">
                      Highly skilled and innovative professional with invaluable
                      hands-on experience in handling several simultaneous
                      creative design projects, multimedia, visual
                      conceptualization, animation, and concept creation. I am
                      equipped with the ability to escalate brand awareness by
                      utilizing skills gained in the creative industry, overcome
                      objections, and build long-term mutually beneficial
                      relationships with vendors and clients.
                  </p>
              </div>
          </div>
      </div>
  );
}

export default Home