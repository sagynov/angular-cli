import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id {{departmentId}}</h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>

    <div>
      <button (click)="gotoDepartments()">Back</button>
     </div>
  `,
  styles: [`
  a {
    display: inline-block;
    color: #333;
    margin-right: 10px;
    cursor: pointer;
    border: 1px solid #999;
    padding: 10px;
  }
  div {
    margin: 10px 0;
  }

  `]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }
  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route})
  }
  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route})
  }

}
