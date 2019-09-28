// selecting tbody from the html
var tbody = d3.select("tbody")

// console.log data from data.js
console.log(data);

// adds data to table 
data.forEach((item) => {
    console.log(item);
    var row=tbody.append("tr");
    Object.entries(item).forEach(function([key,value]) {
        console.log(key, value);
        var cell=row.append("td");
        cell.text(value);
    });
});


//Event Handler: Filtering by Date

var events = data;
var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(events);
    var filteredData = events.filter(event => event.datetime === inputValue);
    console.log(filteredData);
    
    // deleting all data
    var tr = d3.selectAll("tr")
    tr.remove()
    tbody = d3.select("tbody")

    // adding back requested data
    filteredData.forEach((i) => {
        var rows = tbody.append("tr");
        Object.entries(i).forEach(function([key,value]) {
            //console.log(key,value);
            var cells = rows.append("td");
            cells.text(value);
        });
    }); 
});



