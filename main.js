menu_list_array = ["Veg Margherita Pizza",
   "Chicken Tandoori Pizza",
   "Paneer Tikka Pizza",
   "Veg Supreme Pizza",
   "Farmhouse Pizza"
];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0; i<=menu_list_array.lenght; i++)
{
htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'
}
htmldata=htmldata+"</ol>";
document.getElementById("display_menu").innerHTML=htmldata;

}
function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section> class='card'>"
for(var i=0; i<=menu_list_array.lenght; i++){
htmldata=htmldata+'<div class="card">'+'<img src="images/pizza.png">'+menu_list_array[i]+'</div>';
document.getElementById("display_addedmenu").innerHTML=htmldata;
}
htmldata=htmldata+"</section>";

}

function add_top(){
//Complete the code
}