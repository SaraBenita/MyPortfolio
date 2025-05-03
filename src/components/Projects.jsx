import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import stepperImage from '../assets/Stepper.png';  // או .jpg
import safeChat from '../assets/image.png';
import faceBookImage from '../assets/faceBookImage.png';
import bookServer from '../assets/bookServer.png';
import server from '../assets/server.png';
import ECommerce from '../assets/ECommerce.png';
import ChatShield from '../assets/ChatShield.png';

const Projects = () => {
    const projects = [
        {
            title: "Stepper",
            description: "Stepper is a versatile workflow engine that empowers even non-technical users to design and execute operational processes through an intuitive and consistent interface. The system is based on modular, self-contained components called Steps, where each step performs a specific task (such as deleting a file or executing a command). These steps can be linked through defined inputs and outputs to create a Flow, representing a complete process. By combining steps in different ways, users can build dynamic workflows tailored to their needs and automate complex operations with ease.",
            image: stepperImage,
            githubLink: "https://github.com/SaraBenita/Stepper",
            technologies: ["Java", "XML", "JSON", "Multithreading", "HTTP"]
        },
        // Add more projects here...
        {
            title: "SafeChat",
            description: "SafeChat is a full-stack web application developed during the QueenB x AppsFlyer Hackathon 2025 to promote online safety. The app allows users to register, log in, and analyze text in real time to detect potentially harmful or inappropriate content. It features a clean and responsive React (Vite) frontend, a secure Node.js and Express backend, and uses MongoDB to store user data and message history. With real-time feedback, secure authentication, and a personal message log, BeSafe demonstrates the power of modern web technologies to create a safer digital experience.",
            image: safeChat,
            githubLink: "https://github.com/SaraBenita/BeSafeHackathon2025",
            technologies: ["Java Script", "HTML", "CSS", "React (Vite)", "Node.js", "Express", "MongoDB"]
        },
        {
            title: "FaceBook WinForm Application",
            description: "Facebook Desktop App is a C# .NET WinForms application that integrates with the Facebook Graph API to provide a smooth desktop experience for interacting with albums, photos, and user data. Developed as part of two software design assignments, the project emphasizes clean architecture through the use of design patterns such as Proxy, Factory Method, and Singleton. Key features include a mini-game that challenges users to guess when a photo was taken, and a tool to preview and download Facebook albums. The app uses asynchronous programming and data binding to ensure a responsive UI and improved performance. System design is well-documented with UML diagrams (Use Case, Sequence, and Class), highlighting thoughtful planning and scalability.",
            image: faceBookImage,
            githubLink: "https://github.com/SaraBenita/FaceBook_WinForm_Application",
            technologies: ["C# .NET", "Facebook Graph API", "OOP", "Multithreading", "Asynchronous Programming", "WinForms", "Design Patterns", "UML Diagrams"]
        },
        {
            title: "BookInventoryAPI",
            description: "Server Exercise is a Java-based HTTP server application for managing a book inventory system. The project supports full CRUD operations along with advanced features such as multi-criteria filtering (by author, year, price, and genre), input validation, and case-insensitive search. Responses are consistently structured in JSON, ensuring clarity and standardization. Robust error handling and validation mechanisms were implemented to enforce constraints like unique titles and valid year/price ranges. The server was tested using Postman. The project demonstrates backend development skills, including RESTful design, server-side logic, and JSON handling using libraries like Jackson.",
            image: bookServer,
            githubLink: "https://github.com/SaraBenita/Client_Server_Loger_Docker_Cloud_DB_Exercises/tree/master/Server%20Exercise",
            technologies: ["Java", "RESTful API", "JSON", "HTTP", "Postman"]
        },
        {
            title: "HTTP Web Server",
            description: "A lightweight HTTP/1.1 web server built in C++ that supports multiple HTTP methods (GET, POST, HEAD, etc.) and processes concurrent client connections without threads or blocking sockets. It supports multilingual GET responses based on query parameters (Hebrew, English, French), logs POST payloads, and implements robust error handling and timeouts. The server was tested with tools like Wireshark, Telnet, and web browsers to ensure protocol compliance. The core technologies include non-blocking socket programming and RFC 2616-compliant HTTP parsing.",
            image: server,
            githubLink: "https://github.com/SaraBenita/Client_Server_In_Cpp/tree/master/%E2%80%8F%E2%80%8Fassignment%203",
            technologies: ["C++", "Socket Programming", "HTTP/1.1", "Wireshark", "Postman"]
        },
        {
            title: "Serverless E-Commerce Web App",
            description: "A fully client-side, serverless e-commerce web application that allows buyers and sellers to interact on a single platform. Built using HTML, CSS, JavaScript, and local storage, the system supports user registration/login, product browsing, cart management, and seller dashboards. Buyers can add products to their cart and simulate a purchase, while sellers can manage and track their products and sales. The app uses browser-based local storage for data persistence and runs entirely without a backend server.",
            image: ECommerce,
            githubLink: "https://github.com/SaraBenita/e-commerce_Serverless_FrontProj",
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Local Storage"]
        },
        {
            title: "ChatShield",
            description: "As part of our final year computer science project, we’re developing a Chrome extension that enhances user privacy on WhatsApp Web. The extension automatically scans outgoing messages and alerts users when potentially sensitive or private content is detected before it’s sent. The system combines client-side JavaScript with a Node.js backend and integrates NLP models from HuggingFace for real-time message analysis. We're currently advancing the detection capabilities by adopting a hybrid architecture that merges multiple NLP models and fine-tunes them using real-world conversational data to improve accuracy and reduce false positives.",
            image: ChatShield,
            githubLink: "https://github.com/SaraBenita/ChatShieldProject/tree/master",
            technologies: ["HTML", "CSS", "JavaScript", "Python", "Node.js", "NLP", "HuggingFace"]
        }
    ];

    return (
        <section id="projects" className="py-20 bg-primary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                        My Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                {...project}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;