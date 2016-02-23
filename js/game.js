var Game = (function() {
	var mat = [[1, 0, 3, 0],[0, 0, 2, 1],[0, 1, 0, 2],[2, 4, 0, 0]]
	var size = 4
	

	function checkIfPosOK(num, row, col){
		console.log('inside checkIfPosOK and arg num is ' + num);
		for(var i = 0; i < size; i++) {
        	if(mat[i][col] == num)
            	return false;
 		}
 		for(var j = 0; j < size; j++) {
        	if(mat[row][j] == num)
            return false;
 		}

 		var boxStartRow = Math.floor((row/2)) * 2;
 		var boxStartCol = Math.floor((col/2)) * 2;

 		for(var i = boxStartRow; i < boxStartRow + 2; i++){
    		for(var j = boxStartCol; j < boxStartCol + 2; j++){
        		if(mat[i][j] == num)
            	return false;
    		}
 		}
 		console.log('returning true from checkIfPosOK for the num ' + num);
		return true;
	}


	function findEmpty(pos) {
console.log('inside findEmpty');
  		for(var i = 0; i < size; i++) {
    		for(var j = 0; j < size; j++) {
      			if(mat[i][j] == 0) {
      				console.log('inside findEmpty row returned is ' + i + ' and col returned is ' + j);
      				pos.row = i; pos.col = j;
      				return true;
      			}        		
    		}
  		}
  		return false;
	}


	function solve(){
		console.log('inside solve');
		var pos = {row : 0, col : 0}
	    if(!findEmpty(pos))
    		return true;

  		for(var num = 1; num <= 4; num++) {
  			console.log(mat);
     		if(checkIfPosOK(num, pos.row, pos.col)) {
       			mat[pos.row][pos.col] = num;
console.log('inside loop of solve and num is ' + num);
  	     		if(solve())
         			return true;
console.log('need to backtrack --- ' + num);
    	   		mat[pos.row][pos.col] = 0;
     		}
  		}
  		return false;
	}

	function print() {
		console.log('inside print');
		var i, j, str, myEl, x, val;
		for(i = 0; i < size; i++) {
			for(j = 0; j < size; j++) {
				x = 4*i + j;
				str = 't' + x;
				myEl = document.getElementById(str);
				val = '' + mat[i][j]
				myEl.value = val
			}
		}
	}

	function showDialog() {
		console.log('inside showDialog');
		alert("No Solution Exists!!");
	}


	function magic() {
		console.log('inside magic');
		if(solve()) {
			console.log('solve successful');
			print();
		}
		else {
			print();
			showDialog();
		}
			
	}


	function init() {
		var solveButton = document.getElementById('solve');
		solveButton.addEventListener('click', magic);
	}

	return {
		init : init
	};

})();