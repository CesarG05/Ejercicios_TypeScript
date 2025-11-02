import { CurrencyData } from '../models/CurrencyData';

export class CurrencyService {
  constructor(private sourceUrl: string) {}

  async fetchAll(): Promise<CurrencyData[]> {
    const response = await fetch(this.sourceUrl);
    if (!response.ok) {
      throw new Error(`Error al buscar los datos de ${this.sourceUrl}: ${response.statusText}`);
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [data]; 
  }
}
