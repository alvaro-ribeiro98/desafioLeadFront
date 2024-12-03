import { HttpClient } from '@angular/common/http';
import { LeadModel } from '../models/lead.model';
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable()
export class LeadService {

  constructor(private http: HttpClient) {
  }

  private api: string = environment.apiUrl + '/lead';

  public getInvitedLeads() {
    return this.http.get<LeadModel[]>(this.api.concat('/invited'));
  }
  public getAcceptedLeads() {
    return this.http.get<LeadModel[]>(this.api.concat('/accepted'));
  }
  public acceptedLead(leadId: number) {
    return this.http.post<any>(this.api.concat(`/accept`),leadId);
  }
  public declinedLead(leadId: number) {
    return this.http.post<any>(this.api.concat(`/decline`),leadId);
  }
}
