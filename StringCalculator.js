//stringCalculator.js

function add(number){
	if(number == ""){
		return 0;
	}

	if(number.includes(",")){
		var numberArr = number.split(/[',', '\n']+/);
		var result = 0;
		for(var i = 0; i < numberArr.length; i++){
			result = result + parseInt(numberArr[i]);
		}
		return result;
	}
	else {
		return parseInt(number);
	}
}

module.exports = add;