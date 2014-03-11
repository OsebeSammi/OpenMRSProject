regimen38(firstline,secondline)
        $j(function() {
            //setValue('weight.error',"*wrong input*");
            var firstline = getValue('dateFLineReg.value');
            var secondline = getValue('dateSLineReg.value');


            getField('dateFLineReg.error').html(regimen38(firstline,secondline)).show();
            if(regimen38(firstline,secondline)!=null)
            {
                submit = false;
            }


        });




$j(function() {
            //setValue('weight.error',"*wrong input*");
            var artDate = getValue('artStartDate.value');
            var dob = getValue('dob.value');


                    getField('artStartDate.error').html(artDate(artDate,dob)).show();
                    if(artDate(artDate,dob)!=null)
                    {
                        submit = false;
                    }


        });
        
        
        
function artDate(art,dob)
{
    //checking that date started ART is after dob
    var content = art;//art date
    var day = convertDay(content);
    var month = convertMonth(content);
    var year = convertYear(content);

    var artDate = day+((month/12)*365)+(year*365);//ART date


    day = convertDay(dob);
    month = convertMonth(dob);
    year = convertYear(dob);

    var DoB = day+((month/12)*365)+(year*365);//date of birth


    //checking that art date is not before discovery of hiv
    if(hivDiscovered>artDate)
    {
        return "Date Started ART is before the HIV case was Discovered";
    }


    else if(DoB>artDate)
    {
        return "Date Started ART is before the Date of Birth";
    }


    else
    {
        return null;
    }
}
