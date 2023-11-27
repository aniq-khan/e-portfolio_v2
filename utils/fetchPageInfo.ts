import { sanityClient } from "../sanity";
import { PageInfo } from "../typings";

export const fetchPageInfo = async() => {
    const res = await sanityClient.fetch(`
    *[_type == "pageInfo"][0]
    `)
    const pageInfo: PageInfo = res;

    return pageInfo;
}