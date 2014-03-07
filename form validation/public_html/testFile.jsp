<htmlform>

<macros>
    paperFormId = (Fill this in)
    headerColor =#c0c0c0
    sectionHeader =#000000
    fontOnHeaderColor = white
</macros>
<style>
    .maincopy
    {
        font-family: verdana,arial, halvetica;
        font-size:11px;
        text-decoration: none;
        font-weight: normal;
        text-style: none;
        line-height: 15px;
        font-style: normal;
        font-weight:normal;
    }
    .textalign_right
    {
        text-align:right;
        font-weight:bold;
        color: #C60;
        padding-right:25px;
        font-size:11px;
    }

    .section {
        border: 1px solid $headerColor;
        padding: 2px;
        text-align: left;
        margin-bottom: 1em;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    //color:#000000

        }
    .sectionHeader {
        background-color: $headerColor;
        color:  $sectionHeader;
        display:block;
        padding: 2px;
        position:relative;
        margin-left: 5px;
        margin-right: 5px;
        font-weight: bold;
        text-align: center;
        height: 30px;
    }

    table.baseline-aligne tr td.ki {
        vertical-align: baseline;
        position: relative;
        margin-left: 12px;

    }
    table.baseline-aligned td.label{
        color: brown;
    }

        /*TAB*/

    ul.tabs {
        margin: 0;
        padding: 0;
        float: left;
        list-style: none;
        height: 32px; /*--Set height of tabs--*/
        border-bottom: 1px solid #999;
        border-left: 1px solid #999;
        width: 100%;
    }
    ul.tabs li {
        float: left;
        margin: 0;
        padding: 0;
        height: 31px; /*--Subtract 1px from the height of the unordered list--*/
        line-height: 31px; /*--Vertically aligns the text within the tab--*/
        border: 1px solid #999;
        border-left: none;
        margin-bottom: -1px; /*--Pull the list item down 1px--*/
        overflow: hidden;
        position: relative;
        background: #e0e0e0;
    }
    ul.tabs li a {
        text-decoration: none;
        color: #000;
        display: block;
        font-size: 1.2em;
        padding: 0 20px;
        border: 1px solid #fff; /*--Gives the bevel look with a 1px white border inside the list item--*/
        outline: none;
    }
    ul.tabs li a:hover {
        background: #ccc;
    }
    html ul.tabs li.active, html ul.tabs li.active a:hover  { /*--Makes sure that the active tab does not listen to the hover properties--*/
        background: #fff;
        border-bottom: 1px solid #fff; /*--Makes the active tab look like it's connected with its content--*/
    }

    .tab_container {
        border: 1px solid #999;
        border-top: none;
        overflow: hidden;
        clear: both;
        background: #fff;
    }
    .tab_content {
        padding: 20px;
        font-size: 1.2em;
    }

    .divmain  {
        height: 80px;
        border: 1px solid grey;
        width: 280px;
        overflow: hidden;
    }

    .childmain{
        width: 100%;
        overflow: auto;
        height: 100%;
        padding-right: 17px;
    }

</style>
<script type="text/javascript" charset="utf-8">
    $(document).ready(function() {

        //When page loads...
        $(".tab_content").hide(); //Hide all content
        $("ul.tabs li:first").addClass("active").show(); //Activate first tab
        $(".tab_content:first").show(); //Show first tab content

        //On Click Event
        $("ul.tabs li").click(function() {
            $("ul.tabs li").removeClass("active"); //Remove any "active" class
            $(this).addClass("active"); //Add "active" class to selected tab
            $(".tab_content").hide(); //Hide all tab content

            var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
            $(activeTab).fadeIn(); //Fade in the active ID content
            return false;
        });

        $("ul.tabs_visit_form2 li").click(function() {
            $("ul.tabs li:first").removeClass("active"); //Remove any "active" class
            $("ul.tabs li:eq(1)").addClass("active").show(); //Activate second tab
            $(".tab_content:eq(1)").show(); //Show second tab content
            $(this).addClass("active"); //Add "active" class to selected tab
            $(".tab_content").hide(); //Hide all tab content

            var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
            $(activeTab).fadeIn(); //Fade in the active ID content
            return false;
        });

    });



    //validation
    //date of HIV


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

    function startError()
    {
        document.getElementById("openmrsError").innerHTML = "";
        document.getElementById("openmrsError").innerHTML = "<p>Please correct the following errors:</p>";
        return  document.getElementById("openmrsError").value;
    }

    function continueError()
    {
        return  document.getElementById("openmrsError").value;
    }

    function visitDate(id)
    {

        var dateToday = new Date();
        var value;
        var error;

        var content = document.getElementById(id).value;


        var day = convertDay(content);
        var month = convertMonth(content);
        var year = convertYear(content);

        var totalDate = day+((month/12)*365)+(year*365);
        var date = (dateToday.getFullYear()*365)+((dateToday.getMonth()/12)*365)+dateToday.getDay();



        if(totalDate > date)
        {
            if(document.getElementById("openmrsError").innerHTML == null)
            {
                value = startError();
            }
            else
            {
                value = continueError();
            }

            error = "<p>The visit date entered is after today</p>";
            document.getElementById("openmrsError").innerHTML = value + error;
            return false;
        }
    }


    function height(id)
    {
        var content = document.getElementById(id).value;

        if(30>content || content>180)
        {

            return false;
        }
    }





    function submitHtmlForm()
    {
        var submitThisForm = true;

        //checking visit date
        submitThisForm = visitDate("w7-display");
        if(submitThisForm == false)
        {
            return false;
        }
    }

