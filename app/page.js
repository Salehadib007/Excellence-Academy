import Hero from "@/components/ea/Hero";
import Marquee from "@/components/ea/Marquee";
import Features from "@/components/ea/Features";
import Stats from "@/components/ea/Stats";
import Courses from "@/components/ea/Courses";
import Instructor from "@/components/ea/Instructor";
import Testimonials from "@/components/ea/Testimonials";
import Contact from "@/components/ea/Contact";
import Navbar from "@/components/ea/Navbar";
import Footer from "@/components/ea/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Stats />
      <Courses />
      <Instructor />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
