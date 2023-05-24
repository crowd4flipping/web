export class MoneyFormatter {
  private constructor() {}

  static round(amount: number) {
    const format = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return format.format(amount);
  }

  static withUnitySufix(amount: number) {
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixIndex = Math.floor(Math.log10(Math.abs(amount)) / 3);
    const scaledNumber = amount / Math.pow(10, suffixIndex * 3);

    const format = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: suffixIndex == 1 ? 0 : 1,
    });

    return format.format(scaledNumber) + suffixes[suffixIndex] + " €";
  }
}
