function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}

  
  init();


// function optionChanged(newSample) {
//     console.log(newSample);
//     }

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }    




function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");
      
        PANEL.html("");
        PANEL.append("h6").text(`ID: ${result.id}\n`);
        PANEL.append("h6").text(`ETHNICITY: ${result.ethnicity}\n`);
        PANEL.append("h6").text(`GENDER: ${result.gender}\n`);
        PANEL.append("h6").text(`AGE: ${result.age}\n`);
        PANEL.append("h6").text(`LOCATION: ${result.id}\n`);
        PANEL.append("h6").text(`BBTYPE: ${result.location}\n`);
        PANEL.append("h6").text(`WFREQ: ${result.wfreq}\n`);
    });
}

