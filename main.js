let enroll = document.getElementById('enroll-stu');
enroll.addEventListener("click", displayStudentData);
let btnclr = document.getElementById("clear");
btnclr.addEventListener("click",clearInputs);


var row = 1;

function displayStudentData(e) {
    let name = document.getElementById('StudentName').value;
    let email = document.getElementById('Mail-Id').value;
    let website = document.getElementById('StudentWebsite').value;
    let imglink = document.getElementById('StudentImglink').value;
    let gendermale = document.getElementById('GenderMale');
    let genderfemale = document.getElementById('GenderFemale');
    let language = document.getElementById('stu-skill');
    


    if (!name || !email || !website || !imglink) {
        alert("Please fill all the data");
        return;
    }

    let display = document.getElementById('ShowTable');

    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
 
 
    
        if (gendermale.checked == true) {
            var genderval = gendermale.value;
            // cell1.innerHTML = name +"<br>"+ email +"<br>"+ website +"<br>"+ imglink +"<br>"+ gendermale.value;
             
    } else if (genderfemale.checked == true)
        var genderval = genderfemale.value;

    // cell1.innerHTML = name +"<br>"+ email +"<br>"+ website +"<br>"+ imglink +"<br>"+ genderfemale.value; 
    
    else
    alert('Please fill all the data')


    var skillvalues = [];

    var checkBox = document.getElementsByName('skill');
    for (var i = 0; i< checkBox.length; i++) {
        if (checkBox[i].checked == true) {
            skillvalues.push(checkBox[i].value);
        }
    }

    cell1.innerHTML = name +"<br>"+ genderval +"<br>"+ email +"<br>"+ website +"<br>"+ imglink  +"<br>"+ skillvalues;
    cell2.innerHTML = "<img src = 'img/profile.png' width='140px' height = '120px'>"


    document.getElementById("StudentName").value="";
    document.getElementById("Mail-Id").value="";
    document.getElementById("StudentWebsite").value="";
    document.getElementById("StudentImglink").value="";
    document.getElementById("GenderMale").checked=false;
    document.getElementById("GenderFemale").checked=false;
    document.getElementById("Java").checked=false;
    document.getElementById("HTML").checked=false;
    document.getElementById("CSS").checked=false;
}

function clearInputs(){
    document.getElementById("StudentName").value="";
    document.getElementById("Mail-Id").value="";
    document.getElementById("StudentWebsite").value="";
    document.getElementById("StudentImglink").value="";
    document.getElementById("GenderMale").checked=false;
    document.getElementById("GenderFemale").checked=false;
    document.getElementById("Java").checked=false;
    document.getElementById("HTML").checked=false;
    document.getElementById("CSS").checked=false;
}