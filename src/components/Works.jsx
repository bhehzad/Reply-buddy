import React from "react";
import "../index.css";

function Works() {
  return (
    <>
      <div className="container max-w-[871px] mx-auto my-10 query:my-20 px-6 query:px-0">
        <h1 className="font-latosemibold text-center query:text-left text-neutral900 text-[32px] md:text-[2.25rem]">
          How it works
        </h1>

        <div className="mt-16 query:mt-12">
        <div className="img relative ">
            <img src="../images/bg-snaps.png" alt="item2" className="hidden query:block query:ml-[1.7rem] w-[91%]" />
            <div className="flex flex-row  query:absolute query:top-0 -query:left-2">
                <img src="../images/work-1.png" alt="one" className="h-16 w-16" />
                <div className="flex flex-col pl-6">
                    <h3 className="text-[1.37rem] text-purplish font-latosemibold leading-[1.65rem]">Get Chrome Extension</h3>
                    <p className="text-[18px] text-neutral font-lato font-normal pt-3">Add the extension</p>
                </div>
                
            </div>

            <img src="../images/img-work-mob.png" alt="arrow" className="my-6 block query:hidden mx-auto" />


            <div className="flex flex-row query:absolute query:top-32.5 query:left-[26.5rem]">
                <img src="../images/work-2.png" alt="one" className="h-16 w-16" />
                <div className="flex flex-col pl-6">
                    <h3 className="text-[1.37rem] text-purplish font-latosemibold leading-[1.65rem]">Specify app</h3>
                    <p className="text-[18px] text-neutral font-lato font-normal pt-3">Choose your platfrom and provide app's name</p>
                </div>
            </div>
            <img src="../images/img-work-mob.png" alt="arrow" className="my-6 block query:hidden mx-auto" />

            <div className="flex flex-row query:absolute query:top-68 -query:left-6">
                <img src="../images/work-3.png" alt="one" className="h-16 w-16" />
                <div className="flex flex-col pl-6">
                    <h3 className="text-[1.37rem] text-purplish font-latosemibold leading-[1.65rem]">Define scenarios</h3>
                    <p className="text-[18px] text-neutral font-lato font-normal pt-3">Instruct AI how to reply to whom (or use our <br/> default screnarios)</p>
                </div>
            </div>

            <img src="../images/img-work-mob.png" alt="arrow" className="my-6 block query:hidden mx-auto" />
            <div className="flex flex-row query:absolute query:query:top-102 query:query:left-[27rem]">
                <img src="../images/work-4.png" alt="one" className="h-16 w-16" />
                <div className="flex flex-col pl-6">
                    <h3 className="text-[1.37rem] text-purplish font-latosemibold leading-[1.65rem]">Generate Replies</h3>
                    <p className="text-[18px] text-neutral font-lato font-normal pt-3">Get AI-generayed replies and introduce corrections (if necessary)</p>
                </div>
            </div>

            
        </div>
      </div>
      </div>

      
    </>
  );
}

export default Works;
