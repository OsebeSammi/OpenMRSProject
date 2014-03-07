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
    return aDay = Number(aDate[3]+aDate[4]);
}

function convertMonth(aDate)
{
    return aMonth = Number(aDate[0]+aDate[1]);
}

function convertYear(aDate)
{
    return aYear = Number(aDate[6]+aDate[7]+aDate[8]+aDate[9]);
}


function height(value)
{
    var content = value;

    if(30>content || content>180)
    {
        $("#omrsError").append("The Height in Cms is outside the Normal Range");
        return false;
    }
}


function weight(id)
{
    var content = document.getElementById(id).value;

    if(3>content || content>150)
    {
        document.getElementById(id+"Info").innerHTML="The Weight in Kgs is outside the Normal Range";
        return false;
    }
}

function dateOfBirth(id)
{

    var content = document.getElementById(id).value;

    var day = convertDay(content);
    var month = convertMonth(content);
    var year = convertYear(content);

    var totalDate = day+((month/12)*365)+(year*365);
    var date = (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();

    if(1>(date-totalDate))
    {
        document.getElementById(id+"Info").innerHTML = "Date of Birth is Today or after Today";
        return false;
    }


}

function age(id,dob)
{
    var age = document.getElementById(id).value;

    var yearDOB = convertYear(dob);

    var year = (dateToday.getFullYear())-age; //year minus age

    if(yearDOB-year>1 || 1>(yearDOB-year))
    {
        document.getElementById(id+"Info").innerHTML = "Age does not match Date of Birth";
        return false;
    }
}

function ageMonths(id)
{
    var content = document.getElementById(id).value;

    var month = convertMonth(content);

    if(month>12 || 0>month)
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

    if(DoB>transferDate)
    {
        document.getElementById(id+"Info").innerHTML = "The Transfer Date is before the Date of Birth";
        return false;
    }

    //transfer date is later than day today
    var date = dateToday.getFullYear() * 365 + (dateToday.getMonth() / 12) * 365 + dateToday.getDay();
else if(transferDate>date)
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

    if(DoB>artDate)
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
else if(hivDiscovered>artDate)
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
    if(DoB>enrolledDate)
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
else if(hivDiscovered>enrolledDate)
{
    document.getElementById(id+"Info").innerHTML = "Date Enrolled in HIV Care is before the HIV case was Discovered";
    return false;
}

//checking that enrolled date is not before they were discovered hiv positive
else if(dateConfirmedPositive>enrolledDate)
{
    document.getElementById(id+"Info").innerHTML = "Date Enrolled in HIV Care is before Date Confirmed HIV+";
    return false;
}
}

function dateConfifrmedHiv(id,dob,dateEnrolled)
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

    day = convertDay(dateEnrolled);
    month = convertMonth(dateEnrolled);
    year = convertYear(dateEnrolled);

    dateEnrolled = day+((month/12)*365)+(year*365);//date of birth

    //checking that date confirmed positive is after date of birth
    if(DoB>dateConfirmedPositive)
    {
        document.getElementById(id+"Info").innerHTML = "Date Confirmed HIV+ is before Date of Birth";
        return false;
    }
    //checking the enrolled date is after date confirmed positive
    else if(dateConfirmedPositive>dateEnrolled)
    {
        document.getElementById(id+"Info").innerHTML = "Date Confirmed HIV+ is after date Enrolled in HIV Care";
        return false;
    }


    //checking that date is not after date today
    var date = (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();

    else if(dateConfirmedPositive>date)
    {
        document.getElementById(id+"Info").innerHTML = "Date Confirmed HIV+ is after Today";
        return false;
    }

    //checking that date is not before discovery of hiv
    else if(hivDiscovered>dateConfirmedPositive)
    {
        document.getElementById(id+"Info").innerHTML = "Date Confirmed HIV+ is before the HIV Cases were Discovered";
        return false;
    }
}


function artEligibility(id,dob,dateConfirmedPositive,dateEnrolled)
{
    var content = document.getElementById(id).value;//ART eligibility date

    var day = convertDay(content);
    var month = convertMonth(content);
    var year = convertYear(content);

    var artEligibilityDate = day+((month/12)*365)+(year*365);//eligible date

    day = convertDay(dob);
    month = convertMonth(dob);
    year = convertYear(dob);

    var DoB = day+((month/12)*365)+(year*365);//date of birth

    day = convertDay(dateConfirmedPositive);
    month = convertMonth(dateConfirmedPositive);
    year = convertYear(dateConfirmedPositive);

    dateConfirmedPositive = day+((month/12)*365)+(year*365);//date confirmed positive

    day = convertDay(dateEnrolled);
    month = convertMonth(dateEnrolled);
    year = convertYear(dateEnrolled);

    dateEnrolled = day+((month/12)*365)+(year*365);//date enrolled

    //checking that isn't before date of birth
    if(DoB>artEligibilityDate)
    {
        document.getElementById(id+"Info").innerHTML = "ART Eligibility Date is before the Date of Birth";
        return false;
    }

    //checking that it isnt before date confirmed positive
    else if(dateConfirmedPositive>artEligibilityDate)
    {
        document.getElementById(id+"Info").innerHTML = "ART Eligibility Date is before Date Confirmed HIV+";
        return false;
    }

    //checking it isnt before enrolled date
    else if(dateEnrolled>artEligibilityDate)
    {
        document.getElementById(id+"Info").innerHTML = "ART Eligibility Date is before date Enrolled in HIV Care";
        return false;
    }

    //checking it isnt after today
    var date = (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();
    else if(artEligibilityDate>date)
    {
        document.getElementById(id+"Info").innerHTML = "ART Eligibility Date is after Today";
        return false;
    }

    //checking it isn't before hiv was discovered
    else if(hivDiscovered>artEligibilityDate)
    {
        document.getElementById(id+"Info").innerHTML = "ART Eligibility Date is before the HIV case was Discovered";
        return false;
    }
}

function WHO(eligibility_WHO_Stage,enrolment_WHO_Stage)
{
    if(eligibility_WHO_Stage!=enrolment_WHO_Stage)
    {
        alert("Eligibility WHO Stage is contradicting Enrolment WHO Stage");
    }
}

/*function CD4(CD4value,age)
{

    //ask about the specifications step 27

    if(CD4value>7000 && 13>age)
    {
        alert("CD4 is above Normal for a Patient below 13 Years");
    }

    else if(CD4value>1500 && age>12)
    {
        alert("CD4 is above Normal for a Patient above 12 Years");
    }

    else if(0>CD4value)
    {
        alert("CD4 is below Zero");
    }

} */


function CD4(CD4value,age)
{

    //ask about the specifications step 27

    if(CD4value>7000)
    {
        if(13>age)
        {
            alert("CD4 is above Normal for a Patient below 13 Years");
        }

    }

    else if(CD4value>1500)
    {
        if(age>12)
        {
            alert("CD4 is above Normal for a Patient above 12 Years");
        }

    }

    else if(0>CD4value)
    {
        alert("CD4 is below Zero");
    }

}



function CD4Percentage(CD4Perc)
{
    if(CD4Perc>100)
    {
        alert("CD4 Percentage is above 100%");
    }

    else if(CD4Perc>24)
    {
        alert("The CD4 Percentage is greater than the required % for Starting ARVs (24%)");
    }

    else if(0>CD4Perc)
    {
        alert("CD4 Percentage is below Zero");
    }

}


//ask how to determine eligibility of a patience for regimen
function regimen(FLRegimen,DMEligible,DLUsed,dateConfirmedpositive)
{
    var day = convertDay(FLRegimen);
    var month = convertMonth(FLRegimen);
    var year = convertYear(FLRegimen);

    FLRegimen = day+((month/12)*365)+(year*365);//date for First Line Regimen

    day = convertDay(DMEligible);
    month = convertMonth(DMEligible);
    year = convertYear(DMEligible);

    DMEligible = day+((month/12)*365)+(year*365);//date for Date Medically Eligible

    day = convertDay(DLUsed);
    month = convertMonth(DLUsed);
    year = convertYear(DLUsed);

    DLUsed = day+((month/12)*365)+(year*365);//date for Date Last Used

    day = convertDay(dateConfirmedpositive);
    month = convertMonth(dateConfirmedpositive);
    year = convertYear(dateConfirmedpositive);

    dateConfirmedpositive = day+((month/12)*365)+(year*365);//date confirmed positive

    if(DMEligible>FLRegimen)
    {
        alert("Date Started First Line Regimen is before Date Medically Eligible");
    }

    //checking date not to be after date today
    var date = (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();
    else if(FLRegimen>date)
    {
        alert("Date Started First Line Regimen is after Today");
    }

    //checking that First Line date isn't after date last used
    else if(FLRegimen>DLUsed)
    {
        alert("The Date ART Started is after the Date Last Used");
    }

    //checking date confirmed hiv +ve
    else if(dateConfirmedpositive>FLRegimen)
    {
        alert("Date Started First Line Regimen is before Date Confirmed HIV+");
    }

    //checking that it isnt before date hiv was discovered
    else if(hivDiscovered>FLRegimen)
    {
        alert("Date Started First Line Regimen is before the HIV case was Discovered");
    }
}

//kip  part
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
 var interruptstarted=new Date();
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



function whostage37(id1,id2)
{
     var start = document.getElementById(id1).value;
     var eligibility = document.getElementById(id2).value;
     
     var day = convertDay(start);
    var month = convertMonth(start);
    var year = convertYear(start);

var day1 = convertDay(eligibility);
    var month1 = convertMonth(eligibility);
    var year1 = convertYear(eligibility);
    
    var startDate = day+((month/12)*365)+(year*365);
   
    var eligibilityDate = day1+((month1/12)*365)+(year1*365);
        if( startDate!== eligibilityDate){
            document.getElementById(id+"Info").innerHTML = "WHO Stage at Start of ART is contradicting eligibility WHO Stage";
                    return false;
        }
    
}
function regimen38(id1,id2)
{
     var fstline = document.getElementById(id1).value;
     var scndline = document.getElementById(id2).value;
     
     var day = convertDay(fstline);
    var month = convertMonth(fstline);
    var year = convertYear(fstline);

var day1 = convertDay( scndline);
    var month1 = convertMonth( scndline);
    var year1 = convertYear(scndline);
    
    var fstlineDate = day+((month/12)*365)+(year*365);
   
    var scndlineDate = day1+((month1/12)*365)+(year1*365);
        if( scndlineDate &lt; fstlineDate){
            document.getElementById(id+"Info").innerHTML = "Started Second Line Regimen before First Line Regimen";
                    return false;
        }
    
}

function regimen39(id)
{
    
    var content = document.getElementById(id).value;

    var day = convertDay(content);
    var month = convertMonth(content);
    var year = convertYear(content);

    var totalDate = day+((month/12)*365)+(year*365);
    var date = (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();

    if(date-totalDate&lt;1)
    {
        document.getElementById(id+"Info").innerHTML = "Started Second Line Regimen is after Today";
        return false;
    }


}
function regimen40(id)
{
    var content = document.getElementById(id).value;

    var day = convertDay(content);
    var month = convertMonth(content);
    var year = convertYear(content);

    var totalDate = day+((month/12)*365)+(year*365);
    //var hivcase=new Date("January 01, 1980");
     if(totalDate > hivDiscovered)
    {
        document.getElementById(id+"Info").innerHTML = "Started Second Line Regimen is before the HIV case was Discovered";
        return false;
    }
    }
function regimen41(id)
{
    var content = document.getElementById(id).value;

    var day = convertDay(content);
    var month = convertMonth(content);
    var year = convertYear(content);

    var totalDate = day+((month/12)*365)+(year*365);
    //var hivcase=new Date("January 01, 1980");
     if(totalDate > hivDiscovered)
    {
        document.getElementById(id+"Info").innerHTML = "Started Second Line Regimen is before the Substitution Date of the earlier substitution regimen";
        return false;
    }
    }
    function transfer42(id,id2)
{
    var transfer = document.getElementById(id).value;
     var birth = document.getElementById(id).value;
   
    var day = convertDay(transfer);
    var month = convertMonth(transfer);
    var year = convertYear(transfer);
    
 var day1 = convertDay(birth);
    var month1 = convertMonth(birth);
    var year1 = convertYear(birth);
    
    var transferDate = day+((month/12)*365)+(year*365);
    var birthDate=day1+((month1/12)*365)+(year1*365);
    var date = (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();
     if(transferDate > birthDate)
    {
        document.getElementById(id+"Info").innerHTML = "STransfer Out or Death Date is before Date of Birth";
        return false;
    }
    if(transferDate >date)
    {
        document.getElementById(id+"Info").innerHTML = "Transfer Out or Death Date is after Today";
        return false;
    }
      if(transferDate > hivDiscovered)
    {
        document.getElementById(id+"Info").innerHTML = "Transfer Out or Death Date is before the HIV case was Discovered";
        return false;
    }
    
    }
        function art46(id,id2)
{
     var interruption = document.getElementById(id).value;
     var fstlinereg = document.getElementById(id2).value;
   
    var day = convertDay(interruption);
    var month = convertMonth(interruption);
    var year = convertYear(interruption);
    
    var day1 = convertDay(fstlinereg);
    var month1 = convertMonth(fstlinereg);
    var year1 = convertYear(fstlinereg);
    
    var interruptionDate = day+((month/12)*365)+(year*365);
      interruptstarted=interruptionDate;
    var fstlineregDate=day1+((month1/12)*365)+(year1*365);
    var date= (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();
        if(interruptionDate > fstlineregDate)
    {
        document.getElementById(id+"Info").innerHTML = "The ART Treatment Interruption Date is before the date the patient started on First Line Regimen";
        return false;
    }
         if(interruptionDate >date)
    {
        document.getElementById(id+"Info").innerHTML = "ART Interruption Date is after Today";
        return false;
    }
           if(interruptionDate> hivDiscovered)
    {
        document.getElementById(id+"Info").innerHTML = "Transfer Out or Death Date is before the HIV case was Discovered";
        return false;
    }
}
 function artrestart50(id,id2)
 {
      var restart = document.getElementById(id).value;
     var fstlinereg = document.getElementById(id2).value;
   
    var day = convertDay(restart);
    var month = convertMonth(restart);
    var year = convertYear(restart);
    
    var day1 = convertDay(fstlinereg);
    var month1 = convertMonth(fstlinereg);
    var year1 = convertYear(fstlinereg);
    
    var restartDate = day+((month/12)*365)+(year*365);
    var fstlineregDate=day1+((month1/12)*365)+(year1*365);
    var date= (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();
       if(restartDate > fstlineregDate)
    {
        document.getElementById(id+"Info").innerHTML = "The ART Treatment Restarted Date is before the date the patient started on First Line Regimen";
        return false;
    }
         if(restart >date)
    {
        document.getElementById(id+"Info").innerHTML = "Date Restarted ART is after Today";
        return false;
    }
           if(restart> hivDiscovered)
    {
        document.getElementById(id+"Info").innerHTML = "Date Restarted ART is before the HIV case was Discovered";
        return false;
    }
         if(restart >interruptstarted)
    {
        document.getElementById(id+"Info").innerHTML = "Date Restarted ART is before Date Interruption Started";
        return false;
    }
 }
 function cd454(id)
 {
      var cd4 = document.getElementById(id).value;
     
   
    var day = convertDay(restart);
    var month = convertMonth(restart);
    var year = convertYear(restart);
    
    var cd4Date = day+((month/12)*365)+(year*365);
    
    var date= (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();
  
         if(cd4Date >date)
    {
        document.getElementById(id+"Info").innerHTML = "CD4 Date Taken is after Today";
        return false;
    }
 }
 function usecondom55(id)
 {
      var age = document.getElementById(id).value;
     

         if(age &lt; 15)
    {
        document.getElementById(id+"Info").innerHTML = "Is this Child using Condoms";
        return false;
    }
 }
   function pwp56(id)
 {
      var age = document.getElementById(id).value;
     

         if(age &lt; 15)
    {
        document.getElementById(id+"Info").innerHTML = "Is this Child on PwP Services?";
        return false;
    }
 }
   function partner57(id)
 {
      var age = document.getElementById(id).value;
     

         if(age &lt; 15)
    {
        document.getElementById(id+"Info").innerHTML = "Is this Child have Partner to Test?";
        return false;
    }
 }
  function sti58(id)
 {
      var age = document.getElementById(id).value;
     

         if(age &lt; 15)
    {
        document.getElementById(id+"Info").innerHTML = "Is this Child Screened for STI?";
        return false;
    }
 }
  function visit59(id)
 {
    var visit= document.getElementById(id).value;
    
   
    var day = convertDay(visit);
    var month = convertMonth(visit);
    var year = convertYear(visit);
 
    var visitDate = day+((month/12)*365)+(year*365);
    
    var date= (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();
          if(visitDate > hivDiscovered)
    {
        document.getElementById(id+"Info").innerHTML = "Visit Date is before the HIV case was Discovered";
        return false;
    }
     
  
         if(visitDate > date)
    {
        document.getElementById(id+"Info").innerHTML = "Visit Date is after Today";
        return false;
    }
 }
  function pg61(id)
 {
      var age = document.getElementById(id).value;
     

         if(age &lt; 15)
    {
        document.getElementById(id+"Info").innerHTML = "Is this Child Pregnant?";
        return false;
    }
 }
   function gestation62(id)
 {
      var gestation = document.getElementById(id).value;
      var 

         if(gestation &lt; 1 || gestation < 40)
    {
        document.getElementById(id+"Info").innerHTML = "Is this Child Pregnant?";
        return false;
    }
 }
    function deliver63(id,id2)
 {
      var deliver = document.getElementById(id).value;
      var visit= document.getElementById(id2).value;
    
    var day = convertDay(deliver);
    var month = convertMonth(deliver);
    var year = convertYear(deliver);
    
    var day1 = convertDay(visit);
    var month1 = convertMonth(visit);
    var year1 = convertYear(visit);
    
    var deliveryDate = day+((month/12)*365)+(year*365);
    var visitDate=day1+((month1/12)*365)+(year1*365);
         if(deliveryDate  > visitDate)
    {
        document.getElementById(id+"Info").innerHTML = "Delivery Date is before Visit Date";
        return false;
    }
 }
  function fp64(id)
 {
      var age = document.getElementById(id).value;
     

         if(age &lt; 15)
    {
        document.getElementById(id+"Info").innerHTML = "Is this Child on Family Planning?";
        return false;
    }
 }
  function alt69(id)
 {
      var alt= document.getElementById(id).value;
     

         if(alt &lt; 0)
    {
        document.getElementById(id+"Info").innerHTML = "ALT is below Normal";
        return false;
    }
         if(alt >35)
    {
        document.getElementById(id+"Info").innerHTML = "ALT is aboveNormal";
        return false;
    }
 }
 
  function nxtvisit71(id,id2)
 {
      var  visit= document.getElementById(id).value;
     var  currvisit = document.getElementById(id2).value;
    
    var day = convertDay(visit);
    var month = convertMonth(visit);
    var year = convertYear(visit);
    
    var day1 = convertDay(currvisit);
    var month1 = convertMonth(currvisit);
    var year1 = convertYear(currvisit);
    
    var nextvisitDate = day+((month/12)*365)+(year*365);
    var currentvisitDate=day1+((month1/12)*365)+(year1*365);
         if(nextvisitDate &alt; currentvisitDate)
    {
        document.getElementById(id+"Info").innerHTML = "The next Visit Date is before the current Visit Date";
        return false;
    }
 }



