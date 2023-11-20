import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        const pageInfo: PageInfo = data.pageInfo;
        return pageInfo;
    } catch (error) {
        console.error("Error fetching page info:", error);
        throw error; // Re-throw to handle it at a higher level if necessary.
    }
};