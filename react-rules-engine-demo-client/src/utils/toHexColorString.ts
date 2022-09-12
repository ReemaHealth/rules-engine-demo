export default function toHexColorString(hex: number) {
  return "#" + hex.toString(16).toUpperCase().slice(0, 6).padStart(6, "0");
}
