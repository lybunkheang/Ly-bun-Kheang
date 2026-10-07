import { useEffect, useRef } from "react";
import animeData from "../data/animeData";

const AnimeTrending = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 5) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: 200, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (

    <>
    <section className="w-full bg-[#0d1117] py-3">
      <div className="relative mx-auto max-w-[1200px]">

        <button type="button" onClick={scrollLeft} className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-xl text-white shadow-lg transition hover:bg-black">
          ‹
        </button>

        <div ref={sliderRef} className="flex gap-4 overflow-x-auto px-12 pb-2 scroll-smooth" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {animeData.map((anime) => (
            <div key={anime.id} className="group relative h-[240px] w-[165px] min-w-[165px] cursor-pointer overflow-hidden rounded-lg bg-gray-800 transition duration-300 hover:-translate-y-1">
              
              <img src={anime.image} alt={anime.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />

              <span className="absolute left-2 top-2 z-10 rounded bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white">
                {anime.episode} [{anime.quality}]
              </span>

              <div className="absolute bottom-3 left-3 right-3 z-10">
                <h3 className="line-clamp-2 text-[14px] font-semibold leading-tight text-white">
                  {anime.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <button type="button" onClick={scrollRight} className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-xl text-white shadow-lg transition hover:bg-black">
          ›
        </button>

      </div>
    </section>
    </>
  );
};

export default AnimeTrending;