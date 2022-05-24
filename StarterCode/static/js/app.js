// Fetch the JSON data and console log it
const biodata = "../data/samples.json"

function buildMetadata(sample) {  
    d3.json("samples.json").then((biodata) => {    
        var metadata = biodata.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);    
        var result = resultArray[0];    
        // Use d3 to select the panel with id of #sample-metadata    
        var PANEL = d3.select("#sample-metadata");
        // Use `.html("") to clear any existing metadata
        PANEL.html("");
        // Use Object.entries to add each key and value pair to the panel
        // Hint: Inside the loop, you will need to use d3 to append new
        // tags for each key-value in the metadata.
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}:${value}`);
        });
        // BONUS: Build the Gauge Chart
        buildGauge(result.wfreq);
    });
}

//Start the dropdown
d3.selectAll("#selDataset").on("change", dropdown);

function dropdown() {
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.property("value");
    var id_num = sample.names;


}











// Bubble
// var trace1 = {
//     x: [1, 2, 3, 4],
//     y: [10, 11, 12, 13],
//     mode: 'markers',
//     marker: {
//       color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
//       opacity: [1, 0.8, 0.6, 0.4],
//       size: [40, 60, 80, 100]
//     }
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: 'Marker Size and Color',
//     showlegend: false,
//     height: 600,
//     width: 600
//   };
  
//   Plotly.newPlot('myDiv', data, layout);

// Bar Chart
// var trace1 = {
//     x: ['Liam', 'Sophie', 'Jacob', 'Mia', 'William', 'Olivia'],
//     y: [8.0, 8.0, 12.0, 12.0, 13.0, 20.0],
//     type: 'bar',
//     text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'],
//     marker: {
//       color: 'rgb(142,124,195)'
//     }
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: 'Number of Graphs Made this Week',
//     font:{
//       family: 'Raleway, sans-serif'
//     },
//     showlegend: false,
//     xaxis: {
//       tickangle: -45
//     },
//     yaxis: {
//       zeroline: false,
//       gridwidth: 2
//     },
//     bargap :0.05
//   };
  
//   Plotly.newPlot('myDiv', data, layout);