import React from "react";
import "../index.css";

function Facts() {
  return (
    <>
      <div className="bg-primary25 mt-8 py-10 query:py-20">
        <div className="container max-w-7xl mx-auto mt-0 px-4 md:px-0">
          <div className="mx-auto  text-center">
            <span className="text-neutral text-[14px] font-normal font-lato mx-auto py-1.5 px-3 bg-white rounded">
              Some facts
            </span>
          </div>

          <h1 className="font-latosemibold text-center text-neutral900  pt-4 text-[32px] sm:text-[2.25rem] leading-[125%]">
            Why replying to reviews is important
          </h1>

          {/* statistics */}
          <div className="statistics mx-auto max-w-screen-spacer bg-white py-[18px] px-[24px] rounded rounded-t-2xl mt-10 flex justify-between items-center">
            <div className="content flex flex-col query:flex-row justify-between w-full">
              <div className="w-full query:w-[272px] flex flex-col border-b-[1px] border-solid border-neutral200 query:border-b-[0px] query:border-r-[1px] query:border-dotted query:border-neutral200 pt-0 pb-7 query:pt-0 query:pb-0 query:px-0 query:pr-8">
                <div className="main flex items-center">
                  <h1 className="font-lato text-center text-primary font-bold  text-[36px]">
                    70%
                  </h1>
                  <p className="font-lato text-neutral font-normal text-base leading-6 pl-[18px]">
                    Reviews updated if replied to
                  </p>
                </div>
                <h3 className="font-lato text-primaryvarient text-right font-medium text-[14px] leading-[17.5px] pt-3">
                  — Google I/O 2019
                </h3>
              </div>

              {/* 2nd-column */}

              <div className="w-full query:w-[247px] flex flex-col 
              border-b-[1px] border-solid border-neutral200 query:border-b-[0px] query:border-r-[1px] query:border-dotted query:border-neutral200 query:ml-[1.9rem] pt-8 pb-6 query:pt-0 query:pb-0 query:px-0 query:pr-[1.8rem]">
                <div className="main flex items-center">
                  <h1 className="font-lato text-center text-primary font-bold text-[2.25rem] query:pl-[0.2rem]">
                    53%
                  </h1>
                  <p className="font-lato text-neutral font-normal text-base leading-6 pl-[18px]">
                    Expect replies to reviews
                  </p>
                </div>
                <h3 className="font-lato text-primaryvarient text-right font-medium text-[14px] leading-[17.5px] pt-3 query:pr-0">
                  — ReviewTrackers Review 2022
                </h3>
              </div>

              {/* 3rd column  */}
              <div className="w-full query:w-[277px] flex flex-col query:ml-[1.9rem] pt-8 pb-0 query:pt-0 query:pb-0 query:px-0">
                <div className="main flex items-center query:justify-end">
                  <h1 className="font-lato text-center text-primary font-bold text-[2.25rem]">
                    33%
                  </h1>
                  <p className="font-lato text-neutral font-normal text-base leading-6 pl-[18px]">
                    Higher purchase rate if painpoints addressed
                  </p>
                </div>
                <h3 className="font-lato text-primaryvarient text-right font-medium text-[14px] leading-[17.5px] pt-3">
                  — Harvard business review 2021
                </h3>
              </div>
            </div>
          </div>
        </div>

        <img src="../images/Arrow.png" alt="item2" className="mx-auto mb-4 mt-6"  />

        <div className="container max-w-7xl mx-auto px-4 md:px-4">
          <h1 className="font-latosemibold text-center text-black  text-[32px] sm:text-[2.25rem] px-4">
            We simplify reviews replying process
          </h1>

          <p className="text-center font-lato text-neutral font-normal text-[16px] mt-5  px-4">
            Use the power of the most advanced Artificial Intelligency language
            model to optimize your workflow
          </p>

          <div className="w-[114%] custom:max-w-[400px] tablet:max-w-[468px] -ml-6 custom:ml-auto mx-auto flex flex-row mt-12 justify-between ">
            <div className="box w-[128px] text-center flex flex-col items-center">
                <img src="../images/Icon-1.png" alt="item2" className="mx-5 w-20 tablet:w-[88px]" />
                <h3 className="font-lato text-[14px] tablet:text-[16px] mt-6 text-center text-neutral px-5">Reduced Time & Cost</h3>
            </div>

            <div className="box w-[160px] text-center flex flex-col items-center">
                <img src="../images/icon-2.png" alt="item2" className="mx-8 w-20 tablet:w-[88px]" />
                <h3 className="font-lato text-[14px] tablet:text-[16px] mt-6 text-center text-neutral px-5">Reviews Insights In Real Time</h3>
            </div>

            <div className="box w-[128px] text-center flex flex-col items-center ">
                <img src="../images/icon-3.png" alt="item2" className="mx-5 w-20 tablet:w-[88px]" />
                <h3 className="font-lato text-[14px] tablet:text-[16px] mt-6 text-center text-neutral  px-5">Personalized Responses</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Facts;
