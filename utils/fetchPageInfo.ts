import { PageInfo } from "../typings";

export const fetchPageInfo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)

    const data = await res.json()
    data.pageInfo = 
          {
            "_rev": "eNNDhQynm2qRKPnzN20Ix2",
            "heroImage": {
              "_type": "image",
              "asset": {
                "_ref": "image-27110820026f4683e72faa14c8ef61a501ed9b06-200x200-jpg",
                "_type": "reference"
              }
            },
            "_createdAt": "2023-09-14T03:43:19Z",
            "backgroundInformation": "3rd Comp Sci Student at York Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia repellat pariatur tenetur facilis. Sed, dolor. Cumque harum quidem, itaque adipisci officiis earum amet iste nihil molestias, numquam rem sit architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel odio voluptas architecto laboriosam, quibusdam animi est rerum impedit libero? Officia ullam nam explicabo unde, reprehenderit minus facere soluta quaerat!",
            "role": "Frontend Web Developer",
            "name": "Aniq Khan",
            "_updatedAt": "2023-11-20T22:30:09Z",
            "profilePic": {
              "_type": "image",
              "asset": {
                "_ref": "image-d179b6e79b2641d13f399a73e0404c00497acd1a-200x200-jpg",
                "_type": "reference"
              }
            },
            "phoneNumber": "+1 (647) 999-9999",
            "_id": "aeca741c-17ae-4bba-9d25-0c90e1195a9a",
            "_type": "pageInfo",
            "email": "aak.aniq.a.khan@gmail.com",
            "address": "Toronto, Canada"
          }
    
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}