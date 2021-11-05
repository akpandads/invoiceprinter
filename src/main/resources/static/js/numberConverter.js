// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    var words ="";
    $(".price-align-rt").focusout(function(){
        $("#totalAmount").empty();
        $("#amountInWords").empty();
        var sum = calculateSum();
        words = number2text(sum);
        console.log(sum);
        console.log(words);
        $("#totalAmount").append("Rs " + sum + ".00");
        $("#amountInWords").append("<p>Received with thanks amount, "+words)
    });

    function calculateSum(){
        var sum =0;
        var values = $("input[name='charge[]']")
            .map(function(){return $(this).val();}).get();
        console.log(values);
        values.forEach(function(item) {
            if(isNumber(item)){
                sum=parseInt(sum)+parseInt(item);
            }
        });
    console.log(sum);
        return sum;
    }
    function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

    function number2text(value) {
        var fraction = Math.round(frac(value)*100);
        var f_text  = "";

        if(fraction > 0) {
            f_text = "AND "+convert_number(fraction)+" PAISE";
        }

        return convert_number(value)+" RUPEES "+f_text+" ONLY";
    }

    function frac(f) {
        return f % 1;
    }

    function convert_number(number)
    {
        if ((number < 0) || (number > 999999999))
        {
            return "NUMBER OUT OF RANGE!";
        }
        var Gn = Math.floor(number / 10000000);  /* Crore */
        number -= Gn * 10000000;
        var kn = Math.floor(number / 100000);     /* lakhs */
        number -= kn * 100000;
        var Hn = Math.floor(number / 1000);      /* thousand */
        number -= Hn * 1000;
        var Dn = Math.floor(number / 100);       /* Tens (deca) */
        number = number % 100;               /* Ones */
        var tn= Math.floor(number / 10);
        var one=Math.floor(number % 10);
        var res = "";

        if (Gn>0)
        {
            res += (convert_number(Gn) + " CRORE");
        }
        if (kn>0)
        {
            res += (((res=="") ? "" : " ") +
                convert_number(kn) + " LAKH");
        }
        if (Hn>0)
        {
            res += (((res=="") ? "" : " ") +
                convert_number(Hn) + " THOUSAND");
        }

        if (Dn)
        {
            res += (((res=="") ? "" : " ") +
                convert_number(Dn) + " HUNDRED");
        }


        var ones = Array("", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX","SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN","FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN","NINETEEN");
        var tens = Array("", "", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY","SEVENTY", "EIGHTY", "NINETY");

        if (tn>0 || one>0)
        {
            if (!(res==""))
            {
                res += " AND ";
            }
            if (tn < 2)
            {
                res += ones[tn * 10 + one];
            }
            else
            {

                res += tens[tn];
                if (one>0)
                {
                    res += ("-" + ones[one]);
                }
            }
        }

        if (res=="")
        {
            res = "zero";
        }
        return res;
    }
    $("#printButton").on('click',function(){
        window.print();
        return false;
    })
});
