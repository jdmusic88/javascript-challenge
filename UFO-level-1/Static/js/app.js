// From data.js
var tableData = data;

// Filter button
var button = d3.select("#filter-btn");

// Select the tbody in html to render dataset and reference
var tbody = d3.select("tbody")

// Populate the dataset
data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Function for refresh stop
var dateFilter = () => {
  // Enter key Fix
  d3.event.preventDefault();
  
  // select Input element
  var inputElement = d3.select('#datetime');

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  // d3.event.prevent.Default()

  console.log(inputValue);
  console.log(inputElement);

// Use the variable to store in the data 
  var filteredData = tableData.filter(data => data.datetime === inputValue);

  console.log(filteredData)


  // Next, select the unordered list input
  var list = d3.select("tbody");

  // Remove some of the others from the list
  list.html("");

filteredData.forEach((ufoSightings) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
  var cell = row.append("td");
  cell.text(value);
  });
});

};

var input = d3.select("#datetime");
// Allow the input field to make a change for any typed text that is entered.
input.on("change", function() {
    var typedtext = d3.event.target.value;
    console.log(typedtext);
    d3.select("tbody").html("<tbody></tbody>");
    var filteredData2 = tableData.filter(event => event.datetime == typedtext);
    console.log(filteredData2)
    filteredData2.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    });


// button.on("click", handleInput);
button.on('click', dateFilter);

//Enter fix 
d3.select("form").on('submit', dateFilter);
