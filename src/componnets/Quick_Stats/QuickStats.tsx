export default function QuickStats() {
  const stats = [
    { label: "Active members", value: "234+" },
    { label: "Upcoming Events", value: "5" },
    { label: "Past Questions", value: "10" },
    { label: "Votes Cast", value: "134+" },
    { label: "Biodata Submissions", value: "85+" },
  ];

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          {/* <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">
            Platform Pulse
          </h2> */}
          <h3 className="text-3xl md:text-4xl font-light text-gray-900">
            Quick Statistics
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group p-6 text-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 rounded-2xl"
            >
              <p className="text-4xl font-bold text-gray-900 mb-1 tabular-nums tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}