import importGraph from './importGraph';
import getRouteDistance from './getRouteDistance';
import { getNumberOfTripsWithMaxStops, getNumberOfTripsWithExactStops, getShortestTripDistance, getNumberOfTripsLessThanDistance, } from './tripData';
function getTestOutput(fileName) {
    return importGraph(fileName)
        .then((graph) => {
        const outputs = [
            getRouteDistance(graph, 'A-B-C'),
            getRouteDistance(graph, 'A-D'),
            getRouteDistance(graph, 'A-D-C'),
            getRouteDistance(graph, 'A-E-B-C-D'),
            getRouteDistance(graph, 'A-E-D'),
            getNumberOfTripsWithMaxStops(graph, 'C', 'C', 3),
            getNumberOfTripsWithExactStops(graph, 'A', 'C', 4),
            getShortestTripDistance(graph, 'A', 'C'),
            getShortestTripDistance(graph, 'B', 'B'),
            getNumberOfTripsLessThanDistance(graph, 'C', 'C', 30),
        ];
        return outputs.reduce((aggOutput, output, index) => `${aggOutput}Output #${index + 1}: ${output}\n`, '');
    });
}
export default getTestOutput;
