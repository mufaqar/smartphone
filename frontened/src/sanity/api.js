import client from "./client";
export const fetchTutorials=async()=>{
    return await client.fetch(query);
}