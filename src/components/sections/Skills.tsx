export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Yetenekler
        </h2>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Git"].map(skill => (
            <span key={skill} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200 shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
