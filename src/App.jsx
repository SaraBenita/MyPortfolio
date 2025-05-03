import { Header, Hero, About, Skills, Projects, Footer } from './components'


function App() {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;