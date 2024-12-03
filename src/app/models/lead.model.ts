export class LeadModel {
  constructor(
    public id?: number,
    public fullName?: string,
    public firstName?: string,
    public suburb?: string,
    public category?: string,
    public description?: number,
    public phoneNumber?: number,
    public email?: string,
    public status?: string,
    public job?: string,
    public jobId?: number,
    public price?: number,
    public createDate?: Date
  ) { }
}
