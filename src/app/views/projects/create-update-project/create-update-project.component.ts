import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from '../../../_services/api.service';
import {Project} from '../../../_model/project';
import {NotifyService} from '../../../_services/notify.service';

@Component({
  selector: 'app-create-update-project',
  templateUrl: './create-update-project.component.html',
  styleUrls: ['./create-update-project.component.scss']
})
export class CreateUpdateProjectComponent implements OnInit {

  @Input() name;

  form: any = {};
  disabled = false;
  submitted = false;
  private project: Project;


  constructor(public activeModal: NgbActiveModal,
              private api: ApiService,
              private notify: NotifyService) {
  }

  ngOnInit() {
  }

  onRest(form: any) {
    this.submitted = false;
    form.reset();
  }

  hasErrors(field: any) {
    return (field.invalid && field.touched && field.errors);
  }

  onSubmit() {
    this.project = new Project();
    this.project.name = this.form.projName;
    this.project.projKey = this.form.projKey;
    this.project.path = this.form.path;
    this.project.username = this.form.userName;
    this.project.password = this.form.password;

    this.disabled = true;

    this.api.createProject(this.project).subscribe(
      data => {
        this.notify.onSuccess('Projects', 'Project Created Successfully');
        this.disabled = false;
      },
      error => {
        this.disabled = false;
      });
  }

}
