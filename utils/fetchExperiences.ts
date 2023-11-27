import { sanityClient } from "../sanity";
import { Experience } from "../typings";

export const fetchExperiences = async () => {
  const res = await sanityClient.fetch(`
  *[_type == "experience"]{
    ...,
      technologies[]->
  }
  `)

  const experiences: Experience[] = res;

  return experiences;
};
