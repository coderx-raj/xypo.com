const downloadBtn = document.querySelector(".download-btn");
// past form link
const filelink ="file:///D:/final%20project/xypo.html";

const initTimer=() => {
    let timer = downloadBtn.CDATA_SECTION_NODE.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = 'Wait your sumbition form generated in <b>${timer}</b> seconds';
    const initCounter = setInterval(() =>{
        if(timer > 0){
            timer--;
             return downloadBtn.innerHTML = 'Wait your sumbition form generated in <b>${timer}</b> seconds';
        }
    clearInterval(initCounter);
    location.href = filelink;
    downloadBtn.textContent ="Your file is downloading..."
 },1000);
    
};
downloadBtn.addEventListener("Click",initTimer);