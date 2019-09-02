// var header = document.getElementById('header');
// header.textContent = globalConfig.headerText;

title = document.getElementById('title')
title.textContent = globalConfig.title

navbarImage = document.getElementById('navbar-logo')
navbarImage.setAttribute('src', globalConfig.logo)
navbarImage.classList.add(globalConfig.logoClass)

navbarHome = document.getElementById('navbar-home')
navbarHome.innerHTML += globalConfig.logoText

navMenu = document.getElementById('nav-menu')
navbarMenuItems = Object.keys(globalConfig.navbarMenu)
for (let i = 0; i < navbarMenuItems.length; i++) {
  let menu = navbarMenuItems[i]
  let li  = document.createElement('li')
  li.innerHTML = '<a href="#">' + menu + '</a>'

  li.addEventListener('click', showStaticPage)

  navMenu.appendChild(li)
}


// SIDEBAR

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

sidebarImage = document.getElementById('sidebar-image')
sidebarImage.setAttribute('src', globalConfig.sidebarImage)

sidebarLogo = document.getElementById('sidebar-logo')
sidebarLogo.setAttribute('src', globalConfig.logo)

sidebarTitle = document.getElementById('sidebar-title')
sidebarTitle.textContent = globalConfig.title

slideOutMenu = document.getElementById('slide-out')
for (let i = 0; i < globalConfig.sidebarItems.length; i++) {
  item = globalConfig.sidebarItems[i]
  if (item.type == 'li') {
    let li = document.createElement('li')
    let a = document.createElement('a')

    a.className = 'waves-effect'
    a.setAttribute('href', '#!')
    a.setAttribute('looker-link', item.text)
    a.innerHTML = '<i class="material-icons">' + item.icon + '</i>' + item.text

    a.addEventListener('click', changeDashboard)

    li.appendChild(a)
    slideOutMenu.appendChild(li)
  } else if (item.type == 'subheader') {
    let divider = document.createElement('li')
    divider.innerHTML = '<div class="divider"></div>'
    slideOutMenu.appendChild(divider)

    let li = document.createElement('li')
    li.innerHTML = '<a class="subheader">' + item.text + '</a>'
    slideOutMenu.appendChild(li)
  }
}

// SET UP DEFAULT DASHBOARD
mainDashboard = document.getElementById('looker_dashboard')
mainDashboard.setAttribute('src', globalConfig.mainDashboard)


function changeDashboard(e) {
  newDash = e.target.attributes['looker-link'].value
  newDashURL = globalConfig.dashboards[newDash]

  // header.textContent = newDash
  mainDashboard.setAttribute('src', newDashURL)
  mainDashboard.style.display = 'block'
}


function showStaticPage(e) {
  pageURL = globalConfig.navbarMenu[e.target.textContent]
  mainDashboard.setAttribute('src', pageURL)
}