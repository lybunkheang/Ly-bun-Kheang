import React from 'react'

function Title() {
  return (
    <>
         {/* CAPTION  */}

    <section className="w-full bg-[#0d1117] px-4 py-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-lg bg-[#171d27] px-5 py-6 text-center">
          <h2 className="text-[18px] font-bold text-[#63e4dc]">
            Welcome, fellow cultivator, to KHEANG.MOVIE
          </h2>

          <p className="mt-2 text-[13px] font-semibold text-white">
            Check in here
          </p>

          <p className="mx-auto mt-1 max-w-[600px] text-[12px] leading-5 text-gray-400">
            Log in to access features such as:{" "}
            <span className="font-medium text-gray-300">
              Cultivation, Favorite Movies, Watch History, Comments
            </span>
            , and more...
          </p>

          <p className="mt-3 text-[12px] text-gray-400">
            Haven't joined yet?{" "}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#63e4dc] transition hover:text-white"
            >
              Sign Up Now
            </a>
          </p>

          <button
            type="button"
            className="mt-4 rounded-full bg-[#63e4dc] px-6 py-2 text-[12px] font-bold text-[#101722] transition hover:bg-[#7ceee7]"
          >
            Check in
          </button>
        </div>
      </div>
    </section>
</>
  )
}

export default Title