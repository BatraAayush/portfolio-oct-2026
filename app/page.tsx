import { Hero } from "@/app/components/sections/Hero";
import { Work } from "@/app/components/sections/Work";
import { Experience } from "@/app/components/sections/Experience";
import { Skills } from "@/app/components/sections/Skills";
import { Blogs } from "@/app/components/sections/Blogs";
import { Education } from "@/app/components/sections/Education";
import { Contact } from "@/app/components/sections/Contact";
import { CustomCursor } from "@/app/components/common/CustomCursor";

export default function Page() {
  return (
    <>
      <CustomCursor />
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <Blogs />
      <Education />
      <Contact />
    </>
  );
}
