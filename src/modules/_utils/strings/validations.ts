export const minLengthString = (text: string, min: number)=> {
    if(text?.length > min) return true;
    return false;
}