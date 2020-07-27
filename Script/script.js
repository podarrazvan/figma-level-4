
const usersData=[
    { image: "/Imagini/image.png",
      link: "https://www.facebook.com/podar.razvan.142"
    },
    { image: "/Imagini/image.png",
    link: "https://www.facebook.com/podar.razvan.142"
  },
  { image: "/Imagini/image.png",
  link: "https://www.facebook.com/podar.razvan.142"
},
{ image: "/Imagini/image.png",
link: "https://www.facebook.com/podar.razvan.142"
},
{ image: "/Imagini/image.png",
link: "https://www.facebook.com/podar.razvan.142"
},

{ image: "/Imagini/image.png",
link: "https://www.facebook.com/podar.razvan.142"
},
{ image: "/Imagini/image.png",
link: "https://www.facebook.com/podar.razvan.142"
},
{ image: "/Imagini/image.png",
link: "https://www.facebook.com/podar.razvan.142"
},
{ image: "/Imagini/image.png",
link: "https://www.facebook.com/podar.razvan.142"
},
{ image: "/Imagini/image.png",
link: "https://www.facebook.com/podar.razvan.142"
},
]

let firstRow =" <div class=\"row1\">";
for(i = 0; i<5; i++){
    firstRow += `<a href="${usersData[i].link}">`;
    firstRow += `<img class="img" src="${usersData[i].image}" href="user ${i}">`;
    firstRow += "</a>";
}
firstRow += " </div>";
$('.img-friends').append(firstRow);

let secondRow =" <div class=\"row2\">";

for(i = 5; i<10; i++){
    secondRow += `<a href="${usersData[i].link}">`;
    secondRow += `<img class="img" src="${usersData[i].image}" href="user ${i}">`;
    secondRow += "</a>";
}
secondRow += " </div>";
$('.img-friends').append(secondRow);

const firstName = "Eros";
const lastName = "-";
const age = 4000;
const country = "Grecia";
const gender = "God";
const city = "Atena";

let user = `<div class=\"user-data\">
            <div class="profile-row1">
            <p class="text left">First Name <br> <b>${firstName}</b></p>
            <p class="text right">Age <br> <b>${age}</b></p>
            </div>

            <div class="profile-row2">
            <p class="text left">Last Name <br> <b>${lastName}</b></p>
            <p class="text right">Country <br> <b>${country}</b></p>
            </div>

            <div class="profile-row3">
            <p class="text left">Gender <br> <b>${gender}</b></p>
            <p class="text right">City <br> <b>${city}</b></p>
            </div></div>`;

$('.profile').append(user);