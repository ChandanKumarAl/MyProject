// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var empname=document.getElementById("empname_row"+no);
//  var empid=document.getElementById("empid_row"+no);
//  var date=document.getElementById("date_row"+no);
//  var status=document.getElementById("status_row"+no);
	
//  var empname_data=empname.innerHTML;
//  var empid_data=empid.innerHTML;
//  var date_data=date.innerHTML;
//  var status_status=status.innerHTML;
	
//  empname.innerHTML="<input type='text' id='empname_text"+no+"' value='"+empname_data+"'>";
//  empid.innerHTML="<input type='text' id='empid_text"+no+"' value='"+empid_data+"'>";
//  date.innerHTML="<input type='text' id='date_text"+no+"' value='"+date_data+"'>";
//  status.innerHTML="<input type='text' id='status_text"+no+"' value='"+status_status+"'>";
// }

// function save_row(no)
// {
//  var empname_val=document.getElementById("empname_text"+no).value;
//  var empid_val=document.getElementById("empid_text"+no).value;
//  var date_val=document.getElementById("date_text"+no).value;
//  var status_val=document.getElementById("status_text"+no).value;

//  document.getElementById("empname_row"+no).innerHTML=empname_val;
//  document.getElementById("empid_row"+no).innerHTML=empid_val;
//  document.getElementById("date_row"+no).innerHTML=date_val;
//  document.getElementById("status_row"+no).innerHTML=status_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//  var new_empname=document.getElementById("new_empname").value;
//  var new_empid=document.getElementById("new_empid").value;
//  var new_date=document.getElementById("new_date").value;
//  var new_status=document.getElementById("new_status").value;
	
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='empname_row"+table_len+"'>"+new_empname+"</td><td id='empid_row"+table_len+"'>"+new_empid+"</td><td id='date_row"+table_len+"'>"+new_date+"</td><td id='status_row"+table_len+"'>"+new_status+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='btn btn-light' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='btn btn-light' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='btn btn-light' onclick='delete_row("+table_len+")'></td></tr>";


//  document.getElementById("new_empname").value="";
//  document.getElementById("new_empid").value="";
//  document.getElementById("new_date").value="";
//  document.getElementById("new_status").value="";
// }

var dataSet = [
    ['S01', 'Chandan', 'kumar', 'General'],
    ['S01', 'Sagar', 'Shivaraj', 'Dental'],
    ['S02', 'Kavya', 'Umesh', 'veterinary'],
    ['S03', 'James', 'Joseph', 'Oncology'],
    ['S04', 'Diwakar', 'Reddy', 'Cardiology'],
    ['S05', 'Akshata', 'Gudisagar', 'Orthopedics'],
    ['S06', 'Manisha', 'Veeramani', 'Robotic Surgery'],
    ['S07', 'Madhanlal', ' DuraiRajan', 'Nephrology'],
    ['S08', 'Madhu', 'Mathi', 'General'],
    ['S09', 'Hari', 'Kiran', 'Oncology'],
    ['S10', 'Varun', 'Singh', 'veterinary'],
    ['S11', 'Gunaseelan', 'Udhayakumar', 'Nephrology'],
    ['S12', 'Ragul', 'Sudalayandy', 'Dental'],
    ['S13', 'Yugandhar', 'Sairam', 'Orthopedics'],
    ['S14', 'Ragul', 'Sudalayandy', 'Dental'],
    ['S15', 'Ragul', 'Sudalayandy', 'Dental'],
    ['S16', 'Ragul', 'Sudalayandy', 'Dental'],
    ['S17', 'Ragul', 'Sudalayandy', 'Dental']   

];

$(document).ready(function () {
    $('#Doctor').DataTable({
        data: dataSet,
        columns: [
            { title: 'Sl No' },
            { title: 'First Name' },
            { title: 'Last Name' },
            {title: 'Specialists'}
        ],
    });
});