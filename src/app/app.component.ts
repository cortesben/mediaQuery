import { Component } from '@angular/core';
import { MediaQuery } from './app.mediaQuery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  // matchMedia booleans
  public isPhone: boolean;
  public isTabletPlus: boolean;

  constructor(private mediaQuery: MediaQuery) {

    const UNIT = {
      one: '320px',
      two: '768px',
      three: '1024px'
    };
    const MEDIA_QUERY = {
      phone: `screen and (min-width: ${UNIT.one}) and (max-width: ${UNIT.two})`,
      tablet: `screen and (min-width: ${UNIT.two}) and (max-width: ${UNIT.three})`,
      tabletPlus: `screen and (min-width: ${UNIT.two})`,
      desktop: `screen and (min-width: ${UNIT.three})`
    };

    console.log(mediaQuery.doesMatch(MEDIA_QUERY.tabletPlus));
  }
}
