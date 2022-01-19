const countdownSnk = () => {
    const snkcountDate = new Date ('January 23, 2022 21:45:00').getTime()
    const snknow = new Date().getTime();
    const snkgap = snkcountDate - snknow;

    const Ssnk = 1000;
    const Msnk = Ssnk * 60;
    const Hsnk = Msnk * 60;
    const Dsnk = Hsnk * 24;

    const snktextDay = Math.floor(snkgap / Dsnk);
    const snktextHour = Math.floor((snkgap % Dsnk) / Hsnk);
    const snktextMinute = Math.floor((snkgap % Hsnk) / Msnk);
    const snktextSecond = Math.floor((snkgap % Msnk) / Ssnk);


    document.querySelector(".Dsnk").innerText = snktextDay;
    document.querySelector(".Hsnk").innerText = snktextHour;
    document.querySelector(".Msnk").innerText = snktextMinute;
    document.querySelector(".Ssnk").innerText = snktextSecond;


};

setInterval(countdownSnk, 1000);

const countdownKny = () => {
    const knycountDate = new Date ('January 23, 2022 17:00:00').getTime()
    const knynow = new Date().getTime();
    const knygap = knycountDate - knynow;

    const Skny = 1000;
    const Mkny = Skny * 60;
    const Hkny = Mkny * 60;
    const Dkny = Hkny * 24;

    const knytextDay = Math.floor(knygap / Dkny);
    const knytextHour = Math.floor((knygap % Dkny) / Hkny);
    const knytextMinute = Math.floor((knygap % Hkny) / Mkny);
    const knytextSecond = Math.floor((knygap % Mkny) / Skny);


    document.querySelector(".Dkny").innerText = knytextDay;
    document.querySelector(".Hkny").innerText = knytextHour;
    document.querySelector(".Mkny").innerText = knytextMinute;
    document.querySelector(".Skny").innerText = knytextSecond;
};

setInterval(countdownKny, 1000);

