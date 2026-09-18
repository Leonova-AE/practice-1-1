// Тип валюты - только три варианта 
export type Currency = "USD" | "EUR" | "RUB";

// Сколько рублей стоит 1 едиенца валюты
const RATES: Record<Currency, number> = {
  USD: 100,
  EUR: 120,
  RUB: 1,
};

export function convertCurrency(amount: number, from: Currency, to: Currency): number {
  if (from === to) {
    return amount;
  }
  const amountInRub = amount * RATES[from];
  return amountInRub / RATES[to];
}

export function formatCurrency(amount: number, currency: Currency): string {
  return `${amount.toFixed(2)} ${currency}`;
}