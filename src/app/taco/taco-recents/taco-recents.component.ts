import {Component, OnInit} from '@angular/core';
import {Taco} from "../../model/taco";
import {Observable} from "rxjs";
import {TacoService} from "../../services/taco.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-taco-recents',
  templateUrl: './taco-recents.component.html',
  styleUrls: ['./taco-recents.component.css']
})
export class TacoRecentsComponent implements OnInit {

  public tacos$: Observable<Taco[]>;

  constructor(private tacoService: TacoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.tacos$ = this.tacoService.getRecentTacos();
  }

  designTaco() {
    this.router.navigate(['/design']);
  }

}
