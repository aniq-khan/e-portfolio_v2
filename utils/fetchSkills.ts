import { sanityClient } from "../sanity";
import { Skill } from "../typings";

export const fetchSkills = async() => {
    const res = await sanityClient.fetch( `
    *[_type == "skill"]{
      ...,
    }
    `)
    const skills: Skill[] = res;
   
    return skills;
}