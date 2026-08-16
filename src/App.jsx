import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      
      <Navbar />

      <main id="home" className="pt-20">
        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold text-lime-400">
            Rajesh's Portfolio
          </h1>
        </section>
      </main>

    </div>
  );
}

export default App;