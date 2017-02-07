function getRouteEdges(route) {
    return route
        .split('-')
        .map((node, index, nodes) => nodes.length >= index + 1 && node + nodes[index + 1])
        .slice(0, -1);
}
function getEdgeDistance(graph, routeEdge) {
    const foundEdge = graph.find(graphEdge => graphEdge.includes(routeEdge));
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
            .map(routeEdge => getEdgeDistance(graph, routeEdge))
            .reduce(addEdgeDistance, 0);
    }
    catch (err) {
        return err.message;
    }
}
export default getRouteDistance;
