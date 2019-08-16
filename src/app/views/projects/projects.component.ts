import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateUpdateProjectComponent} from './create-update-project/create-update-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  createProject() {
    const modalRef = this.modalService.open(CreateUpdateProjectComponent, {
      backdrop: 'static',
      centered: false,
      keyboard: false
    });
    modalRef.componentInstance.name = 'World';
  }

}
