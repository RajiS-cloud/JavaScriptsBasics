function bubble_Sort2(a)
{
    var swapp;
    var n = a.length -1;
    var x = a;

    swapp == false;
    
    while(n>=0)
     {
        swapp = false;
        for (var i = 0; i<= n; i++)
        {
            if (x[i] > x[i+1])
            {
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
            }
         }
           n--;
        }
       
       return x;
    
    }
    
    console.log(bubble_Sort2([5,3,2,34343,1]));

    
    console.log(bubble_Sort2([1,0,2,34343,5]));
