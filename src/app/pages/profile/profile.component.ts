import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MessageService],

  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 400px;
        height: 50px;
        padding: 5px;

        outline: 0;
        border-radius: 10px;
        border-style: none;
        margin-bottom: 15px;
        align-items: center;
        background-color: #161616;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  ngOnInit(): void {}
  uploadedFiles: any[] = [];

  onBasicUpload(event: { files: any }) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }

  value1!: string;
  value2!: string;
  value3!: string;
  value4!: string;
  value5!: string;
  value6!: string;
  value7!: string;
}
