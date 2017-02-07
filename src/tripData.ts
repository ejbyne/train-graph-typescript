function getTotalTripDistance(trip: Array<string>): number {
  return trip.reduce((aggDistance, edge) => aggDistance + parseInt(edge[2], 10), 0);
}

function hasReachedDistance(trip: Array<string>, distance: number): boolean {
  return distance && getTotalTripDistance(trip) >= distance;
}

function hasReachedDestination(trip: Array<string>, destinationNode: string,
                               stops: number, distance: number): boolean {
  return !stops && !distance && trip[trip.length - 1][1] === destinationNode;
}

function hasReachedStops(trip: Array<string>, stops: number): boolean {
  return stops && trip.length === stops;
}

function isInfiniteLoop(trip: Array<string>, stops: number, distance: number): boolean {
  return !distance && !stops && trip.filter(edge => edge === trip[trip.length - 1]).length > 1;
}

function hasReachedTripEnd(trip: Array<string>, destinationNode: string,
                           stops: number, distance: number): boolean {
  return hasReachedDestination(trip, destinationNode, stops, distance) ||
    hasReachedStops(trip, stops) || isInfiniteLoop(trip, stops, distance);
}

function endsAtDestinationNode(trip: Array<string>, destinationNode: string): boolean {
  return trip[trip.length - 1][1] === destinationNode;
}

function hasExactStops(trip: Array<string>, exactStops: number): boolean {
  return trip.length === exactStops;
}

function sortInAscendingOrder(edgeA: number, edgeB: number): number {
  return edgeA - edgeB;
}

function getStartEdges(startNode: string, graph: Array<string>): Array<Array<string>> {
  return graph
    .filter(edge => edge[0] === startNode)
    .map(edge => [edge]);
}

function addNextEdges(trip: Array<string>, graph: Array<string>,
                      distance: number): Array<Array<string>> {
  return graph
    .filter(edge => edge[0] === trip[trip.length - 1][1])
    .map(edge => [...trip, edge])
    .filter(newTrip => !hasReachedDistance(newTrip, distance));
}

function addNewTripToExistingTrips(trips: Array<Array<string>>,
                                   newTrip: Array<Array<string>>): Array<Array<string>> {
  return newTrip ? trips.concat(newTrip) : trips;
}

function findTrips(existingTrips: Array<Array<string>>, graph: Array<string>,
                   destinationNode: string, stops: number,
                   distance: number): Array<Array<string>> {
  return existingTrips.map((trip) => {
    if (hasReachedTripEnd(trip, destinationNode, stops, distance)) {
      return null;
    }
    const nextTrips = addNextEdges(trip, graph, distance);
    return findTrips(nextTrips, graph, destinationNode, stops, distance);
  }).reduce(addNewTripToExistingTrips, existingTrips);
}

function findTripsEndingAtDestinationNode(graph: Array<string>, startNode: string,
                                          destinationNode: string, stops?: number,
                                          distance?: number): Array<Array<string>> {
  const startEdges = getStartEdges(startNode, graph);
  return findTrips(startEdges, graph, destinationNode, stops, distance)
    .filter(trip => endsAtDestinationNode(trip, destinationNode));
}

function getNumberOfTripsWithMaxStops(graph: Array<string>, startNode: string,
                                      destinationNode: string, stops: number): number {
  return findTripsEndingAtDestinationNode(graph, startNode, destinationNode, stops)
    .length;
}

function getNumberOfTripsWithExactStops(graph: Array<string>, startNode: string,
                                        destinationNode: string, stops: number): number {
  return findTripsEndingAtDestinationNode(graph, startNode, destinationNode, stops)
    .filter(trip => hasExactStops(trip, stops))
    .length;
}

function getShortestTripDistance(graph: Array<string>, startNode: string,
                                 destinationNode: string): number {
  return findTripsEndingAtDestinationNode(graph, startNode, destinationNode)
    .map(getTotalTripDistance)
    .sort(sortInAscendingOrder)[0];
}

function getNumberOfTripsLessThanDistance(graph: Array<string>, startNode: string,
                                          destinationNode: string, distance: number): number {
  return findTripsEndingAtDestinationNode(graph, startNode, destinationNode, null, distance)
    .length;
}

export {
  getNumberOfTripsWithMaxStops,
  getNumberOfTripsWithExactStops,
  getShortestTripDistance,
  getNumberOfTripsLessThanDistance,
};
