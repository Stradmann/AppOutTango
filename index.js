/*INDEX.JS*/



document.addEventListener("DOMContentLoaded", function(){
    const burguerButton = document.getElementById("burguerButton");
    const burguerContainer = document.getElementById("burguerContainer");
    
    if(burguerButton == null || burguerContainer == null){
        alert("Eiiii!! que es null!!");
    } else {
        /*alert("La pillat, mira tu!");*/
        burguerButton.addEventListener("click", function () { 
            const menuUL = document.createElement('ul');
            menuUL.className = "burguerMenu";
            menuUL.innerHTML = '<li>Buscar</li><li>Tancar sessiò</li>';

            burguerContainer.appendChild(menuUL);
        });

        document.addEventListener("click", function(event) {
            if (!burguerButtonContainer.contains(event.target)) {
                burguerButtonContainer.removeChild(menuUL);
            }
        });
    }
});



