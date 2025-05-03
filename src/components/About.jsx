import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-primary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                        About Me
                    </h2>

                    <div className="max-w-3xl mx-auto">
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I'm a passionate and driven Software Developer with hands-on experience
                            in building backend and full-stack systems using Java, C#, Spring Boot,
                            and the .NET Framework.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            My background in Unit 8200 equipped me with strong analytical skills,
                            real-time problem-solving capabilities, and the ability to manage complex
                            technological systems under pressure.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Later, as an Application Engineer, I focused on data integration,
                            system optimization, and cross-functional collaboration with R&D teams.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Currently pursuing a B.Sc. in Computer Science at The Academic College
                            of Tel Aviv-Yaffo, I bring a proactive mindset, quick learning abilities,
                            and a strong foundation in software development and system design.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;