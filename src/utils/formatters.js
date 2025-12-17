// Helper function for rotating icons to match a forecast from direction (e.g. winddir or wavedir)
export const toDirection = (fromDegrees) => {
  return Math.round((fromDegrees + 180) % 360);
};

// Helper function to format direction (e.g., convert degrees to 'NW')
export const directionCaption = (degrees) => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return directions[toDirection(degrees)];
};

// Helper function to round a value to desired precision
export const round = (value, precision = 0) => {
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}
