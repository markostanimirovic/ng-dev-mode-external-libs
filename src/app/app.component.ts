import { Component } from '@angular/core';
import { freeze } from 'immer';
import { localFreeze } from './local-freeze';

declare const ngDevMode: boolean;

if (typeof ngDevMode === 'undefined' || ngDevMode) {
  console.log('=== dev mode ===');
  freeze({});
  localFreeze({});
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<p>Test</p>',
})
export class AppComponent {}
