//stringCalculator.js

function add(number){
	if(number == ""){
		return 0;
	}
	if(number.includes(",")){
		var numberArr = number.split(/[',', '\n']+/);
		var result = 0;
		var neg ="Negatives not allowed: ";
		var hasNeg = false;

		numberArr.forEach(function(item, index, array){
			if(item.includes("-")){
				neg = neg + item + ",";
				hasNeg = true;
			}
			else{
				result = result += parseInt(item);
			}
		});

		if(hasNeg){
			throw new Error(neg);
		}
		else {
			return parseInt(result);
		}
	}
	else{
		return parseInt(number);
	}
}

module.exports = add;
