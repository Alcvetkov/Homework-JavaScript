 var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 
 var arrayElements = [], arrayCount = [];
 var i, max = 0, index, check;
 
 
 arrayElements[0] = arr1[0];
 arrayCount[0] = 0;
 
 for (i = 1; i < arr1.length; i++) {
			 check = arrayElements.indexOf(arr1[i]);
			 if(check < 0) {
				 arrayElements.push(arr1[i]);
				 arrayCount.push(1);
			 }
			 else {
				 arrayCount[check]++;
			 }
		 }
	 
 
 
 for (i = 0; i < arrayCount.length; i++) {
	 if (max < arrayCount[i]) {
		 max = arrayCount[i];
		 index = i;
	 }
 }


 
 console.log(arrayElements[index], arrayCount[index]);
 
