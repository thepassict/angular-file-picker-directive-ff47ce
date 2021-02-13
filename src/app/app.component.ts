import { Component, ViewChild } from '@angular/core';

import { FilePickerDirective } from './file-picker.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  _selectedFiles = [];
  _multiple = false;

  @ViewChild('buttonPicker', { static: true })
  _buttonPicker: FilePickerDirective;

  @ViewChild('dropZonePicker', { static: true })
  _dropZonePicker: FilePickerDirective;


  _onFilesChanged(files: FileList) {
    this._selectedFiles = [];
    for (let i = 0; i < files.length; i++) {
      this._selectedFiles.push(files[i]);
    }
  }

  _onReset() {
    this._selectedFiles = [];
  }

  _reset() {
    this._buttonPicker.reset();
    this._dropZonePicker.reset();
  }
}
