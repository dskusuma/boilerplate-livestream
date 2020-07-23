import React from "react";

export default function Screen__LandingPage() {
  return (
    <div className="flex flex-col pt-10 items-center px-3 md:px-0">
      <h2 className="font-source-serif text-lg">The wedding of</h2>
      <h1 className="font-source-serif font-bold text-xl lg:text-3xl">
        Adzhahri Ahmad & Puspa C. Handayani
      </h1>

      <div
        aria-label="video-container"
        className="w-full md:w-2/3 shadow-xl my-3 bg-white p-4 md:p-5"
      >
        <img src={require("../assets/cover.jpeg")} />
      </div>

      <div
        className={`
        w-full md:w-2/3 
        flex flex-col items-center md:flex-row md:justify-between md:items-start 
        border-t-2 border-gray-300 
        mt-4 pt-4 md:mt-5 md:pt-5 md:px-5 mb-10
       `}
      >
        <div className="flex w-3/4 md:w-1/4 items-center justify-center mb-3">
          <img
            className="self-center"
            src={require("../assets/gopay.png")}
            alt="gopay"
          />
        </div>
        <div className="flex flex-col w-3/4 p-3 border rounded">
          <input
            class="appearance-none border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none font-source-serif mb-2"
            id="username"
            type="text"
            placeholder="Nama kamu"
          />
          <textarea
            class="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none font-source-serif"
            id="comment"
            type="text"
            placeholder="Komentar kamu tentang pernikahan ini"
          />

          <button
            class="bg-primary-yellow hover:opacity-75 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4 font-source-serif"
            type="button"
          >
            Kirim Komentar
          </button>
        </div>
      </div>
    </div>
  );
}
