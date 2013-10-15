

var btnIcon = angular.module('btn-icon', []);

btnIcon.controller('MainCtrl', function($scope) {

	$scope.sizes = [
		{name:'16s', value:'btn-icon-16s'},
		{name:'16', value:'btn-icon-16'},
		{name:'32', value:'btn-icon-32'},
		{name:'48', value:'btn-icon-48'},
		{name:'64', value:'btn-icon-64'},
		{name:'80', value:'btn-icon-80'},
		{name:'96', value:'btn-icon-96'},
		{name:'112', value:'btn-icon-112'},
		{name:'128', value:'btn-icon-128'}
	];

	$scope.colors = [
		{name: 'default', value:'btn-default'},
		{name: 'primary', value:'btn-primary'},
		{name: 'warning', value:'btn-warning'},
		{name: 'danger', value:'btn-danger'},
		{name: 'success', value:'btn-success'},
		{name: 'info', value:'btn-info'},
		{name: 'inverse', value:'btn-inverse'}
	]

	$scope.styles = [
		{circle:false, flat:false},
		{circle:true, flat:false},
		{circle:false, flat:true},
		{circle:true, flat:true}
	]

	$scope.icon = {
		size: $scope.sizes[7],
		color: $scope.colors[0],
		circle: true,
		flat: false
	}

	$scope.download = false;

	$('.size-slider').noUiSlider({
		range: [0, $scope.sizes.length - 1],
		start: 7,
		handles: 1,
	}).change(function(){
		current_pos = $(this).val();
		target_pos = Math.round(current_pos);
		$scope.icon.size = $scope.sizes[target_pos];
		$(this).val(target_pos);
		$scope.$apply();
	});

	$('.color-slider').noUiSlider({
		range: [0, $scope.colors.length - 1],
		start: 0,
		handles: 1,
	}).change(function(){
		current_pos = $(this).val();
		target_pos = Math.round(current_pos);
		$scope.icon.color = $scope.colors[target_pos];
		$(this).val(target_pos);
		$scope.$apply();
	});

	$('.style-slider').noUiSlider({
		range: [0, $scope.styles.length - 1],
		start: 1,
		handles: 1
	}).change(function(){
		current_pos = $(this).val();
		target_pos = Math.round(current_pos);
		$scope.icon.circle = $scope.styles[target_pos].circle;
		$scope.icon.flat = $scope.styles[target_pos].flat;
		$(this).val(target_pos);
		$scope.$apply();
	});

});