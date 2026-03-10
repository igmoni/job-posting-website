import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full flex bg-neutral-50 items-center justify-center">
      <div className="flex bg-white p-8 flex-col rounded-xl shadow-sm gap-5 justify-center items-center text-center">
        <div className="">
          <h2 className="text-xl font-semibold">Welcome to Job Board</h2>
          <p>Sign in to post jobs or apply for opportunities</p>
        </div>

        <button className="flex gap-2 px-4 bg-black hover:bg-neutral-800 text-white border py-2 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
          Continue with Github
        </button>

        <p className="max-w-xs">
          By signing in, you agree to our
          <a>Terms ot Service</a> and <a>Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default page;
