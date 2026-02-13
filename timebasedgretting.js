export function getGreeting(hour) {
  if (typeof hour !== "number" || hour < 0 || hour > 23) {
    return "INVALID HOUR";
  }

  if (hour >= 5 && hour <= 11) {
    return "GOOD MORNING";
  } else if (hour <= 16) {
    return "GOOD AFTERNOON";
  } else if (hour <= 20) {
    return "GOOD EVENING";
  } else {
    return "GOOD NIGHT";
  }
}
