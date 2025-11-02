import { CurrencyService } from "../service/CurrencyService";
import { CurrencyItem } from "./CurrencyItem";

export class Dashboard {
  constructor(private sourceUrl: string) {}

  async show(containerSelector: string) {
    const service = new CurrencyService(this.sourceUrl);
    const currencies = await service.fetchAll();
    const tbody = document.querySelector(containerSelector);

    if (!tbody) return;

    currencies.forEach(c => {
      const item = new CurrencyItem(c);
      tbody.appendChild(item.render());
    });
  }
}
