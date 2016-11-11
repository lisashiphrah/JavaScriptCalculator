$(document).ready(function(){

	var firstNumber = 0;
	var secondNumber = 0;
	var clearScreen = false;
	var operation = '';


	/**************************************************************

	*	FUNCTIONS AND EVENTS RELATED TO OPERATION BUTTONS
	
	**************************************************************/

	$('.calculatorButtonOperation').click(function(){
		var operationSelected = $(this).attr('id');
		switch(operationSelected){
			case 'powOperation':
				operation = 'pow';
			break;
			case 'percentageOperation':
				operation = 'percentage';
			break;
			case 'divOperation':
				operation = 'div';
			break;
			case 'subOperation':
				operation = 'sub';
			break;
			case 'plusOperation':
				operation = 'plus';
			break;
			case 'multiOperation':
				operation = 'multi';
			break;
			case 'equalOperation':
				secondNumber = parseFloat($('#screen').val());
				calculateResult();
			break;
		}

		if(operationSelected !== 'equalOperation') {
			firstNumber = parseFloat($('#screen').val());
			clearScreen = true;
		}
	});


	/**************************************************************

	*	HELPERS AND OTHER FUNCTIONS
	
	**************************************************************/

	//Calculates the resut based in the numbers on the screen
	function calculateResult() {
		var result = 0;
		switch(operation){
			case 'plus':
				result = firstNumber + secondNumber;
				$('#screen').val(result);			
			break;
		}
	}

	//Clears the calculator display
	function cleanDisplay() {
		$('#screen').val('');
		clearScreen = false;
	}




	/**************************************************************

	*	FUNCTIONS AND EVENTS RELATED TO NUMBER BUTTONS

	**************************************************************/

	$('.calculatorButtonNumber').click(function(){
		var buttonSelected = $(this).find('span')[0].innerText;
		buttonSelected = parseInt(buttonSelected);

		if(isNaN(buttonSelected)) {
			if($(this).attr('id') === 'btnDot'){
				var currentVal = $('#screen').val();
				$('#screen').val(currentVal + '.')
			}
			else if($(this).attr('id') === 'cleanOperation'){
				$('#screen').val('0')
				firstNumber = 0;
				secondNumber = 0;
				clearScreen = true;
			}
		}
		else {
			if(clearScreen) {
				cleanDisplay();
			}
			var currentVal = $('#screen').val();
			$('#screen').val(currentVal + buttonSelected);
		}
	});
});