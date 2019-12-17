const cardinalDirections = {
  NORTH: 'North',
  NORTHEAST: 'Northeast',
  EAST: 'East',
  SOUTHEAST: 'Southeast',
  SOUTH: 'South',
  SOUTHWEST: 'Southwest',
  WEST: 'West',
  NORTHWEST: 'Northwest',
};

const degreesToCardinalDirectionsMap = [
  { start: 337.5, end: 360, direction: cardinalDirections.NORTH },
  { start: 0, end: 22.5, direction: cardinalDirections.NORTH },
  { start: 22.5, end: 67.5, direction: cardinalDirections.NORTHEAST },
  { start: 67.5, end: 112.5, direction: cardinalDirections.EAST },
  { start: 112.5, end: 157.5, direction: cardinalDirections.SOUTHEAST },
  { start: 157.5, end: 202.5, direction: cardinalDirections.SOUTH },
  { start: 202.5, end: 247.5, direction: cardinalDirections.SOUTHWEST },
  { start: 247.5, end: 292.5, direction: cardinalDirections.WEST },
  { start: 292.5, end: 337.5, direction: cardinalDirections.NORTHWEST },
];

export default {
  getWindCardinalDirection(degrees) {
    for (let i = 0; i < degreesToCardinalDirectionsMap.length; i++) {
      const curr = degreesToCardinalDirectionsMap[i];
      if (degrees > curr.start && degrees < curr.end) {
        return curr.direction;
      }
    }
  },
  mpsTokmph(mpsVal) {
    return Math.round(mpsVal * 3.6);
  },
};
