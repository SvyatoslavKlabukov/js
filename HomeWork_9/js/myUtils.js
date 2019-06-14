;(function(){
	window.myUtils = {
		min: function(arr){
			let min = arr[0];
			for (let i = 1; i<arr.length; i++){
				if (arr[i] < min) min = arr[i];
			}
			return min;
		},
		max: function(arr){
			let max = arr[0];
			for (let i = 1; i<arr.length; i++){
				if (arr[i] > max) max = arr[i];
			}
			return max;
		},
		sredneeArifmeticheskoe: function(arr){
			let sum = arr[0];
			let i=1;
			for (i =1; i < arr.length; i++){
				sum +=arr[i];
			}
			return sum/i;
		},
		clone: function(arr){
			let arr2 = [];
			for (let i = 0; i < arr.length; i++)
				arr2[i]=arr[i];
			return arr2;
		}
	}
}());