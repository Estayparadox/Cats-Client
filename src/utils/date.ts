export function getFormatedDate(unformatedDate: Date): string {
    const year = unformatedDate.getFullYear();
    const month = unformatedDate.getMonth()+1;
    const day = unformatedDate.getDate();
    let hours = unformatedDate.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return day + "/" + month + "/" + year + " at " + hours + ampm;
}

export function getAgeFromBirthdate(birthdate: string): string {
    var catBirthdate = new Date(birthdate);
    let timeDiff = Math.abs(Date.now() - catBirthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    return `(` + age.toString() + `yo)`;
}