import IColorRule from "../interfaces/color-rule.interface";

export default class IsPositiveRule implements IColorRule {
  calculateColor(_: string[], baseColor: number): number {
    if (baseColor < 0x000000) return 0x000000;
    return baseColor;
  }
}
