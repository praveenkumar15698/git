//json
console.log("===houjr 1:JSON Basics ===");

let student ={
    name:"praveen",
    age:19,
    marks:[85,90,89]
};

//convert object to JSON string
let jsonstring = JSON.stringify(student);
console.log("JSON String:",jsonstring);
console.log("Type of jsonstring:",typeof jsonstring);
//convert JSON string back to object
let jsonobject = JSON.parse(jsonstring);
console.log("JSON Object:",jsonobject);
console.log("Type of jsonobject:",typeof jsonobject);
//variables of books atleast 3 books
let books =[
    {title:"harry potter",author:"R K Rowling",year:2001},
    {title:"The Great Gatsby ",author:" F. Scott Fitzgerald",year:2005},
    {title:"Midnight's Children ",author:" Salman Rushdie",year:2010}
];
console.log("Books Array:",books);
//convert books array to JSON string
let booksJsonString = JSON.stringify(books);
console.log("Books JSON String:",booksJsonString);
//convert JSON string back to array
let booksArray = JSON.parse(booksJsonString);
console.log("Books Array from JSON String:",booksArray);

//hour 2: AJEX with fetch
console.log("===hour 2: AJEX with fetch ===");
//fetch sample Json from API
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => console.log("Fetcheed Data:",data))
.catch(error => console.error("Error fetching data:",error));

//hour 3: Display JSON data on webpage
console.log("===hour 3: Display JSON data on webpage ===");
//fetch all users and show in console + page
fetch("https://jsonplaceholder.typicode.com/users") 
.then(response => response.json())
.then(users => {
    output = "<h3>User List</h3>";
    users.forEach(user => {
        output+= `<li>${user.name} - ${user.email})</li>`;
    });
    output += "</ul>";
    //append result to page
    document.body.innerHTML += output;
    });