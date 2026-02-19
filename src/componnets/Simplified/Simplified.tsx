import { DownloadCloud, FileText, Layers } from "@deemlol/next-icons";

const FEATURES = [
  {
    icon: <DownloadCloud />,
    title: "Download receipt",
    subtitle: "anytime",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <FileText />,
    title: "View transaction",
    subtitle: "history",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: <Layers />,
    title: "Transparent Departmental",
    subtitle: "Records",
    color: "bg-purple-50 text-purple-600",
  },
];

export default function Simplified() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Your Payments, <span className="text-[#489B3F]">Simplified</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Manage your departmental dues and fees with full transparency and ease of access.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${feature.color}`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {feature.title} <br />
                <span className="text-gray-400 font-medium">{feature.subtitle}</span>
              </h3>
              
              <div className="mt-4 w-10 h-1 bg-gray-100 group-hover:w-20 group-hover:bg-[#489B3F] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}