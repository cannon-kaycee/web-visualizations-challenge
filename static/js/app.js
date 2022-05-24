// Fetch the JSON data and console log it
const biodata = "../data/samples.json"
d3.json(biodata).then(function(data) {
    console.log(data);

d3.selectAll("#selDataset").on("change", dropdown);

function optionChanged(sample_id) {
    buildMetadata(sample_id);
    console.log(sample_id);
    }

function dropdown() {
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.property("value");
    var id_num = data.names;
    id_num.forEach((id)=> dropdownMenu.append("option").text(id).property("value",id));
    buildMetadata(id_num[0])
}
dropdown()


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
    });
}

function bubble_bar(sample){
    d3.json("samples.json").then((biodata) => { 
        var samples = biodata.samples;
        var sample_list = samples.filter(sampleObj => sampleObj.id == sample);    
        var result = sample_list[0];    
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
    });
    //Bar Chart

    let trace1 = {
        x: data.map(object => object.sample_values),
        y: data.map(object => object.otu_ids),
        text: data.map(object => object.otu_ids),
        name: "OTU IDs",
        type: "bar",
        orientation: "h"
    };

    let traceData = [trace1];

    let layout = {
        title: "OTU IDs",
        margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
        }
    };

    Plotly.newPlot("bar", traceData, layout);

    //Bubble Chart

    let trace2 = {
        x: data.map(object => object.sample_values),
        y: data.map(object => object.otu_ids),
        mode: 'markers',
        marker: {
        color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
        opacity: [1, 0.8, 0.6, 0.4],
        size: [40, 60, 80, 100]
        }
    };

    var traceData2 = [trace2];
    
    var layout_2 = {
        title: 'Bubble Graph',
        showlegend: false,
        height: 600,
        width: 600
    };

    Plotly.newPlot('bubble', traceData2, layout_2);
}
bubble_bar()

});