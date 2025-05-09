import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        {
            title: "Backend Development",
            skills: ["Java", "C#", "C++", "C", "Spring Boot", ".NET Framework"]
        },
        {
            title: "Frontend Development",
            skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "PostgreSQL", "SQL"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Git", "Docker", "Postman", "Wireshark", "JavaFX", "WinForms"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-primary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                        Technical Skills
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {skills.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-tertiary p-6 rounded-lg"
                            >
                                <h3 className="text-xl text-white font-semibold mb-4">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-secondary bg-opacity-20 text-white px-3 py-1 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;