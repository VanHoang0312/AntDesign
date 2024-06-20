import { post } from "../utils/request";
export const bookRoom = async (option) => {
   const result= await post("book-room", option);
   return result;
};
