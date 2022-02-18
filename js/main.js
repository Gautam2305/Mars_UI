const boxOutput = document.querySelectorAll(".snippet");
boxOutput.forEach(box=>{
    let code = box.innerHTML;
        code = code.replaceAll("<", "&LT");
        box.innerHTML = code;
});