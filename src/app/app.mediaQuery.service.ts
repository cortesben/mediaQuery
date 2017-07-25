import { WindowRefService } from './window-ref.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MediaQuery {

  constructor(private window: WindowRefService) {
    console.log(window);
  }

  doesMatch(mediaQuery: string): boolean {
    return this.window.nativeWindow.matchMedia(mediaQuery).matches;
  }

}
