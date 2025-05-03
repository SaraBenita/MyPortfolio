import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if the device is mobile
        const checkMobile = () => {
            setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handlePhoneClick = (e) => {
        if (!isMobile) {
            e.preventDefault();
        }
    };

    return (
        <footer id="footer" className="bg-tertiary py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center">
                    {/* Contact Info */}
                    <div className="flex items-center space-x-6">
                        <a
                            href="mailto:sara63101@gmail.com"
                            className="text-gray-300 hover:text-secondary transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiMail className="text-2xl" />
                        </a>
                        <a
                            href="https://github.com/SaraBenita"
                            className="text-gray-300 hover:text-secondary transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="text-2xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sarabenita"
                            className="text-gray-300 hover:text-secondary transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="text-2xl" />
                        </a>
                        {isMobile ? (
                            <a
                                href="tel:052-2408870"
                                className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                            >
                                <BsTelephone className="text-2xl" />
                                <span>052-2408870</span>
                            </a>
                        ) : (
                            <div className="text-gray-300 flex items-center gap-2">
                                <BsTelephone className="text-2xl" />
                                <span>052-2408870</span>
                            </div>
                        )}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-300 mb-4 mt-4">
                        © 2025 Sara Benita. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;