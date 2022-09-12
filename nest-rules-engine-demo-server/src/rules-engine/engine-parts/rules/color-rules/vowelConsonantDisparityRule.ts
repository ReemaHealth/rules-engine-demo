import IColorRule from '../../interfaces/color-rule.interface';

export default class VowelConsonantDisparityRule implements IColorRule {
  calculateColor(name: string[], baseColor: number): number {
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    const vowels = 'aeiou';

    const consonantCount = name.filter((a) => consonants.includes(a)).length;
    const vowelCount = name.filter((a) => vowels.includes(a)).length;

    let color = baseColor;

    if (consonantCount > vowelCount) {
      color += 0x00cc00;
    } else if (consonantCount < vowelCount) {
      color += 0x0000cc;
    } else {
      color += 0xcc0000;
    }

    return color;
  }
}
