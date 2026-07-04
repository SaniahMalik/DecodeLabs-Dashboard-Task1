const welcomeElement= document.getElementById('welcome-message');


const clockElement = document.createElement('p');
clockElement.style.fontSize= '1.2rem';
clockElement.style.marginTop= '10px';
clockElement.style.color= '#475569';
welcomeElement.after(clockElement);


function updateDashboard(){
    const now = new Date();
    const hours = now.getHours();

    let greeting="";

    if (hours < 12) {
        greeting = "Good Morning. Saniah!";
    }else if (hours < 18){
        greeting = "Good Afternoon, Saniah!";
    }else{
        greeting = "Good Evening, Saniah!";
    }
    welcomeElement.innerText = greeting;


    const timeString = now.toLocaleTimeString();
    clockElement.innerText=`LiveTime : ${timeString}`;

}
setInterval(updateDashboard, 1000);
updateDashboard();

const menuToggleBtn= document.getElementById('menu-toggle');
const sidebarElement = document.querySelector('.sidebar');

menuToggleBtn.addEventListener('click', function(){
    sidebarElement.classList.toggle('active');
});
