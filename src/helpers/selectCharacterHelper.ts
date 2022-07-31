export default function selectCharacterHelper(text: string, number:number): string {
    return text.length > number ? `${substringText(text, number)}...` : text
}
function substringText(text: string, number: number): string {
    return text.substring(0, number);
}