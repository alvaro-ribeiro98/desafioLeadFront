import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeadModel } from '../models/lead.model';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ComponentsService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading.asObservable();

  showLoading(): void {
    this._isLoading.next(true);
  }

  closeLoading(): void {
    this._isLoading.next(false);
  }

  constructor(private snackBar: MatSnackBar) {}


  showError(message: string, action: string = 'Fechar', duration: number = 5000): void {
    this.snackBar.open(message, action, {
      duration,
      panelClass: ['error-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  showSuccess(message: string, action: string = 'Fechar', duration: number = 5000): void {
    this.snackBar.open(message, action, {
      duration,
      panelClass: ['success-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
