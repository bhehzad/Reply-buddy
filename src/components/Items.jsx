import React from "react";
import "../index.css";

function Items() {
  return (
    <>
      <div className="container max-w-7xl mx-auto mt-12">
        <div className="py-4 flex items-center justify-center flex-col md:flex-row">
            <div className="available flex items-center justify-center flex-col mb-6 md:mb-0">
                <div className="images flex flex-row">
                    <img src="../images/item-1.png" alt="item1" className="mr-4 w-14 h-14 md:w-20 md:h-20"/>
                    <img src="../images/item-2.png" alt="item2" className="w-14 h-14 md:w-20 md:h-20" />
                </div>
                <div className="text">
                    <h5 className="font-lato text-base font-normal text-neutral mt-3">Available</h5>
                </div>
            </div>

            {/* comin soon  */}
            <div className="available flex items-center justify-center flex-col ml-0 md:ml-16">
                <div className="images flex flex-row">
                    <img src="../images/item-3.png" alt="item1" className="mr-4 w-14 h-14 md:w-20 md:h-20"/>
                    <img src="../images/item-4.png" alt="item2" className="mr-4 w-14 h-14 md:w-20 md:h-20"/>
                    <img src="../images/item-5.png" alt="item2" className="mr-4 w-14 h-14 md:w-20 md:h-20"/>
                    <img src="../images/item-6.png" alt="item2" className="w-14 h-14 md:w-20 md:h-20" />
                </div>
                <div className="text">
                    <h5 className="font-lato text-base font-normal text-neutral mt-3">Comming Soon</h5>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Items;
