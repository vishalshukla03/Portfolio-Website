
const gradientStyle = {
    background:
        "linear-gradient(to top right, rgb(18, 55, 246), rgb(9, 244, 244))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
};

const projects = [
    {
        title: "PlanWise AI",
        description:
            "An AI-powered task management application with task tracking, reminders, progress monitoring, and an AI assistant.",
        tech: ["Next.js", "React.js", "TypeScript", "MongoDB", "Tailwind CSS", "AI"],
    },
    {
        title: "Personal Portfolio",
        description:
            "A responsive portfolio website showcasing my skills, projects, experience, and contact information.",
        tech: ["React", "Next.js", "JavaScript", "Bootstrap"],
    },
];

const skillGroups = [
    {
        title: "Frontend",
        skills: [
            "React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3",
        ],
    },
    {
        title: "Styling & State",
        skills: [
            "Bootstrap", "Tailwind CSS", "Redux Toolkit", "Context API",
        ],
    },
    {
        title: "Tools & Backend",
        skills: [
            "Git", "GitHub", "REST APIs", "Postman", "Node.js", "MongoDB",
        ],
    },
];

export default function Content() {
    return (
        <main className="bg-black text-light min-vh-100">
            {/* Home Section */}
            <section
                id="Home" className="container min-vh-100 d-flex align-items-center justify-content-center py-5"
            >
                <div className="row justify-content-center w-100">
                    <div className="col-12 col-md-10 col-lg-9 col-xl-8 text-start">

                        <p className="mb-3">
                            Hi there!
                        </p>

                        <h1 className="display-4 fw-bold mb-3">
                            I am{" "}
                            <span style={gradientStyle}>
                                Vishal Shukla
                            </span>.
                        </h1>

                        <h2 className="h3  mb-4">
                            Next.js | React.js Developer
                        </h2>

                        <p className="mb-4">
                            I build responsive, user-friendly web applications using React.js
                            and modern frontend technologies. I enjoy solving problems,
                            creating clean interfaces, and building applications that deliver
                            a great user experience.
                        </p>

                        <div className="d-flex flex-wrap justify-content-start gap-3 mb-4">
                            <a
                                href="#Project"
                                className="btn btn-info btn-lg px-4 fw-semibold"
                            >
                                View Projects
                            </a>

                            <a
                                href="https://drive.google.com/file/d/160G-C7SrbjBKjSG61EOyUy3O9-n28MuU/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-info rounded-4 px-5 py-2 fs-5 fw-medium"
                            >
                                Resume
                            </a>


                        </div>

                        <div className="d-flex flex-wrap justify-content-start gap-2">
                            {[
                                "React.js", "Next.js", "JavaScript", "TypeScript", "Bootstrap",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="badge rounded-pill border border-secondary text-light px-3 py-2"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="About" className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 text-start">
                        <h2 className="display-6 fw-bold mb-4">
                            About <span style={gradientStyle}>Me</span>
                        </h2>

                        <p className="text-secondary fs-5 lh-lg">
                            I am a Frontend Developer with experience in building responsive
                            and scalable web applications. My primary focus is React.js,
                            JavaScript, and modern frontend development. I enjoy transforming
                            ideas into practical web experiences while focusing on clean code,
                            reusable components, performance, and maintainability.
                        </p>

                        <p className="text-secondary fs-5 lh-lg">
                            I am continuously improving my technical skills and building
                            real-world projects to develop better solutions and create
                            meaningful user experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="Project" className="container py-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-10 col-lg-8 text-start">
                        <h2 className="display-6 fw-bold mb-3">
                            My <span style={gradientStyle}>Projects</span>
                        </h2>

                        <p className="text-secondary fs-5">
                            A selection of projects demonstrating my development skills.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center g-4">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="col-12 col-md-10 col-lg-6"
                        >
                            <div className="card bg-dark text-light border-secondary h-100 rounded-4">
                                <div className="card-body p-4 p-lg-5 text-start">
                                    <h3 className="h4 fw-bold mb-3">
                                        {project.title}
                                    </h3>

                                    <p className="text-secondary lh-lg mb-4">
                                        {project.description}
                                    </p>

                                    <div className="d-flex flex-wrap justify-content-start gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="badge rounded-pill border border-secondary text-light px-3 py-2"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section id="Skills" className="container py-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-10 col-lg-8 text-start">
                        <h2 className="display-6 fw-bold mb-3">
                            Technical <span style={gradientStyle}>Skills</span>
                        </h2>

                        <p className="text-secondary fs-5">
                            Technologies and tools I use to build web applications.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center g-4">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="col-12 col-md-6 col-lg-4"
                        >
                            <div className="card bg-dark text-light border-secondary h-100 rounded-4">
                                <div className="card-body p-4 text-start">
                                    <h3 className="h5 fw-bold mb-4">
                                        {group.title}
                                    </h3>

                                    <div className="d-flex flex-wrap justify-content-start gap-2">
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="badge rounded-pill border border-secondary text-light px-3 py-2"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="Contact" className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                        <div className="text-center py-5 px-3">
                            <h2 className="display-6 fw-bold mb-3">
                                Let's <span style={gradientStyle}>Connect</span>
                            </h2>

                            <p className="text-secondary fs-5 lh-lg mb-4">
                                Interested in working together or discussing a project? Feel
                                free to get in touch.
                            </p>

                            <a
                                href="mailto:vishal98shukla@gmail.com"
                                className="btn btn-info btn-lg px-5 rounded-3 fw-semibold"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="container border-top border-secondary py-4">
                <div className="text-center">
                    <p className="mb-1 fw-semibold" style={gradientStyle}>
                        Vishal Shukla
                    </p>
                </div>
            </footer>
        </main>
    );
}