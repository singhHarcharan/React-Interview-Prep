export function max(a, b) {
    return (a >= b) ? a : b;
}

export function calculateAverage(numbers) {
    if(numbers.length === 0)    return NaN;
    if(numbers.length === 1)    return numbers[0];
    else {
        const sum = numbers.reduce((sum, currNum) => sum + currNum, 0);
        return sum / numbers.length;
    }
}