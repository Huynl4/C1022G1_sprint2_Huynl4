import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../entity/product";
import {Category} from "../../entity/category";

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent implements OnInit {

  listSearchResults: Product[] = [];
  keyword: string;
  hasMore = false;
  page = 0;
  size = 6;
  private displayedCount: number;
  hiddenSt: boolean = false;
  aquaTypeList: Category[] = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private router: Router,
             ) {
  }

  ngOnInit(): void {
    this.loadAquaType();
    this.activatedRoute.queryParams.subscribe(params => {
      this.keyword = params['name'];
      this.productService.getListSearchResults(this.page, this.size, this.keyword).subscribe(next => {
        console.log(next);
        this.listSearchResults = next;
        if (this.listSearchResults.length === 0){
          this.router.navigate(['/error']);
        }
      })
    });
  }

  loadMore() {
    this.page++;
    this.productService.getListSearchResults(this.page, this.size, this.keyword).subscribe(products => {
      this.listSearchResults.push(...products);
      this.hasMore = products.length === this.size;
      this.displayedCount += this.page;
    });
  }

  private loadAllSearch() {
    this.page = 0;
    this.productService.getListSearchResults(this.page, this.size, this.keyword).subscribe(products => {
      this.listSearchResults = products;
      this.hasMore = products.length === this.size;
    });
  }

  reset() {
    this.loadAllSearch();
  }

  private loadAquaType() {
    this.productService.getAquaTypeList().subscribe(data => {
      this.aquaTypeList = data;
    });
  }

  hiddenStt() {
    this.hiddenSt = true;
  }

  // changeListForOption(id: number) {
  //   debugger
  //   this.aquaProductService.changeListForOption(this.page,this.size,this.keyword,id).subscribe(data=>{
  //     this.listSearchResults = data
  //   })
  //
  // }
  selectedOption: any = 0;

  changeListForOption() {
    this.productService.changeListForOption(this.page, this.size, this.keyword, this.selectedOption)
      .subscribe(data => {

        this.listSearchResults = data;
        // this.listSearchResults = []

      });
  }
}
