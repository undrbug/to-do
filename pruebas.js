const data = new Date();
// Wed Oct 14 2020 14:14:24 GMT-0600 (Ciudad de México Standard Time)

console.log(data);

console.log(data.toLocaleDateString('es-MX'));
// "10/14/2020"

const dataOptions = {
    weekend: 'long',
    year: 'numeric',
    month:'long',
    day: 'numeric'
 };

 console.log(data.toLocaleDateString('es-MX', dataOptions));

// 28 de agosto de 2020

console.log(data.toLocaleTimeString());
// “9:04:54 AM”

const horarioOptions = {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit', 
    timeZone: 'America/Sao_Paulo'
 };

 console.log(data.toLocaleTimeString('es-MX', horarioOptions));
// “9:04:54”

console.log(data.toLocaleString('es-MX', {
    ...dataOptions, 
    ...horarioOptions
 }));
 // “28 de agosto de 2020 9:04:54”

 const formataData = new Intl.DateTimeFormat('es-MX', {
    ...dataOptions,
    ...horarioOptions
 });

 formataData.format(data)
// “28 de agosto de 2020 9:04:54”