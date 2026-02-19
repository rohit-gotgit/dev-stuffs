export function getMovieAudience(rating) {
  if (typeof rating !== "string") return "INVALID RATING";

  switch (rating.toUpperCase()) {
    case "G":
      return "GENERAL AUDIENCE";
    case "PG":
      return "PARENTAL GUIDANCE";
    case "PG-13":
      return "TEENS 13+";
    case "R":
      return "RESTRICTED";
    default:
      return "INVALID RATING";
  }
}
