import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public dialog: MatDialog
  name : string;
  animal : string;

  constructor(dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }



}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

};
