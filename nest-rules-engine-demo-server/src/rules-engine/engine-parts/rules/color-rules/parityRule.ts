import IColorRule from '../../interfaces/color-rule.interface';

export default class ParityRule implements IColorRule {
  calculateColor(name: string[], baseColor: number): number {
    if (name.length % 2 === 0) {
      return baseColor + 0x444444;
    } else {
      return baseColor - 0x111111;
    }
  }
}
