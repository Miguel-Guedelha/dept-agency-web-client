import { DataParameters } from "./parameters";

export interface CityLocation {
  id: number;
  city: string;
  name: string;
  parameters: DataParameters[];
}
