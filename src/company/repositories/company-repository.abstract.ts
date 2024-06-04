import { ICompany } from '../entities/company.entity';

export abstract class CompanyRepository {
  abstract insert(data: ICompany): Promise<ICompany>;
}