</script>
<div id="openmrsError" style="background-color: #ff0e7a">
</div>
<div class="main">
<ul class="tabs">
    <li><a href="#visit_form1">Visit Information Page 1</a></li>
    <li><a href="#visit_form2">Visit Information Page 2</a></li>
</ul>
<div class="tab_container">
<fieldset>
    <legend><strong>Encounter Details</strong></legend>
    <table width="100%" border="0" align="center">
        <tr>
            <td width="11%" class="textalign_right">Encounter Date:</td>
            <td width="17%"><encounterDate/></td>
            <td width="19%" class="textalign_right">Encounter Location:</td>
            <td width="17%"><encounterLocation/></td>
            <td width="18%" class="textalign_right">Encounter Provider:</td>
            <td width="18%"><encounterProvider/></td>
        </tr>
    </table>
</fieldset>
<!--TAB 1 HERE-->
<div id="visit_form1" class="tab_content">
    <span style="float:right">Paper Form ID: $paperFormId</span>
    <div id="form1">
        <section>
            <table width="50%" class="baseline-aligne">
                <tr>
                    <td  >Patient id:</td>
                    <td style="color:brown"> <lookup expression="patient.personId"/></td>
                    <td >Patient Name:</td>
                    <td style="color: brown"> <lookup expression="patient.personName"/></td>
                    <td>Patient age:</td>
                    <td style="color: brown"> <lookup expression="patient.personAge"/></td>
                </tr>
            </table>
        </section>

        <section headerLabel="COMPREHENSIVE CARE CLINIC PATIENT CARD - MOH 257
                  INITIAL AND FOLLOW UP VISIT">
            <table width="85%" align="center" class="maincopy">
                <tr >
                    <td width="233" class="textalign_right">Visit Date:</td>
                    <td width="265"><encounterDate labelText="Visit Date:"/></td>
                    <td width="255" class="textalign_right">Visit type:</td>
                    <td width="309"><obs conceptId="160530AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" /></td>
                </tr>
                <tr>
                    <td>Duration Since (In Months)</td>
                </tr>
                <tr >
                    <td class="textalign_right">Start ART:</td>
                    <td><encounterDate labelText="Visit Date:"/></td>
                    <td class="textalign_right">Current Regimen:</td>
                    <td><obs conceptId="162240"/></td>
                </tr>
                <tr >
                    <td class="textalign_right">Weight (kgs)/BP:</td>
                    <td><obs conceptId="5089" size="5"/></td>
                    <td class="textalign_right">Height (cm):</td>
                    <td><obs conceptId="5090" size="5"/></td>
                </tr>
                <tr >
                    <td class="textalign_right">BMI:</td>
                    <td><obs conceptId="1342" size="5"/></td>
                </tr>
                <tr>
                    <td>Pregnancy</td>
                </tr>
                <tr >
                    <td class="textalign_right">Status:</td>
                    <td><obs conceptId="5272" style="no_yes_dropdown" /></td>
                    <td class="textalign_right">EDD:</td>
                    <td><obs conceptId="5596" size="5"/></td>
                </tr>
                <tr>
                    <td>Family Planning</td>
                </tr>
                <tr >
                    <td class="textalign_right">FP Status:</td>
                    <td><obs conceptId="160653" style="no_yes_dropdown" /></td>
                    <td class="textalign_right">FP/No FP:</td>
                    <td><obs conceptId="965" style="no_yes_dropdown"/></td>
                </tr>
                <tr>
                    <td class="textalign_right">FP method:</td>
                    <td><obs conceptId="374AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"  style="checkbox" size="5"/></td>
                </tr>
                <tr>
                    <td>Tuberculosis status</td>
                </tr>
                <tr >
                    <td class="textalign_right"> Status:</td>
                    <td><obs conceptId="1659" style="no_yes_dropdown" /></td>
                    <td class="textalign_right">TB RX:</td>
                    <td><obs conceptId="830" size="5"/></td>
                </tr>
                <tr>
                    <td class="textalign_right">Potential Side Effects:</td>
                    <td><obs conceptId="159935AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" style="checkbox" size="5"/></td>
                </tr>
                <tr>
                    <td class="textalign_right">New OI and Othet Problems:</td>
                    <td></td>
                </tr>
                <tr>
                    <td class="textalign_right">WHO Stage:</td>
                    <td><obs conceptId="5356" /></td>
                </tr>
                <tr>
                    <td>Cotrimozale</td>
                </tr>
                <tr >
                    <td class="textalign_right">Cotrimozale:</td>
                    <td><obs conceptId="161652"  /></td>
                    <td class="textalign_right">Adherence:</td>
                    <td><obs conceptId="161652" /></td>
                </tr>
                <tr >
                    <td class="textalign_right">CTX Dispensed:</td>
                    <td><obs conceptId="162229"  /></td>
                    <td class="textalign_right">INH Dispensed:</td>
                    <td><obs conceptId="162230" /></td>
                </tr>
            </table>
        </section>
    </div>

    <ul class="tabs_visit_form2">
        <li><a href="#visit_form2"><center><button type="button" class="text ui-widget-content ui-corner-all" id="add_patientProfile" name="update" value="update"><img class="button_img" src="../../images/icons/tick.png" alt="" width="14" height="16"/> NEXT  </button></center></a></li></ul>
