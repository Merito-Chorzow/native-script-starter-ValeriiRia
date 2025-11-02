import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

@Component({
  selector: 'ns-settings',
  standalone: true,
  imports: [NativeScriptCommonModule],
  templateUrl: './settings.component.html',
  schemas: [NO_ERRORS_SCHEMA]
})
export class SettingsComponent {}