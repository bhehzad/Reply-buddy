import React from "react";
import "../index.css";
import "../App.css";

function Reviewsupdate() {
  return (
      <>
        <div className="bg-primary25 mt-top py-20 px-4 md:px-14">
          <div className="container max-w-[1089px] mx-auto">
            <div className="mx-auto text-center md:text-left">
              <span className="text-neutral text-sm font-normal mr-8 font-lato mx-auto py-1.5 px-3 bg-white rounded text-[14px]">
                Reviews
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center mt-6 justify-center md:justify-start">
              <h1 className="font-latosemibold text-center text-neutral900 text-[32px] md:text-[36px] leading-[45px]">
                What our clients think
              </h1>

              <div className="text-center rounded mt-6 md:my-0 md:ml-8">
                <a
                  href="#"
                  className="text-xs leading-none border rounded text-white bg-primary font-lato font-normal flex w-[10.75rem] h-[2.0625rem] items-center justify-center mx-auto"
                >
                  <span className="text-[0.875rem] leading-4">
                    Get Chrome Extension
                  </span>
                </a>
              </div>
            </div>
            <div className="relative">
            <div className="grad h-24 md:h-16 z-50 w-full absolute bottom-0"></div>
            {/* reviews  */}
            <div className="reviews mt-5 flex flex-col review:flex-row relative overflow-y-auto overflow-x-hidden h-[40em]">
              
              <div className="w-[100%] review:w-[21.687rem] md:flex review:flex-col review:w-[100%]">
                <div className="flex flex-col">
                <div className="box p-6 flex flex-col rounded-lg bg-white mt-6">
                  <div className="info flex flex-row">
                    <img src="../images/review-img.png" alt="item2" className="w-10 h-10 rounded-[50%]" />
                    <div className="flex flex-col pl-3">
                      <h3 className="text-[1rem] text-black font-lato font-semibold leading-[19.2px]">
                        Name Surname
                      </h3>
                      <p className="text-[14px] text-neutral font-lato font-normal pt-1.5">
                        CTO
                      </p>
                    </div>
                  </div>
                  <p className="font-lato font-normal leading-[24px] text-neutral700 pt-[18px]">"We love ReplyBuddy.ai! We can reply to reviews way faster and even more personalized than before. Highly recommended!" We can make the review shorter if it is needed. </p>
                </div>

                {/* 2nd box  */}
                <div className="box p-6 flex flex-col rounded-lg bg-white mt-6">
                  <div className="info flex flex-row">
                    <img src="../images/review-img.png" alt="item2" className="w-10 h-10 rounded-[50%]" />
                    <div className="flex flex-col pl-3">
                      <h3 className="text-[1rem] text-black font-lato font-semibold leading-[19.2px]">
                        Name Surname
                      </h3>
                      <p className="text-[14px] text-neutral font-lato font-normal pt-1.5">
                        CTO
                      </p>
                    </div>
                  </div>
                  <p className="font-lato font-normal leading-[24px] text-neutral700 pt-[18px]">"We love ReplyBuddy.ai! </p>
                </div>
                </div>

                {/* 3rd box */}
                <div className="flex flex-col md:flex-col-reverse review:flex-col md:ml-6">
                <div className="box p-6 flex flex-col rounded-lg bg-white mt-6">
                  <div className="info flex flex-row">
                    <img src="../images/review-img.png" alt="item2" className="w-10 h-10 rounded-[50%]" />
                    <div className="flex flex-col pl-3">
                      <h3 className="text-[1rem] text-black font-lato font-semibold leading-[19.2px]">
                        Name Surname
                      </h3>
                      <p className="text-[14px] text-neutral font-lato font-normal pt-1.5">
                        CTO
                      </p>
                    </div>
                  </div>
                  <p className="font-lato font-normal leading-[24px] text-neutral700 pt-[18px]">"We love ReplyBuddy.ai! We can reply to reviews way faster and even more personalized than before. Highly recommended!" We can make the review shorter if it is needed. </p>
                </div>

                {/* 4th box  */}
                <div className="box p-6 flex flex-col rounded-lg bg-white mt-6">
                  <div className="info flex flex-row">
                    <img src="../images/review-img.png" alt="item2" className="w-10 h-10 rounded-[50%]" />
                    <div className="flex flex-col pl-3">
                      <h3 className="text-[1rem] text-black font-lato font-semibold leading-[19.2px]">
                        Name Surname
                      </h3>
                      <p className="text-[14px] text-neutral font-lato font-normal pt-1.5">
                        CTO
                      </p>
                    </div>
                  </div>
                  <p className="font-lato font-normal leading-[24px] text-neutral700 pt-[18px]">"We love ReplyBuddy.ai! </p>
                </div>
                </div>

              </div>

              {/* 2nd col  */}
              <div className="w-[100%] review:w-[21.687rem] md:flex review:flex-col review:w-[100%]">
                <div className="flex flex-col review:flex-col-reverse">
                <div className="box p-6 flex flex-col rounded-lg bg-white mt-6 review:ml-6">
                  <div className="info flex flex-row">
                    <img src="../images/review-img.png" alt="item2" className="w-10 h-10 rounded-[50%]" />
                    <div className="flex flex-col pl-3">
                      <h3 className="text-[1rem] text-black font-lato font-semibold leading-[19.2px]">
                        Name Surname
                      </h3>
                      <p className="text-[14px] text-neutral font-lato font-normal pt-1.5">
                        CTO
                      </p>
                    </div>
                  </div>
                  <p className="font-lato font-normal leading-[24px] text-neutral700 pt-[18px]">"We love ReplyBuddy.ai! We can reply to reviews way faster and even more personalized than before. Highly recommended!" We can make the review shorter if it is needed. </p>
                </div>

                {/* 2nd box  */}
                <div className="box p-6 flex flex-col rounded-lg bg-white mt-6 review:ml-6">
                  <div className="info flex flex-row">
                    <img src="../images/review-img.png" alt="item2" className="w-10 h-10 rounded-[50%]" />
                    <div className="flex flex-col pl-3">
                      <h3 className="text-[1rem] text-black font-lato font-semibold leading-[19.2px]">
                        Name Surname
                      </h3>
                      <p className="text-[14px] text-neutral font-lato font-normal pt-1.5">
                        CTO
                      </p>
                    </div>
                  </div>
                  <p className="font-lato font-normal leading-[24px] text-neutral700 pt-[18px]">"We love ReplyBuddy.ai! </p>
                </div>
                </div>

                {/* 3rd box */}
                <div className="flex flex-col md:flex-col-reverse review:flex-col-reverse md:ml-6">
                <div className="box p-6 flex flex-col rounded-lg bg-white mt-6">
                  <div className="info flex flex-row">
                    <img src="../images/review-img.png" alt="item2" className="w-10 h-10 rounded-[50%]" />
                    <div className="flex flex-col pl-3">
                      <h3 className="text-[1rem] text-black font-lato font-semibold leading-[19.2px]">
                        Name Surname
                      </h3>
                      <p className="text-[14px] text-neutral font-lato font-normal pt-1.5">
                        CTO
                      </p>
                    </div>
                  </div>
                  <p className="font-lato font-normal leading-[24px] text-neutral700 pt-[18px]">"We love ReplyBuddy.ai! We can reply to reviews way faster and even more personalized than before. Highly recommended!" We can make the review shorter if it is needed. </p>
                </div>

                {/* 4th box  */}
                <div className="box p-6 flex flex-col rounded-lg bg-white mt-6">
                  <div className="info flex flex-row">
                    <img src="../images/review-img.png" alt="item2" className="w-10 h-10 rounded-[50%]" />
                    <div className="flex flex-col pl-3">
                      <h3 className="text-[1rem] text-black font-lato font-semibold leading-[19.2px]">
                        Name Surname
                      </h3>
                      <p className="text-[14px] text-neutral font-lato font-normal pt-1.5">
                        CTO
                      </p>
                    </div>
                  </div>
                  <p className="font-lato font-normal leading-[24px] text-neutral700 pt-[18px]">"We love ReplyBuddy.ai! </p>
                </div>
                </div>

              </div>


              {/* 3nd col  */}
              <div className="w-[100%] review:w-[21.687rem] md:flex review:flex-col review:w-[100%]">
                <div className="flex flex-col review:ml-6">
                <div className="box p-6 flex flex-col rounded-lg bg-white mt-6">
                  <div className="info flex flex-row">
                    <img src="../images/review-img.png" alt="item2" className="w-10 h-10 rounded-[50%]" />
                    <div className="flex flex-col pl-3">
                      <h3 className="text-[1rem] text-black font-lato font-semibold leading-[19.2px]">
                        Name Surname
                      </h3>
                      <p className="text-[14px] text-neutral font-lato font-normal pt-1.5">
                        CTO
                      </p>
                    </div>
                  </div>
                  <p className="font-lato font-normal leading-[24px] text-neutral700 pt-[18px]">"We love ReplyBuddy.ai! We can reply to reviews way faster and even more personalized than before. Highly recommended!" We can make the review shorter if it is needed. </p>
                </div>

                {/* 2nd box  */}
                <div className="box p-6 flex flex-col rounded-lg bg-white mt-6">
                  <div className="info flex flex-row">
                    <img src="../images/review-img.png" alt="item2" className="w-10 h-10 rounded-[50%]" />
                    <div className="flex flex-col pl-3">
                      <h3 className="text-[1rem] text-black font-lato font-semibold leading-[19.2px]">
                        Name Surname
                      </h3>
                      <p className="text-[14px] text-neutral font-lato font-normal pt-1.5">
                        CTO
                      </p>
                    </div>
                  </div>
                  <p className="font-lato font-normal leading-[24px] text-neutral700 pt-[18px]">"We love ReplyBuddy.ai! </p>
                </div>
                </div>

                {/* 3rd box */}
                <div className="flex flex-col md:flex-col-reverse review:flex-col md:ml-6">
                <div className="box p-6 flex flex-col rounded-lg bg-white mt-6">
                  <div className="info flex flex-row">
                    <img src="../images/review-img.png" alt="item2" className="w-10 h-10 rounded-[50%]" />
                    <div className="flex flex-col pl-3">
                      <h3 className="text-[1rem] text-black font-lato font-semibold leading-[19.2px]">
                        Name Surname
                      </h3>
                      <p className="text-[14px] text-neutral font-lato font-normal pt-1.5">
                        CTO
                      </p>
                    </div>
                  </div>
                  <p className="font-lato font-normal leading-[24px] text-neutral700 pt-[18px]">"We love ReplyBuddy.ai! We can reply to reviews way faster and even more personalized than before. Highly recommended!" We can make the review shorter if it is needed. </p>
                </div>

                {/* 4th box  */}
                <div className="box p-6 flex flex-col rounded-lg bg-white mt-6">
                  <div className="info flex flex-row">
                    <img src="../images/review-img.png" alt="item2" className="w-10 h-10 rounded-[50%]" />
                    <div className="flex flex-col pl-3">
                      <h3 className="text-[1rem] text-black font-lato font-semibold leading-[19.2px]">
                        Name Surname
                      </h3>
                      <p className="text-[14px] text-neutral font-lato font-normal pt-1.5">
                        CTO
                      </p>
                    </div>
                  </div>
                  <p className="font-lato font-normal leading-[24px] text-neutral700 pt-[18px]">"We love ReplyBuddy.ai! </p>
                </div>
                </div>

              </div>
            </div>
            </div>
            

          </div>
        </div>
      </>
  );
}

export default Reviewsupdate;