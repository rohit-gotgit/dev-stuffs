export function getTrafficAction(color) {
  if (typeof color !== "string") {
    return "INVALID SIGNAL";
  }

  switch (color.toLowerCase()) {
    case "green":
      return "GO";

    case "yellow":
      return "SLOW DOWN";

    case "red":
      return "STOP";

    case "flashing red":
      return "STOP AND PROCEED WITH CAUTION";

    default:
      return "INVALID SIGNAL";
  }
}
