import { movies } from "../data/datamovie";

function MainWrapper() {
    return (
        <main className="w-full bg-[#101722] px-4 py-4">
            <div className="mx-auto max-w-[1200px]">

                <h2 className="mb-3 text-[16px] font-bold text-[#63e4dc]">
                    Recently Updated
                </h2>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="group overflow-hidden rounded-md bg-[#292d34]"
                        >
                            <div className="relative aspect-2/3 overflow-hidden">
                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                />

                                <span className="absolute left-1 top-1 rounded bg-[#f36b2b] px-1.5 py-1 text-[9px] font-bold leading-none text-white">
                                    {movie.episode}
                                </span>

                                <span className="absolute bottom-0 left-1 rounded-t-sm bg-[#72e6de] px-1 py-[3px] text-[8px] font-bold leading-none text-[#111827]">
                                    Subtitle
                                </span>
                            </div>

                            <div className="truncate px-2 py-2 text-[11px] text-white">
                                {movie.title}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="mt-4 flex justify-center"><button type="button" className=" w-[1080px] items-center justify-center rounded-full bg-[#292f3a] px-4 py-2 text-[12px] font-medium text-gray-300 transition duration-200 hover:bg-[#343b48] hover:text-white active:scale-[0.99]">View More</button></div>
        </main>

    );
}

export default MainWrapper;