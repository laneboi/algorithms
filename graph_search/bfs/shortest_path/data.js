var tracer = new WeightedUndirectedGraphTracer();
var logger = new LogTracer();
tracer.log(logger);
var G = WeightedUndirectedGraph.random(5, 1, 1, 9);
tracer.set(G);