var demoApp = angular.module('demoApp', ['bam.filtering']);

demoApp.controller("demoAppCtrl", ['$scope', function($scope) {

	$scope.greaterThanFilterValues = [
		{},
		{"key1": {}},
		{"key1": {"key2": {}}},
		{"key1": {"key2": {"key3": 0}}},
		{"key1": {"key2": {"key3": 1}}},
		{"key1": {"key2": {"key3": 2}}},
		{"key1": {"key2": {"key3": 3}}},
		{"key1": {"key2": {"key3": 3.5}}}
	];

	$scope.lessThanFilterValues = [
		{},
		{"key1": {}},
		{"key1": {"key2": {}}},
		{"key1": {"key2": {"key3": 0}}},
		{"key1": {"key2": {"key3": 1}}},
		{"key1": {"key2": {"key3": 2}}},
		{"key1": {"key2": {"key3": 3}}},
		{"key1": {"key2": {"key3": 3.5}}}
	];

	$scope.greaterThanWordCountValues = [
		{},
		{"key1": {}},
		{"key1": {"key2": {}}},
		{"key1": {"key2": {"key3": "oneword"}}},
		{"key1": {"key2": {"key3": "two words"}}},
		{"key1": {"key2": {"key3": "there words here"}}},
		{"key1": {"key2": {"key3": "There are 4 lights"}}}
	];

	$scope.lessThanFilterValues = [
		{},
		{"key1": {}},
		{"key1": {"key2": {}}},
		{"key1": {"key2": {"key3": "oneword"}}},
		{"key1": {"key2": {"key3": "two words"}}},
		{"key1": {"key2": {"key3": "there words here"}}},
		{"key1": {"key2": {"key3": "There are 4 lights"}}}
	];


}]);