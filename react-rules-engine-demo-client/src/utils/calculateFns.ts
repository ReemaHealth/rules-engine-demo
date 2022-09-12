export function calculateIncludesWhiteSpace(name: string[]): number {
  if (name.includes(" ")) {
    if (name.filter((a) => a === " ").length > 1) {
      return 0x900000;
    } else {
      return 0x600000;
    }
  }
  return 0x000000;
}

export function calculateIncludesSpecial(name: string[]): number {
  const special = "~!@#$%^&*_-+=`|(){}[]:;\"'<>,.?/";

  if (name.some((a) => special.includes(a))) {
    if (name.filter((a) => special.includes(a)).length > 1) {
      return 0x000009;
    } else {
      return 0x000006;
    }
  }
  return 0x000000;
}

export function calculateParity(name: string[]): number {
  if (name.length % 2 === 0) {
    return 0x444444;
  } else {
    return -0x111111;
  }
}

export function calculateVowelConsonantDisparity(name: string[]): number {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const vowels = "aeiou";

  const consonantCount = name.filter((a) => consonants.includes(a)).length;
  const vowelCount = name.filter((a) => vowels.includes(a)).length;

  if (consonantCount > vowelCount) {
    return 0x00cc00;
  } else if (consonantCount < vowelCount) {
    return 0x0000cc;
  } else {
    return 0xcc0000;
  }
}

export function calculateIsPositive(baseColor: number): number {
  if (baseColor < 0x000000) return 0x000000;
  return baseColor;
}
