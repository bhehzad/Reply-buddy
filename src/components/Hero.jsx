import React from "react";
import "../index.css";
import "../App.css";

function Hero() {
  return (
    <>
      <div className="container max-w-[82rem] mx-auto mt-12">
        <div className="mx-auto  text-center">
          <span className="text-neutral text-[14px] font-normal font-lato mx-auto py-1.5 px-3 bg-neutral50 rounded">
            Hey, buddy!
          </span>
        </div>

        <div className="heading text-center mt-3 laptop:px-[15.5rem] md:px-32 px-4">
          <h1 className="font-lato text-[32px] sm:text-4xl  text-primary font-bold leading-[125%] mt-[18px] hidden desktop:block">
            AI writing assistant <span className="text-black">to respond </span><br></br>
            customer reviews
          </h1>
          <h1 className="font-lato text-[32px] sm:text-4xl  text-primary font-bold leading-[125%] mt-[18px] desktop:hidden">
          Reply to <span className="text-black">your customer <br></br></span>
          reviews with AI
          </h1>

          <p className="text-[14px] font-lato text-center sm:text-[18px] font-normal text-neutral px-0 mt-4 leading-7">
            For today's customers, trust is king. That's why we go<br className="hidden tablet:block" /> further to
            help you genuinely reply to reviews
          </p>
        </div>

        {/* button  */}
        <div className="mt-[1.95rem] mx-auto text-center rounded-md">
          <a
            href="#"
            className="text-xs leading-none rounded text-white bg-primary font-lato font-normal flex w-[10.75rem] h-[2.06rem] items-center justify-center mx-auto"
          >
            <span className='text-[0.875rem] leading-none'>Get Chrome Extension</span>
          </a>
        </div>

        <div className="bg-[url('../public/images/Decor-group.png')] bg-cover bg-no-repeat bg-center text-center mx-auto h-[19.8rem] md:h-[37.3rem] medium:h-[37.8rem] mt-[-3.5rem] sm:-mt-8 md:-mt-20 background-hero">
          <div className="img relative h-96 max-w-3xl mx-auto pt-24 md:pt-[9.5rem] medium:pt-[9.7rem]">
            <iframe
              width="720"
              height="400"
              src="https://www.youtube.com/embed/c70J0rw-JAk"
              className="rounded-lg center mx-auto h-[12rem]  md:h-[25rem] w-[21.43rem] md:w-[45rem]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
