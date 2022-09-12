import toHexColorString from "../../utils/toHexColorString";
import IColorRule from "../interfaces/color-rule.interface";

export default class ColorEngine {
  private _rules: IColorRule[];

  constructor(rules: IColorRule[]) {
    this._rules = rules;
  }

  public calculateColor(name: string): string {
    const arr = name.split("");
    let baseColor = 0x000000;

    this._rules.forEach(
      (rule) => (baseColor = rule.calculateColor(arr, baseColor))
    );

    return toHexColorString(baseColor);
  }
}
