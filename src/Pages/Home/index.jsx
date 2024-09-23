import { NavLink, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const projects = [
    {
      category: "react",
      name: "Tasks",
      explanation: (
        <p>
          This is a -Tasks- project and was done using{" "}
          <span className="bg-blue-600 bg-opacity-20 text-blue-500 rounded-md px-1.5 py-0.5">
            react
          </span>
          .
        </p>
      ),
      url: "/tasks",
      img_src: "/img/tasks.png",
      id: "bhy001",
    },
    {
      category: "react",
      name: "Social-Media",
      explanation: (
        <p>
          This is a -Social-Media- project and was done using{" "}
          <span className="bg-blue-600 bg-opacity-20 text-blue-500 rounded-md px-1.5 py-0.5">
            react
          </span>
          .
        </p>
      ),
      url: "/social-media",
      img_src: "/img/social-media.png",
      id: "bhy002",
    },
    {
      category: "react",
      name: "QR Code Generator",
      explanation: (
        <p>
          This is a -QR Code Generator- project and was done using{" "}
          <span className="bg-blue-600 bg-opacity-20 text-blue-500 rounded-md px-1.5 py-0.5">
            react
          </span>
          .
        </p>
      ),
      url: "/qr-code-generator",
      img_src: "/img/qr-code-generator.png",
      id: "bhy003",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col gap-16">
      <nav className="w-full h-14 flex items-center justify-between px-20 text-white">
        <header className="bg-gradient-to-tr to-white from-slate-400 bg-clip-text text-transparent text-2xl font-medium">
          Bahadır's Projects
        </header>
      </nav>
      <div className="grid grid-cols-5 gap-8 justify-center px-20">
        {projects.map((project, i) => (
          <div
            className="border-2 border-solid border-gray-600 rounded-lg min-h[200px] p-3.5 flex flex-col items-center hover:border-gray-500 duration-200 gap-2.5 relative"
            key={i}
          >
            <div className="absolute -left-4 -top-4 bg-gradient-to-tr to-sky-500 from-blue-800 text-blue-50 font-medium rounded-full w-8 text-base h-8 flex items-center justify-center overflow-hidden">
              {i + 1}
            </div>
            <img
              src={project.img_src}
              className="w-full aspect-video rounded-lg shadow-sm shadow-gray-600"
            />
            <header className="text-white text-xl font-medium mt-2.5">
              {project.name}
            </header>
            <p className="text-gray-300 text-sm line-clamp-2">
              {project.explanation}
            </p>
            <button
              onClick={() => navigate(project.url)}
              className="text-base px-5 h-9 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-800 duration-300 flex items-center justify-center gap-2.5 hover:gap-5 mt-2.5"
            >
              <span>Go to Project</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        ))}
      </div>
      {/* <header className="bg-gradient-to-tr to-white from-slate-400 bg-clip-text text-transparent text-7xl font-medium">
        Welcome to Bahadır's Projects
      </header>
      <NavLink
        className="text-3xl px-10 py-5 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-800 duration-300 flex items-end gap-2.5 hover:gap-5"
        to="/tasks"
      >
        <span>Go to React Projects</span>
        <i className="fa-solid fa-arrow-right-long"></i>
      </NavLink> */}
    </div>
  );
}
