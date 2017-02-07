"use strict";
function getTotalTripDistance(trip) {
    return trip.reduce(function (aggDistance, edge) { return aggDistance + parseInt(edge[2], 10); }, 0);
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
    return !distance && !stops && trip.filter(function (edge) { return edge === trip[trip.length - 1]; }).length > 1;
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
        .filter(function (edge) { return edge[0] === startNode; })
        .map(function (edge) { return [edge]; });
}
function addNextEdges(trip, graph, distance) {
    return graph
        .filter(function (edge) { return edge[0] === trip[trip.length - 1][1]; })
        .map(function (edge) { return trip.concat([edge]); })
        .filter(function (newTrip) { return !hasReachedDistance(newTrip, distance); });
}
function addNewTripToExistingTrips(trips, newTrip) {
    return newTrip ? trips.concat(newTrip) : trips;
}
function findTrips(existingTrips, graph, destinationNode, stops, distance) {
    return existingTrips.map(function (trip) {
        if (hasReachedTripEnd(trip, destinationNode, stops, distance)) {
            return null;
        }
        var nextTrips = addNextEdges(trip, graph, distance);
        return findTrips(nextTrips, graph, destinationNode, stops, distance);
    }).reduce(addNewTripToExistingTrips, existingTrips);
}
function findTripsEndingAtDestinationNode(graph, startNode, destinationNode, stops, distance) {
    var startEdges = getStartEdges(startNode, graph);
    return findTrips(startEdges, graph, destinationNode, stops, distance)
        .filter(function (trip) { return endsAtDestinationNode(trip, destinationNode); });
}
function getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, stops) {
    return findTripsEndingAtDestinationNode(graph, startNode, destinationNode, stops)
        .length;
}
exports.getNumberOfTripsWithMaxStops = getNumberOfTripsWithMaxStops;
function getNumberOfTripsWithExactStops(graph, startNode, destinationNode, stops) {
    return findTripsEndingAtDestinationNode(graph, startNode, destinationNode, stops)
        .filter(function (trip) { return hasExactStops(trip, stops); })
        .length;
}
exports.getNumberOfTripsWithExactStops = getNumberOfTripsWithExactStops;
function getShortestTripDistance(graph, startNode, destinationNode) {
    return findTripsEndingAtDestinationNode(graph, startNode, destinationNode)
        .map(getTotalTripDistance)
        .sort(sortInAscendingOrder)[0];
}
exports.getShortestTripDistance = getShortestTripDistance;
function getNumberOfTripsLessThanDistance(graph, startNode, destinationNode, distance) {
    return findTripsEndingAtDestinationNode(graph, startNode, destinationNode, null, distance)
        .length;
}
exports.getNumberOfTripsLessThanDistance = getNumberOfTripsLessThanDistance;
