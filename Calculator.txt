<!DOCTYPE html>
<html>
<head>
	<title>mY fIRST cALCULATOR</title>
	<style>
		#calc-contain {
			position: relative;
			width: 300px;
			border: 2px solid black;
			border-radius: 4px;
		}
		input type="button" {
			background: black;
			width: 20%;	
			border-radius: 4px;
			margin: 2%;
			font-weight: 900;
			font-size: 20px;
		}
		input [type=text] {
			position: relative;
			display: black;
			width: 90px;
			margin: 5px auto;
			font-size: 20px;
		}
	</style>

</head>
<body>
	<div id="calc-contain">
		<form name="calculator">
			<input type="text" name="answer" disabled="" /> <br />
			<input type="button" value="1" onclick="calculator.answer.value += '1'">
			<input type="button" value="2" onclick="calculator.answer.value += '2'">
			<input type="button" name="three" value="3" onclick="calculator.answer.value += '3'">
			<input type="button" name="add" value="+" onclick="calculator.answer.value += '+'">
			<br />
			<input type="button" name="four" value="4" onclick="calculator.answer.value += '4'">
			<input type="button" name="five" value="5" onclick="calculator.answer.value += '5'">
			<input type="button" name="six" value="6" onclick="calculator.answer.value += '6'">
			<input type="button" name="subtract" value="-" onclick="calculator.answer.value += '-'">
			<br />
			<input type="button" name="seven" value="7" onclick="calculator.answer.value += '7'">
			<input type="button" name="eight" value="8" onclick="calculator.answer.value += '8'">
			<input type="button" name="nine" value="9" onclick="calculator.answer.value += '9'">
			<input type="button" name="multiply" value="x" onclick="calculator.answer.value += '*'">
			<br />
			<input type="button" name="c" value="c" onclick="calculator.answer.value += ''">
			<input type="button" name="zero" value="0" onclick="calculator.answer.value += '0'">
			<input type="button" name="equal" value="=" onclick="calculator.answer.value = eval(calculator.answer.value)">
			<input type="button" name="divide" value="/" onclick="calculator.answer.value += '/'">
		</form>
	</div>
</body>
</html>