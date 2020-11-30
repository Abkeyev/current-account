export enum Type {
  Entity = "1",
  Entrepreneur = "0",
}

export interface RequestInfo {
  type?: Type;
  fio?: string;
  iin?: string;
  phone?: string;
  amount?: number;
  period?: number;
}

export class BusinessInfo {
  description: string = "";
  hasLicense: boolean = false;
  address: string = "";
  numberOfEmloyees: number = 0;
  purpose: string = "";
  wantGovProgram: boolean = false;
  govProgram: string = "";
}

export class Provision {
  type: string = "";
  description: string = "";
  price: number = 0;
}

export class GrowingBusinessBaseModel {
  requestInfo?: RequestInfo;
  businessInfo: BusinessInfo = new BusinessInfo();
  provision: Provision[] = [new Provision()];
  status?: string = "Одобрен";
}
