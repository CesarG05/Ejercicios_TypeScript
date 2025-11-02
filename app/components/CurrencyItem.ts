import { CurrencyData } from "../models/CurrencyData";

export class CurrencyItem {
  constructor(private data: CurrencyData) {}

  render(): HTMLElement {
    const tr = document.createElement("tr");

    const flag = document.createElement("td");
    flag.innerHTML = `<span class="flag-icon flag-icon-${this.data.country.code}"></span>`;

    const name = document.createElement("td");
    name.textContent = this.data.country.name;

    const currency = document.createElement("td");
    currency.textContent = this.data.country.currency;

    const value = document.createElement("td");
    value.textContent = this.data.value.toFixed(2);

    const behavior = document.createElement("td");

    let iconClass = "";
    let colorClass = "";

    switch (this.data.behavior.trend) {
      case 1:
        iconClass = "fas fa-arrow-up";
        colorClass = "has-text-success";
        break;
      case -1:
        iconClass = "fas fa-arrow-down";
        colorClass = "has-text-danger";
        break;
      case 0:
      default:
        iconClass = "fas fa-arrows-alt-h";
        colorClass = "has-text-grey";
        break;
    }

    behavior.innerHTML = `<i class="${iconClass} ${colorClass}"></i> ${this.data.behavior.multiplier}`;


    tr.appendChild(flag);
    tr.appendChild(name);
    tr.appendChild(currency);
    tr.appendChild(value);
    tr.appendChild(behavior);

    return tr;
  }
}

