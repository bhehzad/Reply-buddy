import React from "react";
const Footer = () => {
    return (
        <>
            <div className=" bg-primary25 py-5  font-lato font-normal text-neutral px-4 md:px-footer center ">
                <div className="container w-full max-w-[1089px] flex 
                items-center  flex-row justify-between m-auto">
                    <h5 className="hidden sm:block text-[14px]" >ReplyBuddy AI 2022 </h5>
                    <h5 className="block sm:hidden text-[12px] small:text-[14px]">© 2022</h5>
                    <div className=''>
                        <h5 className='inline px-1 small:px-2  sm:px-6 text-[12px] small:text-[14px]'>Privacy Policy</h5>
                        <h5 className='inline px-1 small:px-2 sm:px-6 text-[12px] small:text-[14px]'>Terms of use</h5>
                        <h5 className='inline pl-1 small:pl-2 sm:pl-6 text-[12px] small:text-[14px]'>Contact us</h5>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Footer;