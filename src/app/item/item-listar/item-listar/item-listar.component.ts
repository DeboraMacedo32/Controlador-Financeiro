import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from '../../../item.service';
import { Item } from '../../item.model';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrl: './item-listar.component.scss'
})
export class ItemListarComponent implements OnInit {

  itens$!: Observable<Item[]>;
  colunasTabela = ['id', 'data', 'tipo', 'valor', 'texto']

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.listarItens();
  }

  listarItens() {
    this.itens$ = this.itemService.listar();
  }
}
