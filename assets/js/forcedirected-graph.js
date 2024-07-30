import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// Declare the chart dimensions and margins.
const width = document.getElementById("forceGraph").offsetWidth;
const height = 600;
var graph = {
    nodes: [
        {name: "Performance"},
        {name: "Usability"},
        {name: "Improved Algorithms"},
        {name: "Reduced Material Flips"},
        {name: "Multithreading (Render thread)"}
    ],
    links: [
        {source: "Performance", target: "Usability"},
        {source: "Performance", target: "Improved Algorithms"},
        {source: "Performance", target: "Reduced Material Flips"},
        {source: "Performance", target: "Multithreading (Render thread)"}
    ]
};
const svg = d3.create("svg")
  .attr("width", width)
  .attr("height", height);

var node = svg
    .append("g")
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append('text').text(function(d){
        return d.name;
    })
    .attr("r", 7)
    .attr("fill", function(d){
        return "#white";
    })
    .attr("stroke", "white")
    
var link = svg
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter()
    .append("line")
    .attr("stroke-width", function(d) {
        return 3;
    })
    .style("stroke", "#a17bd0");

const simulation = d3
    .forceSimulation(graph.nodes)
    .force("link", d3.forceLink().id(function(d){
        return d.name;
    }).links(graph.links))
    .force("charge", d3.forceManyBody().strength(-10000))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);
// Return the SVG element.

forceGraph.append(svg.node());

  function ticked(){
    link
        .attr("x1", function(d){
            return d.source.x;
        })
        .attr("y1", function(d){
            return d.source.y;
        })
        .attr("x2", function(d){
            return d.target.x;
        })
        .attr("y2", function(d){
            return d.target.y;
        });
    
    node
        .attr('transform', d => `translate(${d.x},${d.y})`);
}