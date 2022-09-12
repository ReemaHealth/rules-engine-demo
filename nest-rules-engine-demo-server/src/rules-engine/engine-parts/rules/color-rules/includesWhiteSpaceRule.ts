import IColorRule from '../../interfaces/color-rule.interface';

export default class IncludesWhiteSpaceRule implements IColorRule {
  calculateColor(name: string[], baseColor: number): number {
    if (name.includes(' ')) {
      if (name.filter((a) => a === ' ').length > 1) {
        return baseColor + 0x900000;
      } else {
        return baseColor + 0x600000;
      }
    }
    return baseColor;
  }
}
