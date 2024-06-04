export interface ICompany {
  cnpj: string;
}

export class CompanyEntity implements ICompany {
  private _cnpj: string;

  constructor(props: ICompany) {
    this._cnpj = props.cnpj;
  }

  get cnpj(): string {
    return this._cnpj;
  }

  set cnpj(value: string) {
    this._cnpj = value;
  }
}
