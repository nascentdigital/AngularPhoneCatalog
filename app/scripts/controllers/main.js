'use strict';

/**
 * @ngdoc function
 * @name angularPhoneCatalogueApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPhoneCatalogueApp
 */
angular.module('angularPhoneCatalogueApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
