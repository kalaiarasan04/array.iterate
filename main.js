
// callback () in array iterate


let arr=[1,2,3,4,5];


function first(arr,second){
	
	return second(arr)
	
}
first(arr,second)


function second(arr){
	
	arr.forEach((e)=>{
		
		document.write(e);
		
	})
	
}