import { TECNOLOGIES_GOALS, NON_FOUNDER_GOALS } from "@/constants";

export function getGoals(role: "TECNOLOGIES" | "NON_FOUNDER") {
  switch (role) {
    case "TECNOLOGIES":
      return TECNOLOGIES_GOALS;
    case "NON_FOUNDER":
    default:
      return NON_FOUNDER_GOALS;
  }
}
