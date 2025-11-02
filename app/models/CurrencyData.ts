import { Country } from './Country';
import { Behavior } from './Behavior';

export interface CurrencyData {
  country: Country;
  value: number;
  behavior: Behavior;
}
