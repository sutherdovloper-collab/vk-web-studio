
import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Process from '@/components/Process';
import HowItWorks from '@/components/HowItWorks';
import ProjectTimeline from '@/components/ProjectTimeline';
import Maintenance from '@/components/Maintenance';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink-950">
      <Preloader />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Process />
        <HowItWorks />
        <ProjectTimeline />
        <Maintenance />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
