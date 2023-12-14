const navLink = document.getElementsByClassName("nav-link");

for(var i = 0; i <navLink.length; i++){
    navLink[i].addEventListener("mouseover", function(){
       this.style.borderBottom = "1px solid orange"; 
       this.className = "nav-link text-warning";
    });

    navLink[i].addEventListener("mouseout", function(){
        this.style.borderBottom = "";
        this.className = "nav-link text-light";
    })
}
