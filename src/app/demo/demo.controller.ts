import * as angular from 'angular';

export class DemoController {
  static $inject:Array<string> = [];
  
  message: string = 'Hi there';

  constructor() {
  }


}

angular.module('app').controller('DemoController', DemoController);