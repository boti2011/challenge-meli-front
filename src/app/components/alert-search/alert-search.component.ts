import { Component, OnInit } from '@angular/core';
import { SearchAlertService } from '../../services/search-alert.service';
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-alert-search',
  templateUrl: './alert-search.component.html',
  styleUrls: ['./alert-search.component.css']
})
export class AlertSearchComponent implements OnInit {

  public totalItems = 1;
  public totalItemsToShow = 2;
  public totalPages = 0;
  public currentPage = 0;
  public textSearch = '';
  public textDescriptionSearch = '';
  public textAllFieldsSearch = '';
  public alerts: Alert[] = [];

  constructor(private searchAlertService: SearchAlertService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getAlertsByFilter(textSearch: string, isInitialSearch: boolean) {
    if (isInitialSearch) {
      this.currentPage = 0;
    }

    this.searchAlertService.getAlertsByAnyField(textSearch, this.currentPage, this.totalItemsToShow).subscribe(
      (res) => {
        if (res.status === 404) {
          this.alerts = [];
        } else {
          this.alerts = res.data.alerts;
          this.totalItems = res.data.totalItems;
          this.totalPages = res.data.totalPages;
          this.currentPage = res.data.currentPage;
        }
      },
      (error) => {
        console.log('Error {}', JSON.stringify(error));
        this.alerts = [];
      }
    );
  }

  // tslint:disable-next-line:typedef
  onDataChange(event: any, textSearch: string) {
    this.currentPage = event - 1;
    this.getAlertsByFilter(textSearch, false);
  }

}
