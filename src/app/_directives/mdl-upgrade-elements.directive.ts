import {AfterViewChecked, Directive} from '@angular/core';

declare var componentHandler: any;

@Directive({
  selector: '[appMdlUpgradeElements]'
})
export class MdlUpgradeElementsDirective implements AfterViewChecked {

  constructor() {
  }

  ngAfterViewChecked() {
    componentHandler.upgradeAllRegistered();
  }

}
