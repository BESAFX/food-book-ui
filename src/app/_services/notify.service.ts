import {Injectable} from '@angular/core';
import {SnotifyPosition, SnotifyService, SnotifyToastConfig} from 'ng-snotify';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private snotifyService: SnotifyService) {
  }

  getConfig(): SnotifyToastConfig {
    this.snotifyService.setDefaults({
      global: {
        newOnTop: true,
        maxAtPosition: 6,
        maxOnScreen: 8
      }
    });
    return {
      bodyMaxLength: 80,
      titleMaxLength: 15,
      backdrop: -1,
      position: SnotifyPosition.rightTop,
      timeout: 3000,
      showProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true
    };
  }

  onSuccess(title: string, message: string) {
    this.snotifyService.success(message, title, this.getConfig());
  }

  onInfo(title: string, message: string) {
    this.snotifyService.info(message, title, this.getConfig());
  }

  onError(title: string, message: string) {
    this.snotifyService.error(message, title, this.getConfig());
  }

  onWarning(title: string, message: string) {
    this.snotifyService.warning(message, title, this.getConfig());
  }
}
