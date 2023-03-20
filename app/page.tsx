import MyStory from "@/components/MyStory";
import Hero from "@/components/Hero";
import MyWork from "@/components/MyWork";
import Toolbox from "@/components/Toolbox";
export default function Home() {
  return (
    <main className="mx-auto p-3 font-jakarta">
      <Hero />
      <MyWork />
      <MyStory />
      <Toolbox />
    </main>
  );
}
