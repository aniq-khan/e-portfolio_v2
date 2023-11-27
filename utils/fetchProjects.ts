import { sanityClient } from "../sanity";
import { Project } from "../typings";

export const fetchProjects = async() => {
    const res = await sanityClient.fetch(`
    *[_type == "project"]{
      ...,
        technologies[]->
    }
    `)
    
    const projects: Project[] = res;

    return projects;
}