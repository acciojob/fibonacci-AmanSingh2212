function fibonacci(num) {

    int num1 = 0;
	int num2 = 1;

	if(num == 1)
	{
		return 0;
	}
	if(num == 2)
	{
		return 1;
	}
    let ans = 0;
	for(let i=3; i<=num; i++)
		{
			ans = num1 + num2 ;
			
			// let temp = num1;
			num1 = num2;
			num2 = ans;
		}

	return ans;
	
}

module.exports = fibonacci;
