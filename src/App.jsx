import { Hero } from './Components/Home/Hero';
import { Footer } from './Components/Shared/Footer'; 
import { Navbar } from './Components/Shared/Navbar';

function App() {
  return (
    <main className="font-nunito ">
        <div className="bg-[url(img/bg-hero-2.png)] bg-center bg-cover bg-no-repeat h-[100vh]">
            <Navbar />
            <Hero />
        </div>
        <Footer />
    </main>
  )}
  
export default App