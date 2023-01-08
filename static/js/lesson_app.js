// Import the data from data.js
const tableData = data;

// D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage.
// Reference the HTML table using D3.
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear out any existing data.
    tbody.html("");

    // Loop through each object in the data..
    // ..and append a row and cells for each value in the row.
    data.forEach((dataRow) => {

        //Append a row to the table body. 
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add...
        // ...each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
    });
};

function handleClick() {
    // Grab the datetime value from the filter.
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //if statement
    // Check to see if a date was entered and filter the data using that date.
    if (date) {
        // Apply filter to the table data...
        // ...to only keep the rows where the "datetime" matches the flter value.
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using filtereddata.
    // If no date was entered, filteredData will remain with the default values.
    buildTable(filteredData);
};

// Attach an event to listen for the form button.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads.
buildTable(tableData);

