var textNum;

var res;

function transform() {
	textNum = document.getElementById('txt').value;

	res = document.getElementById('res');

	textNum = textNum.toLowerCase();

	var num = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть',
	'семь', 'восемь', 'девять', 'десять'];

	var doz = ['двадцать', 'тридцать', 'сорок', 'пятьдесят',
	 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто',];

	var hund = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот',
	 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот',];

	for (var i = 0; i < num.length; i++) {
		if (textNum == num[i] ) {
			res.innerHTML = i;
		}
		if (textNum == num[i] + 'надцать') {
			res.innerHTML = '1' + i;
		}
		if (textNum == 'двенадцать') {
			res.innerHTML = 12;
		}
		if (textNum == 'четырнадцать') {
			res.innerHTML = 14;
		}
		
		for (var n = 0; n < doz.length + 2; n++) {
			var str = (n + 2);
			if (textNum == doz[n]) {
				res.innerHTML = String(str) + '0';
			}
			if (textNum == doz[n] + ' ' + num[i] ) {
				
				res.innerHTML = String(str) + i;
			}	
				for (var z = 0; z < hund.length; z++) {
				var str1 = (z + 1);
				if (textNum == hund[z]) {
					res.innerHTML = String(str1) + '00';
				}
				if (textNum == hund[z] + ' ' + doz[n]) {
					res.innerHTML = String(str1) + String(str) + '0';
				}
				if (textNum == hund[z] + ' ' + num[i]) {
					res.innerHTML = String(str1) + '0' + i;
				}
				if (textNum == hund[z] + ' ' + 'десять') {
					res.innerHTML = String(str1) + i;
				}
				if (textNum == hund[z] + ' ' + doz[n] + ' ' + num[i]) {
					res.innerHTML = String(str1) + String(str) + i;
				}

			}
		}



	}

}





