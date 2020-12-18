export class NumberUtils {
  static balanceOverdraft(amount: number, bankBalance: number, overdraftLimit: number): boolean {
    return amount >= bankBalance + Math.abs(overdraftLimit);
  }

  static roundTwoDecimalPoint(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
