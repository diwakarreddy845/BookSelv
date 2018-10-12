import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Book } from '../model/book.model';
import { MatSort, MatTableDataSource, PageEvent, MatDialog } from '@angular/material';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})

export class LandingpageComponent implements OnInit {
  checked = false;
  displayedColumns: string[] = ['select', 'name', 'author', 'edition', 'publishedDate', 'eBook', 'category'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private loginService: LoginService, public dialog: MatDialog) {

  }

  dataSource = new MatTableDataSource<Book>();
  length = 10;
  pageSize = 5;
  pageSizeOptions = [5, 10, 25, 100];


  book: Book[];
  event: PageEvent

  ngOnInit() {
    this.loginService.getUsers().subscribe(
      (response: Book[]) => {
        this.book = response;
        this.length = this.book.length;
        this.dataSource = new MatTableDataSource(this.book.slice(0, this.pageSize));
        this.dataSource.sort = this.sort;
      }
    );
  }

  toggle(event: PageEvent) {
    const start = event.pageIndex * event.pageSize
    this.dataSource = new MatTableDataSource(
      this.book.slice(start, start + event.pageSize));
    this.dataSource.sort = this.sort;
  }

  bookFormGroup: FormGroup = new FormGroup({
    'name': new FormControl("", [Validators.required]),
    'author': new FormControl("", [Validators.required]),
    'edition': new FormControl("", [Validators.required, Validators.pattern('[0-9]*')]),
    'publishedDate': new FormControl("", [Validators.required]),
    'eBook': new FormControl("", [Validators.required]),
    'category': new FormControl("", [Validators.required])
  });

  openDialog(addBook: boolean): void {
    if (addBook) {
      const dialogRef = this.dialog.open(BookdetailsComponent, {
        width: '400px',
        data: this.bookFormGroup
      });

      dialogRef.afterClosed().subscribe((result: FormGroup) => {
        this.loginService.saveBook(result).subscribe();
        this.book.push(result.value)
        this.length++;
        this.dataSource = new MatTableDataSource(this.book.slice(0, this.pageSize));
        this.dataSource.sort = this.sort;
        this.bookFormGroup.reset()
      });
    } else {

    }
  }

  selection = new SelectionModel(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row=> 
          this.selection.select(row)
        );
  }

  selectedRowIndex: number = -1;

highlight(row){
  if(this.selection.isSelected(row)){
    this.selectedRowIndex =0;
  }else{
    this.selectedRowIndex =  row.id;
  }
  
    
}
changeEvent(row){
  this.selection.toggle(row)
}

}


