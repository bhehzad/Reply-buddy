import React from "react";
import "../index.css";

function Newsletter() {
  return (
    <div className="App">
      <>
        <div className="container w-[90%] max-w-[1089px] mx-auto md:px-0 py-20 ">
          <div className="newsletter query:h-[9.875rem] w-full bg-primary rounded-2xl bg-[url('../public/images/newsletter-bg.png')] bg-cover  query:bg-contain bg-no-repeat  query:bg-rr container-full:bg-right pt-2.37 pb-2.37 query:pt-15 query:pb-bottom px-4 query:px-11 mdscreen:px-leftright items-center">
            <div className="content flex flex-col query:flex-row justify-between query:items-center">
              <h3 className="font-latosemibold text-white text-[20px] mb-4 query:mb-0 leading-6 query:mt-0 pr-4">
                Do you want to be noticed about updates?
              </h3>
              <div className="mail relative">
                <div className="input w-full query:w-[22.75rem] h-[2.56rem] flex items-center  pl-3 bg-white rounded">
                  <h3 className="font-lato text-[14px] font-normal text-neutral500 hidden small:block">Your email address</h3>
                  <h3 className="font-lato text-[12px] font-normal text-neutral500 small:hidden">email</h3>
                </div>
                <div className="rounded border-none absolute top-1 right-1 ">
                <a
                  href="#"
                  className="text-sm leading-none border rounded text-white bg-primary font-lato font-normal flex w-[8.25rem] h-[2.06rem] items-center justify-center border-none"
                >
                  <span className="text-[0.875rem] leading-none">
                  Get Notification
                  </span>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Newsletter;
