const search = () => {
    // The function takes no argument ()

    // Get the search input value and convert it to uppercase
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    // Created a variable name called search box, so as to make the search button to start bringing value
    // The getElementById was used to get the id of the search-item in the HTML Document, after getting the value convert it to uppercase by using .value.toUppercase();

    // Get the container element for the product list
    const storeitems = document.getElementById("product-list");
    // Created another variable name called Store items, get the id to re-arrange the product list to get the matching result

    // Get all product elements
    const product = document.querySelectorAll(".product");
    // Create another variable called product to get access to all the product, we use document.querySelectorAll 

    // Get all h2 elements
    const pname = document.getElementsByTagName("h2");
    // Get all the h2 elements in the document

    // Create a for loop to iterate through product names
    for (var i = 0; i < pname.length; i++) {
        // Get the first h2 element within each product
        let match = product[i].getElementsByTagName('h2')[0];

        if (match) {
            // Get the text content of the h2 element
            let textvalue = match.textContent || match.innerHTML;

            // Check if the search text is found in the product name
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) { 
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}
