export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach(task => {

        /*         if (!unique.includes(tasks.dateFormat)){
                    unique.push(tasks.dateFormat);
                } */
        // lo anterior es exactamente igual a lo que sigue
        if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
        //console.log(task.dateFormat);
    });
    return unique;
};

export const orderDates = (dates) => {
    return dates.sort((a,b) => {
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        return firstDate - secondDate;
    })
}