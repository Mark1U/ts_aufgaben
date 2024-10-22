const getNumberText = (num: number | undefined): string => {
    const numberToTextArr: string[] = ['One', 'Two', 'Three', 'Four', 'Five']

    if (num && num >= 1 && num <= 5) {
        return numberToTextArr[num - 1];
    }

    return "Unknown";
}

const randomNumber: number = Math.ceil(Math.random() * 7);
const numberText = getNumberText(randomNumber);
console.log(numberText);