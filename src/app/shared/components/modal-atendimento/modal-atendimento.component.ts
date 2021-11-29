import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-atendimento',
  templateUrl: './modal-atendimento.component.html',
  styleUrls: ['./modal-atendimento.component.scss']
})
export class ModalAtendimentoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalAtendimentoComponent>,
  ) { }

  ngOnInit(): void {
  }

  atendimento($event:any): void {
    console.log('Teste')
    this.dialogRef.close();
  }

}
