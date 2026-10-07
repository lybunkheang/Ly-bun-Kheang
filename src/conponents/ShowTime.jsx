import { showtimes, showtimeMovies } from "../data/showtime";
function ShowTime() {
    return (
        <>
            <section className="w-full bg-[#101722] px-4 py-4">
                <div className="mx-auto max-w-[1200px]">

                    <h2 className="mb-3 text-[16px] font-bold text-[#63e4dc]">
                        Showtimes
                    </h2>

                    {/* Mon - Sun */}
                    <div className="mb-4 flex gap-2 overflow-x-auto">
                        {showtimes.map((showtime, index) => (
                            <button
                                key={showtime.id}
                                type="button"
                                className={`min-w-[85px] rounded-md px-3 py-2 text-[11px] transition ${index === 0
                                        ? "bg-[#63e4dc] font-bold text-[#101722]"
                                        : "bg-[#292f3a] text-gray-300 hover:bg-[#343b48] hover:text-white"
                                    }`}
                            >
                                <div>{showtime.day}</div>

                                <div className="mt-1 text-[9px] opacity-70">
                                    {showtime.date}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* 10 Card */}
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {showtimeMovies.map((movie) => (
                            <div
                                key={movie.id}
                                className="group overflow-hidden rounded-md bg-[#292d34]"
                            >
                                {/* Poster */}
                                <div className="relative aspect-2/3 overflow-hidden">
                                    <img
                                        src={movie.image}
                                        alt={movie.title}
                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                    />

                                    {/*Showtimes */}
                                    <span className="absolute left-1 top-1 rounded bg-[#f36b2b] px-1.5 py-1 text-[9px] font-bold leading-none text-white">
                                        {movie.time}
                                    </span>

                                    {/* SUB */}
                                    <span className="absolute bottom-0 left-1 rounded-t-sm bg-[#72e6de] px-1 py-[3px] text-[8px] font-bold leading-none text-[#111827]">
                                        Subtitle
                                    </span>
                                </div>

                                {/* Name Movie */}
                                <div className="px-2 py-2">
                                    <h3 className="truncate text-[11px] font-medium text-white">
                                        {movie.title}
                                    </h3>

                                    <p className="mt-1 truncate text-[10px] text-gray-400">
                                        {movie.episode}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>





        </>
    )
}

export default ShowTime