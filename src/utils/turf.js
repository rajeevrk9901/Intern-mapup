import * as turf from "@turf/turf";

export function calculateDistance(point1, point2) {
    const from = turf.point(point1);
    const to = turf.point(point2);
    const options = { units: "kilometers" };
    return turf.distance(from, to, options);
}

export function calculateArea(geometry) {
    const area = turf.area(geometry);
    const options = { units: "square kilometers" };
    return turf.convertArea(area, "meters", options).toFixed(2);
}
