
export default function Started() {
  return (
    <section className="px-6 py-12">
      <div 
        className="  "
        
      >
        {/* The Overlay: Essential for text readability on images */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

        {/* Content */}
        <div className="relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Ready to get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg mx-auto leading-relaxed">
            Join our Departmental digital platform today and stay connected with everything happening!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#489B3F] hover:bg-green-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg uppercase text-sm tracking-widest">
              Register Now
            </button>
            
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/50 hover:border-white text-white font-bold rounded-full transition-all backdrop-blur-sm uppercase text-sm tracking-widest">
              Member Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}