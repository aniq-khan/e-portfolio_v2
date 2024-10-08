import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ExperienceComp from "../components/ExperienceComp";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div
      className="
    bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
    "
    >
      <Head>
        <title>Aniq Khan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <ExperienceComp experience={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer flex justify-center">
          <div>
            <Image
              alt="123"
              className="rounded-full filter grayscale hover:grayscale-0 animate-bounce"
              width={48}
              height={48}
              src="https://cdn.sanity.io/images/tfdxk22h/production/c19af28409dee6940cc75aac638918acf0e434c0-278x200.jpg"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences() ;
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 60000,
  };
};
