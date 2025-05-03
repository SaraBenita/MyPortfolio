import { motion } from 'framer-motion';
import profileImage from '../assets/profilePic.jpeg';  // הוסף שורה זו
import { Link } from 'react-scroll';


const Hero = () => {
    return (
        <section id="home" className="h-screen flex items-center bg-primary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Text Content */}
                    <motion.div
                        className="w-full md:w-1/2 text-white"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Hi, I'm <span className="text-secondary">Sara Benita</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl mb-6 text-secondary">
                            Software Developer
                        </h2>
                        <p className="text-lg mb-8 text-gray-300">
                            Building backend systems and full-stack applications.
                            Specialized in Java, C#, and modern web technologies.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-opacity-80"
                            >
                                View Projects
                            </Link>
                            <Link
                                to="footer"
                                smooth={true}
                                duration={500}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors"
                            >
                                Contact Me
                            </Link>

                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 rounded-full bg-secondary opacity-20 blur-xl"></div>
                            <img
                                src={profileImage}
                                alt="Sara Benita"
                                className="w-full h-full rounded-full object-cover relative z-10 shadow-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;