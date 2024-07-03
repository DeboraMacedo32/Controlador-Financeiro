import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Observer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';
import { Item } from '../item/item.model';
import { ItemService } from '../item.service';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  isHandset$: Observable<boolean>;
  readonly date = new FormControl(moment());

  constructor(private breakpointObserver: BreakpointObserver, private itemCadastrar: ItemService) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  public setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value ?? moment();
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

 public adicionarItem() {
    const novoItem: Item = {
      id: '', 
      data: '10/07/2024',
      tipo: 'boleto',
      valor: 150,
      texto: 'Novo item adicionado',
      categoria: 'outros'
    };

    const observer: Observer<Item> = {
      next: (response) => {
        alert('Item adicionado com sucesso:');
      },
      error: (error) => {
        alert('Erro ao adicionar item:');
      },
      complete: () => {
        alert('Adição de item completa');
      }
    };

    this.itemCadastrar.cadastrar(novoItem).subscribe(observer);
  }

}


