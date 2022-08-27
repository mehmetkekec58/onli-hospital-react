export function arrayUnique(array: string[]): string[] {
    return array.filter((c, index) => { return array.indexOf(c) === index; });
}