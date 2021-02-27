import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReplaceSource } from 'webpack-sources';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  @Output() fileContentOutput: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  fileContent: string[] = [];

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = (fileReader.result as string).replace(/\n/ig, ' ').replace(/\r/ig, '').split(" ");
      self.fileContentOutput.emit(self.fileContent);
    }
    fileReader.readAsText(file);

    
  }


}
