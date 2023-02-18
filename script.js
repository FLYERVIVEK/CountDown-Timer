const newdatt = "08 MARCH 2023 01:00:00 AM"; 
document.getElementById('end-date').innerText=newdatt;
const inputs = document.querySelectorAll("input")
setInterval(() => {

    
    const olddate = new Date(newdatt);
    const currdate = new Date();
    let diff = (olddate-currdate)/1000;
    
    if (diff<0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
    ,1000)