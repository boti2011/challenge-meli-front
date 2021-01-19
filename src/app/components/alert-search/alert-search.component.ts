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
  public totalItemsToShow = 5;
  public totalPages = 0;
  public currentPage = 0;
  public textServerNameSearch = '';
  public textDescriptionSearch = '';
  public textAllFieldsSearch = '';
  public alerts: Alert[] = [];

  constructor(private searchAlertService: SearchAlertService) { }

  ngOnInit(): void {
    this.getAlertsByFilter('S*', '', '', true);
  }

  // tslint:disable-next-line:typedef
  getAlertsByFilter(textServerNameSearch: string, textDescriptionSearch: string, textAllFieldsSearch: string, isInitialSearch: boolean) {
    if (isInitialSearch) {
      this.currentPage = 0;
    }

    if (textServerNameSearch !== '' && textDescriptionSearch === '' && textAllFieldsSearch === '') {
      this.searchAlertService.getAlertsByServerName(textServerNameSearch, this.currentPage, this.totalItemsToShow).subscribe(
        (res) => {
          this.alerts = res.data.alerts;
          this.totalItems = res.data.totalItems;
          this.totalPages = res.data.totalPages;
          this.currentPage = res.data.currentPage;
        },
        (error) => {
          console.log('Error {}', JSON.stringify(error));
        }
      );
    } else if (textDescriptionSearch !== '' && textServerNameSearch === '' && textAllFieldsSearch === '') {
      this.searchAlertService.getAlertsByDescriptionAlert(textDescriptionSearch, this.currentPage, this.totalItemsToShow).subscribe(
        (res) => {
          this.alerts = res.data.alerts;
          this.totalItems = res.data.totalItems;
          this.totalPages = res.data.totalPages;
          this.currentPage = res.data.currentPage;
        },
        (error) => {
          console.log('Error {}', JSON.stringify(error));
        }
      );
    }
  }

  // tslint:disable-next-line:typedef
  onDataChange(event: any) {
    this.currentPage = event - 1;
    this.getAlertsByFilter(this.textServerNameSearch, this.textDescriptionSearch, this.textAllFieldsSearch, false);
  }

}
