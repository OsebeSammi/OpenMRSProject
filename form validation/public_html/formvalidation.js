/**
 * Created with IntelliJ IDEA.
 * User: sammi
 * Date: 3/6/14
 * Time: 12:36 AM
 * To change this template use File | Settings | File Templates.
 */

//date of HIV
var hivDiscovered = (1980*365)+((1/12)*365)+1;
var dateToday = new Date();

function convertDay(aDate)
{
     return aDay = aDate[3]+aDate[4];
}

function convertMonth(aDate)
{
     return aMonth = aDate[0]+aDate[1];
}

function convertYear(aDate)
{
    return aYear = aDate[6]+aDate[7]+aDate[8]+aDate[9];
}



function height(id)
{
     var content = document.getElementById(id).value;

    if(content<30 || content>180)
    {
        document.getElementById(id+"Info").innerHTML="The Height in Cms is outside the Normal Range";
        return false;
    }
}


function weight(id)
{
    var content = document.getElementById(id).value;

    if(content<3 || content>150)
    {
        document.getElementById(id+"Info").innerHTML="The Weight in Kgs is outside the Normal Range";
        return false;
    }
}

function dateOfBirth(id)
{
    03/06/2014
    var content = document.getElementById(id).value;

    var day = convertDay(content);
    var month = convertMonth(content);
    var year = convertYear(content);

    var totalDate = day+((month/12)*365)+(year*365);
    var date = (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();

    if(date-totalDate<1)
    {
        document.getElementById(id+"Info").innerHTML = "Date of Birth is Today or after Today";
        return false;
    }


}

function age(id,dob)
{
    var age = document.getElementById(id).value;

    var yearDOB = convertYear(dob);

    var year = (dateToday.getFullYear())-age;   //year minus age

    if(yearDOB-year>1 || yearDOB-year<1)
    {
        document.getElementById(id+"Info").innerHTML = "Age does not match Date of Birth";
        return false;
    }
}

function ageMonths(id)
{
    var content = document.getElementById(id).value;

    var month = convertMonth(content);

    if(month>12 || month<0)
    {
        document.getElementById(id+"Info").innerHTML = "Age (months) is less than 0 or greater than 12";
        return false;
    }
}

function transferDate(id,dob)
{
    var content = document.getElementById(id).value;

    var day = convertDay(content);
    var month = convertMonth(content);
    var year = convertYear(content);

    var transferDate = day+((month/12)*365)+(year*365);//transfer date


    day = convertDay(dob);
    month = convertMonth(dob);
    year = convertYear(dob);

    var DoB = day+((month/12)*365)+(year*365);//date of birth

    if(transferDate<DoB)
    {
        document.getElementById(id+"Info").innerHTML = "The Transfer Date is before the Date of Birth";
        return false;
    }

    //transfer date is later than day today
    var date = dateToday.getFullYear() * 365 + (dateToday.getMonth() / 12) * 365 + dateToday.getDay();
    else if(date<transferDate)
    {
        document.getElementById(id+"Info").innerHTML = "The Transfer Date is after Today";
        return false;
    }

    //later than date HIV was discovered
    else if(hivDiscovered>transferDate)
    {
        document.getElementById(id+"Info").innerHTML = "The Transfer Date is before the HIV case was Discovered";
        return false;
    }
}

function artDate(id,dob)
{
    //checking that date started ART is after dob
    var content = document.getElementById(id).value;//art date
    var day = convertDay(content);
    var month = convertMonth(content);
    var year = convertYear(content);

    var artDate = day+((month/12)*365)+(year*365);//ART date

    day = convertDay(dob);
    month = convertMonth(dob);
    year = convertYear(dob);

    var DoB = day+((month/12)*365)+(year*365);//date of birth

    if(artDate<DoB)
    {
        document.getElementById(id+"Info").innerHTML = "Date Started ART is before the Date of Birth";
        return false;
    }

    //checking that art date is not after date today
    var date = (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();
    else if(artDate>date)
    {
        document.getElementById(id+"Info").innerHTML = "Date Started ART is after Today";
        return false;
    }

    //checking that art date is not before discovery of hiv
    else if(artDate<hivDiscovered)
    {
        document.getElementById(id+"Info").innerHTML = "Date Started ART is before the HIV case was Discovered";
        return false;
    }
}

function dateEnrolledInHiv(id,dob,dateConfirmedPositive)
{
    //checking that date started ART is after dob
    var content = document.getElementById(id).value;//enrolled date
    var day = convertDay(content);
    var month = convertMonth(content);
    var year = convertYear(content);

    var enrolledDate = day+((month/12)*365)+(year*365);//enrolled date

    day = convertDay(dob);
    month = convertMonth(dob);
    year = convertYear(dob);

    var DoB = day+((month/12)*365)+(year*365);//date of birth

    day = convertDay(dateConfirmedPositive);
    month = convertMonth(dateConfirmedPositive);
    year = convertYear(dateConfirmedPositive);

    dateConfirmedPositive = day+((month/12)*365)+(year*365);//date confirmed positive

    //if date enrolled is before date of birth
    if(enrolledDate<DoB)
    {
        document.getElementById(id+"Info").innerHTML = "Date Enrolled in HIV Care is before Date of Birth";
        return false;
    }

    //checking that enrolled date is not after date today
    var date = (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();
    else if(enrolledDate>date)
    {
    document.getElementById(id+"Info").innerHTML = "Date Enrolled in HIV Care is after Today";
    return false;
    }

//checking that enrolled date is not before discovery of hiv
    else if(enrolledDate<hivDiscovered)
    {
        document.getElementById(id+"Info").innerHTML = "Date Enrolled in HIV Care is before the HIV case was Discovered";
        return false;
    }

    //checking that enrolled date is not before they were discovered hiv positive
    else if(enrolledDate<dateConfirmedPositive)
    {
        document.getElementById(id+"Info").innerHTML = "Date Enrolled in HIV Care is before Date Confirmed HIV+";
        return false;
    }
}

function dateConfifrmedHiv(id,dob)
{
    //checking that date started ART is after dob
    var content = document.getElementById(id).value;//date confirmed +ve
    var day = convertDay(content);
    var month = convertMonth(content);
    var year = convertYear(content);

    var dateConfirmedPositive = day+((month/12)*365)+(year*365);//date confirmed +ve

    day = convertDay(dob);
    month = convertMonth(dob);
    year = convertYear(dob);

    var DoB = day+((month/12)*365)+(year*365);//date of birth

    //checking that date confirmed positive is after date of birth
    if(dateConfirmedPositive<DoB)
    {
        document.getElementById(id+"Info").innerHTML = "Date Confirmed HIV+ is before Date of Birth";
        return false;
    }

    /*
        Specification 17,date enrolled comes before or after confirmation
     */


    //checking that date is not after date today
    var date = (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();

    else if(dateConfirmedPositive>date)
    {
        document.getElementById(id+"Info").innerHTML = "Date Confirmed HIV+ is after Today";
        return false;
    }

    //checking that date is not before discovery of hiv
    else if(dateConfirmedPositive<hivDiscovered)
    {
        document.getElementById(id+"Info").innerHTML = "Date Confirmed HIV+ is before the HIV Cases were Discovered";
        return false;
    }
}

