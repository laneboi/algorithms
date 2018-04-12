function BFS(s) { // s = start node
    var Q = [];
    Q.push(s); // add start node to queue
    tracer.visit(s).wait();
    while (Q.length > 0) {
        var node = Q.shift(); // dequeue
        for (var i = 0; i < G[node].length; i++) {
            if (G[node][i]) { // if current node has the i-th node as a child
                Q.push(i); // add child node to queue
                tracer.visit(i, node).wait();
            }
        }
    }
}
BFS(0);