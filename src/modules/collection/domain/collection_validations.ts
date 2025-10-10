import { minLengthString } from "@/modules/_utils/strings/validations";

const MIN_NAME_COLLECTION = 1;
export const validateLengtName = (text: string)=> {
    return minLengthString(text, MIN_NAME_COLLECTION)
}