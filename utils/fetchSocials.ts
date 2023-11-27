import { sanityClient } from "../sanity";
import { Social } from "../typings";

export const fetchSocials = async() => {
    const res = await sanityClient.fetch(`
    *[_type == "social"]{
      ...,
    }
  `)
    const socials: Social[] = res;

    return socials;
}