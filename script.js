document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("fname").value;
    const lasttName = document.getElementById("lname").value;
    const country = document.getElementById("country").value;

    console.log("First Name:", firstName);
    console.log("Last Name:", lasttName);
    console.log("Country:", country);
})