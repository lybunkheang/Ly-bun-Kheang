import { IoChevronBack } from "react-icons/io5";

function Sidebar({ isOpen, onClose }) {
    const mainMenu = [
        "Home",
        "Recently Updated",
        "3D Animation",
        "2D Animation",
        "4K Animation",
        "AI Animation",
        "Completed",
        "Currently Airing",
        "Movies | OVA",
    ];

    const categories = [
        {
            name: "Fantasy",
            color: "text-[#55b8a8]",
        },
        {
            name: "Time Travel",
            color: "text-[#c8c8c8]",
        },
        {
            name: "Rebirth",
            color: "text-[#e17865]",
        },
        {
            name: "Xianxia",
            color: "text-[#e9a0a0]",
        },
        {
            name: "Historical",
            color: "text-[#5fb9aa]",
        },
        {
            name: "Comedy",
            color: "text-[#c8c8c8]",
        },
        {
            name: "Wuxia",
            color: "text-[#70bda9]",
        },
        {
            name: "Modern",
            color: "text-[#65b7aa]",
        },
    ];

    return (
        <>
            {/* OVERLAY */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 ${
                    isOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
            />

            {/* SIDEBAR */}
            <aside
                className={`fixed left-0 top-0 z-50 h-screen w-[270px] max-w-[80%] overflow-y-auto bg-[#292d33] text-white shadow-2xl transition-transform duration-300 ease-in-out ${
                    isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                }`}
            >

                {/* CLOSE */}
                <div className="flex h-[60px] items-center border-b border-[#353940] px-3">
                    <button
                        onClick={onClose}
                        className="flex items-center gap-1 rounded-full bg-[#555a60] px-2.5 py-1 text-[11px] text-white transition hover:bg-[#666b71]"
                    >
                        <IoChevronBack size={13} />
                        Close
                    </button>
                </div>

                {/* MENU */}
                <nav>
                    {mainMenu.map((item) => (
                        <button
                            key={item}
                            onClick={onClose}
                            className="flex w-full items-center border-b border-[#353940] px-3 py-2.5 text-left text-[12px] font-medium text-gray-200 transition hover:bg-[#343941] hover:text-[#55b8ec]"
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                {/* GENRES */}
                <div className="border-b border-[#353940] px-3 py-3">

                    {/* TITLE */}
                    <h3 className="mb-2 text-[12px] font-bold text-[#55b8a8]">
                        Genres
                    </h3>

                    {/* GENRES LIST */}
                    <div className="grid grid-cols-2 gap-y-2">

                        {categories.map((item) => (
                            <button
                                key={item.name}
                                onClick={onClose}
                                className={`text-left text-[10px] transition hover:text-white ${item.color}`}
                            >
                                {item.name}
                            </button>
                        ))}

                    </div>
                </div>

            </aside>
        </>
    );
}

export default Sidebar;