"use client";
import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["400"] })

const LimitedOfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsOpen(true);
    }, 2000);  

    const timer2 = setTimeout(() => {
      setIsOpen(false);
    }, 30000);  

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleSignUp = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);  
  };

  return (
    <div className={`${montserrat.className}`}>
      <div
  className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center ${
    isOpen ? "block" : "hidden"
  }`}
  style={{ zIndex: 9999 }}
>

        <div className="py-5 border border-gray-200 bg-[#F7F7F7] shadow-lg sm:w-[400px] w-[85vw] h-98 flex flex-col justify-center items-center relative px-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 font-light"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="scroll-m-20 mb-3 mt-3 text-1xl font-extrabold tracking-tight lg:text-2xl text-myBlackHead">
            Want 60% Off?
          </h2>
          <p className="scroll-m-20 text-sm font-base tracking-tight text-myBlackPara mb-5">
            Sign up for our newsletter for early access & get 60% off your first
            order, including sale items!
          </p>
          <p className="scroll-m-20 text-sm font-bold tracking-tight text-myBlackHead mb-3">
            What are you shopping for?
          </p>
          <div className="justify-between w-full">
            <label className="flex items-center ml-8 my-1">
              <input type="radio" name="shopping-for" value="men" />
              <span className="ml-2 text-sm">Men</span>
            </label>
            <label className="flex items-center ml-8 my-1">
              <input type="radio" name="shopping-for" value="women" />
              <span className="ml-2 text-sm">Women</span>
            </label>
            <label className="flex items-center ml-8 mb-5">
              <input type="radio" name="shopping-for" value="all" />
              <span className="ml-2 text-sm">All</span>
            </label>
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-[80%] bg-[#F7F7F7] p-2 py-[10px] border border-black mb-2 focus:outline-none focus:ring-myBlackPara/90"
          />
          <button
            onClick={handleSignUp}
            className="bg-slate-800 buttonTwo border border-black hover:bg-transparent text-slate-800 hover:text-slate-900 scroll-m-20 text-xs font-semibold tracking-tight w-[80%]"
          >
            SIGN UP
          </button>
          <p
            onClick={() => setIsOpen(!isOpen)}
            className="text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight underline mt-4"
          >
            No Thanks
          </p>
          <p className="text-myBlackPara scroll-m-20 text-xs font-extralight mt-4 text-center">
            By entering your email address, you agree to Robiz&apos;s <br />
            <span className="underline block mx-auto">private policy</span>
          </p>
        </div>
      </div>

      {/* Conditionally render the alert */}
      {showAlert && (
        <div
          role="alert"
          className="fixed top-20 right-20  bg-green-500 text-white p-4 rounded-xl shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block mr-2 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your Email has been Submitted!</span>
        </div>
      )}
    </div>
  );
};

export default LimitedOfferPopup;
