export function textForBackground(bg = "") {
  if (bg === "transparent") {
    return "";
  }

  if (bg.toLowerCase() === "#00524e") {
    return "#fff";
  }

  return "#272727";
}

export function complementaryColor(primary = "") {
  switch (primary.toLowerCase()) {
    case "#dedb7b":
      return "#c4b2f6";

    case "#c4b2f6":
      return "#dedb7b";

    case "#fcd5db":
      return "#c4b2f6";

    case "#ed7a5f":
      return "#dedb7b";

    case "#00524e":
      return "#fcd5db";

    default:
      return "transparent";
  }
}
