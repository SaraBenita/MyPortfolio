import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, githubLink, technologies }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-tertiary rounded-lg overflow-hidden shadow-lg w-full"
        >
            <div className="relative group">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-72 object-cover rounded-lg mb-4"
                />
                <div className="absolute inset-0 bg-secondary bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <FaGithub className="text-4xl hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-secondary bg-opacity-20 text-white px-3 py-1 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;