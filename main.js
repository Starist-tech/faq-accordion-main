let buttons = document.querySelectorAll(".click");

buttons.forEach(ele => {
  ele.addEventListener("click", function () {    
    this.classList.toggle("active");
      if(this.classList.contains("active")) {
        this.nextElementSibling.style.display = "block";
        this.children[1].style.display = 'none';
        this.children[2].style.display = 'block';
      }
      else {
        this.nextElementSibling.style.display = "none";
        this.children[1].style.display = 'block';
        this.children[2].style.display = 'none';
      } 
  });
});
