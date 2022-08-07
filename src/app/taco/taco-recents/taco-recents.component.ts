import {Component, OnInit} from '@angular/core';
import {Taco} from "../../model/taco";
import {Observable} from "rxjs";
import {TacoService} from "../../services/taco.service";

@Component({
  selector: 'app-taco-recents',
  templateUrl: './taco-recents.component.html',
  styleUrls: ['./taco-recents.component.css']
})
export class TacoRecentsComponent implements OnInit {

  public tacos$: Observable<Taco[]>;

  constructor(private tacoService: TacoService) {
  }

  ngOnInit(): void {
    this.tacos$ = this.tacoService.getRecentTacos();
  }

}
