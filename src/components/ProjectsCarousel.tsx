export const ProjectsCarousel = () => {
  const projects = [
    {
      name: "Loan Management System",
      url: "https://lms.cpajoe.co.ke",
    },
    {
      name: "E-learning System",
      url: "https://school.squarehaul.online",
    },
    {
      name: "Accounting System",
      url: "https://accounting.cpajoe.co.ke",
    },
    {
      name: "Client Relationship Management",
      url: "https://crm.cpajoe.co.ke",
    },
    {
      name: "Websites",
      url: "https://squarehaul.netlify.app",
    },
  ];

  return (
    <div className="py-20 overflow-hidden bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Previous Projects</h2>
      <div className="flex space-x-8 animate-slide-left">
        {[...projects, ...projects].map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow min-w-[300px]"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-slate-500 truncate">{project.url}</p>
          </a>
        ))}
      </div>
    </div>
  );
};