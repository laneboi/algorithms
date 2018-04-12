var tracer = new UndirectedGraphTracer();
var logger = new LogTracer();
tracer.log(logger);

var G =[
[0, 1, 0, 1, 1],
[1, 0, 1, 0, 0],
[0, 1, 0, 1, 0],
[1, 0, 1, 0, 0], // <-- replace latest 0 with 1 to make G not biparted
[1, 0, 0, 0, 0],
];
tracer.set(G, 0);

var colorsTracer = new Array1DTracer('Colors');