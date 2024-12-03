import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { LeadModel } from 'src/app/models/lead.model';
import { ComponentsService } from 'src/app/services/componets.service';
import { LeadService } from 'src/app/services/lead.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  listInvited: LeadModel[] = []; 
  listAccepted: LeadModel[] = []; 
  isLoading = this.componentsService.isLoading$;

  constructor(private leadService: LeadService,private componentsService: ComponentsService) { }

  async ngOnInit() {
    await this.loadInvites();
    await this.loadAccepts();
  }

  async loadAccepts(){
    this.listAccepted = await lastValueFrom(this.leadService.getAcceptedLeads());
    this.componentsService.closeLoading();
  }

  async loadInvites(){
    this.componentsService.showLoading();
    this.listInvited = await lastValueFrom(this.leadService.getInvitedLeads());
    await this.loadInvites();
    this.componentsService.closeLoading();
  }

  async confirmAccept(lead: LeadModel){
    try{
      this.componentsService.showLoading();
      console.log(lead);
      await lastValueFrom(this.leadService.acceptedLead(Number(lead.id)));
      this.componentsService.closeLoading();
      this.componentsService.showSuccess("Ação realizada com sucesso!")
    }
    catch{
      this.componentsService.showError("Ocorreu um erro ao realizar sua ação!");
    }
  }

  async confirmDecline(lead: LeadModel){
    try{
      this.componentsService.showLoading();
      console.log(lead);
      await lastValueFrom(this.leadService.declinedLead(Number(lead.id)));
      this.componentsService.closeLoading();
      this.componentsService.showSuccess("Ação realizada com sucesso!")
    }
    catch{
      this.componentsService.showError("Ocorreu um erro ao realizar sua ação!")
    }
  }

  onTabChange(index: number): void {
    if(index == 1){
      this.loadAccepts();
    }
    else {
      this.loadInvites();
    }
  }

  trackById(index: number, lead: any): number {
    return lead.id;
  }
}