</div>
<!--TAB 2 HERE-->
<div id="visit_form2" class="tab_content">
    <section headerLabel="COMPREHENSIVE CARE CLINIC PATIENT CARD - MOH 257
                  INITIAL AND FOLLOW UP VISIT">

        <table width="98%" align="center" class="maincopy">
            <tr >

                <td width="25%" class="textalign_right">Other Medical Dispensed?:</td>
                <td width="22%"><obs conceptId="1282"  /></td>
                <td width="25%" class="textalign_right">If yes Specify::</td>
                <td width="28%"><obs conceptId="162230" /></td>

            </tr>
            <tr>
                <td>ARV Drugs:</td>
            </tr>
            <tr>
                <td>ARV Drugs Adherence?:</td>
                <td><obs conceptId="1658" /></td>
            </tr>
            <tr>
                <td>If ARV Drugs Adherence is Unsatisfactory, Why?:</td>
            </tr>
            <tr>
                <td>Unsatisfactory Reason:</td>
                <td><div class="divmain"><div class="childmain"><obs conceptId="160582AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" size="5" /></div></div></td>
            </tr>

            <tr >

                <td class="textalign_right">ARV Regimen:</td>
                <td><obs conceptId="1251"  /></td>
                <td class="textalign_right"> Dose:</td>
                <td><obs conceptId="1251" /></td>

            </tr>
            <tr>
                <td>Laboratory Investigations:</td>
            </tr>
            <tr >

                <td class="textalign_right">CD4 Done (# or %):</td>
                <td><obs conceptId="5497"  /></td>
                <td class="textalign_right">CD4 Date:</td>
                <td><encounterDate labelText="Visit Date:"/></td>

            </tr>

            <tr >

                <td class="textalign_right">CD4 Count:</td>
                <td><obs conceptId="5497"  /></td>
                <td class="textalign_right">CD4 %:</td>
                <td><obs  conceptId="730"  /></td>

            </tr>
            <tr >

                <td class="textalign_right">HGB:</td>
                <td><obs conceptId="21"  /></td>
                <td class="textalign_right">HGB Result:</td>
                <td><obs  conceptId="21"  /></td>

            </tr>
            <tr >

                <td class="textalign_right">RPR:</td>
                <td><obs conceptId="1619"  /></td>
                <td class="textalign_right">RPR Result:</td>
                <td><obs  conceptId="1619"  /></td>

            </tr>
            <tr >

                <td class="textalign_right">TB Spatum:</td>
                <td><obs conceptId="307"  /></td>
                <td class="textalign_right">TB Spatum results:</td>
                <td><obs  conceptId="307"  /></td>

            </tr>
            <tr> Other Lab Test:</tr>
            <tr >

                <td class="textalign_right">Refered to:</td>
                <td><obs conceptId="1272"  /></td>
                <td class="textalign_right">If hospitalized, No. of Days:</td>
                <td><obs  conceptId="1272"  /></td>

            </tr>
            <tr>
                <td>At Risk Population:</td>
                <td><obs conceptId="1272"  /></td>
            </tr>
            <tr >

                <td class="textalign_right">Date of Next Appointment :</td>
                <td><obs conceptId="5096AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"  /></td>
                <td class="textalign_right">Clinician Initial:</td>
                <td><obs  conceptId="1473"  /></td>

            </tr>

        </table>
        <center><submit submitLabel="Complete And Close"/></center>
    </section>
</div>

</div>

</div>
</htmlform>
