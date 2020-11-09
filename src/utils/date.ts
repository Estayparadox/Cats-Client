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