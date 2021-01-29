const clock = document.querySelector('.clock')

const tick = (()=> {

    const now = new Date();

    const y = now.getUTCFullYear();

    const date = now.getDate();

    const mon = now.getMonth();

    const h = now.getHours();

    const m = now.getMinutes();

    const s = now.getSeconds();

    const dy = now.getUTCDay();
    

    let month = [ 'January', 'February', 'March', 
        'April', 'May', 'June', 'July', 'August',
         'September', 'October',
          'November', 'December']

    let week =[ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

   const html = `<span>${week[dy]}</span><span> ${date } </span>,<span>${month[mon]} </span><span>${y}</span>Time<span>${h}</span>:<span>${m}</span>:<span>${s}</span>`;

   clock.innerHTML = html
    

})

setInterval(tick , 1000);
console.log('alert')