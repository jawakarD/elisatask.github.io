$(document).ready(function() {


            //Change mobile-click
  $(".menu-icon i").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });

            //Act on scrolling
  $(document).on("scroll", function() {
             if($(window).scrollTop()) {
                   $('header').addClass('scrolled');
             }
             else {
                   $('header').removeClass('scrolled');
             }
   })

          // Form validationg

          let form = document.forms["contact"];
          let ansLable = document.getElementById("ans-in-lable");
          let a = Math.floor(Math.random()*100);
          let b = Math.floor(Math.random()*100);
          let fullValidate = 0;
          let validate = false;
          ansLable.innerHTML = `${a}+${b}`;
          let properties = ["name", "email", "message", "ans-in"];

          const change = ()=> {
            document.getElementById("change").style.display = "block";
            form.style.display = "none";
          }

          const check_ans = (x) => +x === a+b;

          const handleSubmit = ()=>{
            properties.map((property)=>{
              if(!form[property].value){
                console.log(form[property]);
                form[property].style.border = "1px solid red";
              }else{
                if(property === "ans-in"){
                  if(check_ans(form[property].value)){
                    validate=true;
                  }
                }
                form[property].style.border =   "1px solid #d7b98a";
                fullValidate++;
              }
            })
            if(validate && (fullValidate === 4)){
              change();
            }
          }




          form.addEventListener("submit", handleSubmit);


});
