import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main id="home" className="min-h-screen bg-zinc-950 pt-20">
        <div className="flex min-h-screen items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Rajesh's Portfolio
          </h1>
        </div>
      </main>
    </>
  );
}

export default App;