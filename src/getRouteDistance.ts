function getRouteEdges(route: string): Array<string> {
  return route
    .split('-')
    .map((node, index, nodes) => nodes.length >= index + 1 && node + nodes[index + 1])
    .slice(0, -1);
}

function getEdgeDistance(graph: Array<string>, routeEdge: string): number | never {
  const foundEdge: string = graph.find(graphEdge => graphEdge.includes(routeEdge));
  if (!foundEdge) {
    throw new Error('NO SUCH ROUTE');
  }
  return parseInt(foundEdge[2], 10);
}

function addEdgeDistance(aggDistance: number, edgeDistance: number): number {
  return aggDistance + edgeDistance;
}

function getRouteDistance(graph: Array<string>, route: string): number | string {
  try {
    return getRouteEdges(route)
      .map(routeEdge => getEdgeDistance(graph, routeEdge))
      .reduce(addEdgeDistance, 0);
  } catch (err) {
    return err.message;
  }
}

export default getRouteDistance;
