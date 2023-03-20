import MyStory from "@/components/MyStory";
import Hero from "@/components/Hero";
import MyWork from "@/components/MyWork";
import Toolbox from "@/components/Toolbox";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="mx-auto p-3 font-jakarta max-w-7xl">
      <Hero />
      <MyWork />
      <Toolbox />
      <MyStory />
      <Contact />
    </main>
  );
}
