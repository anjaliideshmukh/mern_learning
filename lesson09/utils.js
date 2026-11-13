
export function getGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "Fail";
    }
}

export function isEven(n) {
    return n % 2 === 0;
}
