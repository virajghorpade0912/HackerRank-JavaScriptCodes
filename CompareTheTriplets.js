function compareTriplets(a, b) {

    var s =0;
    var v =0;
    for(var i=0;i<a.length;i++)
    {
        for(var j=i;j<b.length;j++)
        {
            if(a[i]>b[j])
            {
                s++;
                break;
            }

            if(a[i]<b[j])
            {
                v++;
                break;
            }

            if(a[i]==b[j])
            {
                break;
            }
            

        }
    }
    var arr =[s,v];

    return arr;


}
