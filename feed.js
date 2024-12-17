document.addEventListener("DOMContentLoaded", function () {
    function show() {
        let name = document.getElementById("myName").value;
        let email = document.getElementById("myEmail").value;
        let division = document.getElementById("myDivision").value;
        let comment = document.getElementById("mycom").value;  

        console.log({ name, email, division, comment });
        document.getElementById("output").textContent = 
            `Thank you, ${name}! Your feedback is submitted!`;
    }

    document.getElementById("mybutton").addEventListener("click", function(e) {
        e.preventDefault();  
        show();
    });
});
