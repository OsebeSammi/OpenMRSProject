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
