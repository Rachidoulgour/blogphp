import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from 'src/app/interfaces/Publication';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-homeoffline',
  templateUrl: './homeoffline.page.html',
  styleUrls: ['./homeoffline.page.scss'],
})
export class HomeofflinePage implements OnInit {

  city: String = '';
  searchQuery: String = '';
  value = '';
  panelOpenState = false;
  url: string;
  status: string;
  page;
  total;
  pages;
  itemsPerPage: any;
  exchangeBooks: Publication[];
  sellBooks: Publication[];
  demandBooks: Publication[];
  donationBooks: Publication[];
  private URL = "http:localhost:3000/api";
  unreed: number;
  error500;
  adding: boolean;
  constructor(
    private router: Router,
    private publicationService: PublicationService,
  ) { }

  ngOnInit() {
    this.getHomepageExchangeBooks();
    this.getHomepageDonationBooks();
    this.getHomepageDemandBooks();
    this.getHomepageSellBooks()
  }

  getHomepageExchangeBooks() {
    this.publicationService.getHomepageExchangeBooks().subscribe(
      res => {
        
        this.exchangeBooks = res['publications'];
       
      },
      err => {
        console.log(err)
      }
    )
  }

  getHomepageSellBooks() {
    this.publicationService.getHomepageSellBooks().subscribe(
      res => {
        
        this.sellBooks = res['publications'];
        
      },
      err => {
        console.log(err)
      }
    )
  }

  getHomepageDonationBooks() {
    this.publicationService.getHomepageDonationBooks().subscribe(
      res => {
        
        this.donationBooks = res['publications'];
        
      },
      err => {
        console.log(err)
      }
    )
  }

  getHomepageDemandBooks() {
    this.publicationService.getHomepageDemandBooks().subscribe(
      res => {
        
        this.demandBooks = res['publications'];
        
      },
      err => {
        console.log(err)
      }
    )
  }

}
