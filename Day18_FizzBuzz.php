<!DOCTYPE html>
<html>
<body>
<?php
# cerner_2tothe5th_2022
$i;
for ($i = 1; $i <= 100; $i++)
{
	if ($i % 15 == 0)
		echo "FizzBuzz" . " ";
	
	else if (($i % 3) == 0)
		echo "Fizz" . " ";			
	
	else if (($i % 5) == 0)				
		echo "Buzz" . " ";			

	else 		
		echo $i," " ;			
}
?>
</body>
</html>
