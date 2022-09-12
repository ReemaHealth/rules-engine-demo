import IColorRule from '../../interfaces/color-rule.interface';

export default class IncludesAtRule implements IColorRule {
  calculateColor(name: string[], baseColor: number): number {
    if (name.includes('@')) {
      return 0xaa00aa;
    }
    return baseColor;
  }
}
