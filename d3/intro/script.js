var w = 500,
    h = 100,
    padding = 2,
    dataset = [5, 10, 15, 20, 30];

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
        .attr("x", function (d, i) {
            return i * 21;
        })
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", 100)