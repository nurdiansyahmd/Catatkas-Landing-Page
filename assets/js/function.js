// sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px"
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0"
}

//Button unduh
const content = document.getElementById('btn')

const btn = document.createElement('button')
btn.setAttribute("id", "btn-unduh")
btn.textContent = "Unduh Aplikasi"
content.appendChild(btn)

//Profile
const profile = document.getElementById('profile')
const image = document.createElement('img')
image.setAttribute("src", "./assets/images/Nurdiansyah.jpg")
image.setAttribute("alt", "Profile")
profile.appendChild(image)