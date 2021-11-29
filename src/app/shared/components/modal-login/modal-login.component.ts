import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {


  constructor(

    public dialogRef: MatDialogRef<ModalLoginComponent>,
  ) { }

  ngOnInit(): void {

  }

  entrar($event:any): void {
    console.log('entrei')
    this.dialogRef.close();
  }

  fechar($event:any): void {
    console.log('fechei')
    this.dialogRef.close();
  }

}
