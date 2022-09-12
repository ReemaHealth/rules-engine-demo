import IColorRule from '../../interfaces/color-rule.interface';

export default class IsSuperRule implements IColorRule {
  calculateColor(name: string[], baseColor: number): number {
    const joinedName = name.join('');
    if (joinedName.includes('super')) {
      return baseColor + 0x333333;
    }
    return baseColor;
  }
}
