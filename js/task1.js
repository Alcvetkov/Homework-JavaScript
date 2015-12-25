 var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 
 var count = 1, maxCounter = 0;
 var value = arr1[0], maxValue = 0;
 
 arr1.sort();
 
for (var i = 1; i < arr1.length; i++) {
	if (arr1[i] === value) {
		count++;
		
		if(count > maxCounter) {
			maxCounter = count;
			maxValue = value;
		}
		
	}
	else {
		count = 1;
		value = arr1[i];
	}
}

