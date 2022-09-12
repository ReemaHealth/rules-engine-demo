import IColorRule from "../interfaces/color-rule.interface";

export default class IncludesSpecialRule implements IColorRule {
  calculateColor(name: string[], baseColor: number): number {
    const special = "~!@#$%^&*_-+=`|(){}[]:;\"'<>,.?/";

    if (name.some((a) => special.includes(a))) {
      if (name.filter((a) => special.includes(a)).length > 1) {
        return baseColor + 0x000009;
      } else {
        return baseColor + 0x000006;
      }
    }
    return baseColor;
  }
}
