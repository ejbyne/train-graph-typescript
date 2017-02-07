"use strict";
function getRouteEdges(route) {
    return route
        .split('-')
        .map(function (node, index, nodes) { return nodes.length >= index + 1 && node + nodes[index + 1]; })
        .slice(0, -1);
}
function getEdgeDistance(graph, routeEdge) {
    var foundEdge = graph.find(function (graphEdge) { return graphEdge.includes(routeEdge); });
    if (!foundEdge) {
        throw new Error('NO SUCH ROUTE');
    }
    return parseInt(foundEdge[2], 10);
}
function addEdgeDistance(aggDistance, edgeDistance) {
    return aggDistance + edgeDistance;
}
function getRouteDistance(graph, route) {
    try {
        return getRouteEdges(route)
            .map(function (routeEdge) { return getEdgeDistance(graph, routeEdge); })
            .reduce(addEdgeDistance, 0);
    }
    catch (err) {
        return err.message;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getRouteDistance;
