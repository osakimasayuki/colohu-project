export const dateFromatter = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
}

export const dateFrormatterYear = (val: string) => {
    return val.slice(0, 4);
};