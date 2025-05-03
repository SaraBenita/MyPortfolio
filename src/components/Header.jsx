import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: "Home", link: "home" },
        { title: "About", link: "about" },
        { title: "Skills", link: "skills" },
        { title: "Projects", link: "projects" },
        { title: "Contact", link: "footer" }
    ];

    return (
        <header className="fixed w-full top-0 z-50 bg-primary shadow-lg">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-white text-xl font-bold">Sara Benita Portfolio</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.link}
                                to={item.link}
                                smooth={true}
                                duration={500}
                                className="text-white hover:text-secondary cursor-pointer"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.link}
                                to={item.link}
                                smooth={true}
                                duration={500}
                                className="block py-2 text-white hover:text-secondary"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;