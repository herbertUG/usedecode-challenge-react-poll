export const randomObject = (sentArray: any[]) => {
    return sentArray[Math.floor(Math.random() * sentArray.length)];
}