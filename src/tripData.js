function getTotalTripDistance(trip) {
    return trip.reduce((aggDistance, edge) => aggDistance + parseInt(edge[2], 10), 0);
}
function hasReachedDistance(trip, distance) {
    return distance && getTotalTripDistance(trip) >= distance;
}
function hasReachedDestination(trip, destinationNode, stops, distance) {
    return !stops && !distance && trip[trip.length - 1][1] === destinationNode;
}
function hasReachedStops(trip, stops) {
    return stops && trip.length === stops;
}
function isInfiniteLoop(trip, stops, distance) {
    return !distance && !stops && trip.filter(edge => edge === trip[trip.length - 1]).length > 1;
}
function hasReachedTripEnd(trip, destinationNode, stops, distance) {
    return hasReachedDestination(trip, destinationNode, stops, distance) ||
        hasReachedStops(trip, stops) || isInfiniteLoop(trip, stops, distance);
}
function endsAtDestinationNode(trip, destinationNode) {
    return trip[trip.length - 1][1] === destinationNode;
}
function hasExactStops(trip, exactStops) {
    return trip.length === exactStops;
}
function sortInAscendingOrder(edgeA, edgeB) {
    return edgeA - edgeB;
}
function getStartEdges(startNode, graph) {
    return graph
        .filter(edge => edge[0] === startNode)
        .map(edge => [edge]);
}
function addNextEdges(trip, graph, distance) {
    return graph
        .filter(edge => edge[0] === trip[trip.length - 1][1])
        .map(edge => [...trip, edge])
        .filter(newTrip => !hasReachedDistance(newTrip, distance));
}
function addNewTripToExistingTrips(trips, newTrip) {
    return newTrip ? trips.concat(newTrip) : trips;
}
function findTrips(existingTrips, graph, destinationNode, stops, distance) {
    return existingTrips.map((trip) => {
        if (hasReachedTripEnd(trip, destinationNode, stops, distance)) {
            return null;
        }
        const nextTrips = addNextEdges(trip, graph, distance);
        return findTrips(nextTrips, graph, destinationNode, stops, distance);
    }).reduce(addNewTripToExistingTrips, existingTrips);
}
function findTripsEndingAtDestinationNode(graph, startNode, destinationNode, stops, distance) {
    const startEdges = getStartEdges(startNode, graph);
    return findTrips(startEdges, graph, destinationNode, stops, distance)
        .filter(trip => endsAtDestinationNode(trip, destinationNode));
}
function getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, stops) {
    return findTripsEndingAtDestinationNode(graph, startNode, destinationNode, stops)
        .length;
}
function getNumberOfTripsWithExactStops(graph, startNode, destinationNode, stops) {
    return findTripsEndingAtDestinationNode(graph, startNode, destinationNode, stops)
        .filter(trip => hasExactStops(trip, stops))
        .length;
}
function getShortestTripDistance(graph, startNode, destinationNode) {
    return findTripsEndingAtDestinationNode(graph, startNode, destinationNode)
        .map(getTotalTripDistance)
        .sort(sortInAscendingOrder)[0];
}
function getNumberOfTripsLessThanDistance(graph, startNode, destinationNode, distance) {
    return findTripsEndingAtDestinationNode(graph, startNode, destinationNode, null, distance)
        .length;
}
export { getNumberOfTripsWithMaxStops, getNumberOfTripsWithExactStops, getShortestTripDistance, getNumberOfTripsLessThanDistance, };
