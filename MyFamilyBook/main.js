


var images_array = [ 
    
    "https://cdn.waterstones.com/bookjackets/large/9780/3160/9780316070409.jpg",
    
    "https://i.pinimg.com/originals/8c/ec/f9/8cecf9fa86047f9ab5b5807ba3814638.gif",
    
    "https://i.pinimg.com/originals/4a/da/45/4ada45c81c5b3a01f90c9dd967b0f363.png",
    
   "https://www.pngitem.com/pimgs/m/140-1401268_winnie-the-pooh-hunny-pot-coloring-page-hd.png",
    
   "https://lh3.googleusercontent.com/proxy/mfdG9oM6OoIQmeXi1nJyWH6jKYvnar9e6Gdp015QEwVdCvbsW5YcjvWhTEyo0hfU8Sc62CD4BepJg4p4cgeQJHvsJvXz"
   
];

// list of names

var names_array = [

        "The Family Book",
        "Vaishnavi Kortikere ",
        "Suchitra Dwarakanath",
        "Madhusudan Kortikere",
        "...and many more!"

  ];

// initialize the variable
var i = 0;

//display the 1st elements of the array
document.getElementById("names").innerHTML=names_array[i];
document.getElementById("album").src=images_array[i];

  
function nextslide(){
 //   alert(names_array[j]);

    i++;
          
        document.getElementById("names").innerHTML=names_array[i];
        document.getElementById("album").src=images_array[i];

        // RESET LOGIC //
        if ((i >= images_array.length) && (i >= names_array.length )) {
        //if i = 4 , then it has reached array length of 5 [0,1,2,3,4] , then reset index to 0
           i=0; j=0;
           document.getElementById("names").innerHTML=names_array[i];
           document.getElementById("album").src=images_array[i];
        }
    }
    
  