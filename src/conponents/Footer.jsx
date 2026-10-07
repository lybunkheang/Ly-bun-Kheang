function Footer() {
    return (
        <footer className="w-full bg-[#101722] text-white">
            <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-5">

                {/* LOGO */}
                <div className="mb-5">
                    <span className="text-[20px] font-bold">
                        <span className="text-[#4da3e8]">
                            KHEANG.MOVIE
                        </span>
                    </span>
                </div>

                {/* LINE */}
                <div className="mb-5 h-px w-full bg-[#303642]" />

                {/* CONTENT */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    {/* LEFT */}
                    <div className="flex flex-col gap-3">

                        <p className="text-[10px] text-gray-300 sm:text-[11px]">
                            <span className="text-white">
                                KHEANG.MOVIE
                            </span>

                            {" | "}

                            <span className="text-white">
                                Chinese Animation Movies with English Subtitles
                            </span>
                        </p>

                        <p className="text-[9px] text-gray-500 sm:text-[10px]">
                            © KHEANG.MOVIE | Chinese Animation Movies with
                            English Subtitles 2024-2026. All rights reserved.
                        </p>

                    </div>

                    {/* RIGHT */}
                    <div className="text-left md:text-right">
                        <p className="text-[10px] text-gray-200 sm:text-[11px]">
                            Contact Telegram:
                            <span className="text-white">
                                {" "}@kheang123
                            </span>

                            {", "}

                            Signal:
                            <span className="text-white">
                                {" "}@kheang123
                            </span>
                        </p>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;