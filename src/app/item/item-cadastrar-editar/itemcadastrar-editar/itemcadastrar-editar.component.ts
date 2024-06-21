import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../../item.service';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-itemcadastrar-editar',
  templateUrl: './itemcadastrar-editar.component.html',
  styleUrl: './itemcadastrar-editar.component.scss'
})
export class ItemCadastrarEditarComponent implements OnInit {

  public formGroup!: FormGroup;
  public startDate: any;

  constructor(private formBuilder: FormBuilder,
    private itemService: ItemService,
  private router : Router) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      data: ["", Validators.required],
      tipo: ["", Validators.required],
      valor: [0, Validators.required],
      texto: ["", Validators.required],
      categoria: ['', Validators]
    })
  }

  public salvar(): void {
    this.itemService.cadastrar(this.formGroup.value).subscribe({
      next: () => {
        this.router.navigateByUrl("/itens");
      },
      error: (error) => {
        alert("Erro ao cadastrar " + JSON.stringify(error));
      }
    });
  }
}
