export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Welcome to{" "}
          <span className="text-accent">Seva Cars Info</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
          Your trusted source for car information, reviews, and the latest
          automotive news. Explore our curated content to find the perfect
          vehicle for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#explore"
            className="px-8 py-3 rounded-full bg-accent hover:bg-accent-600 transition-colors font-semibold text-white"
          >
            Explore Cars
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors font-semibold text-white"
          >
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}
