export default function selectCharacterHelper(text: string): string {
    let number: number = 150
    return text.length > number ? `${substringText(text, number)}...` : text
}
function substringText(text: string, number: number): string {
    return text.substring(0, number);
}