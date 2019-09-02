// var header = document.getElementById('header');
// header.textContent = globalConfig.headerText;

title = document.getElementById('title')
title.textContent = globalConfig.title

favicon = document.getElementById('favicon')
favicon.setAttribute('href', globalConfig.favicon)

navbar = document.getElementById('navbar')
navbar.classList.add(globalConfig.navbarBackgroundColor)

navbarImage = document.getElementById('navbar-logo')
navbarImage.setAttribute('src', globalConfig.logo)
if (globalConfig.logoClass) {
  navbarImage.classList.add(globalConfig.logoClass)
}

navbarHome = document.getElementById('navbar-home')
navbarHome.classList.add(globalConfig.navbarTextColor + '-text')
navbarHome.innerHTML += globalConfig.logoText

navMenu = document.getElementById('nav-menu')
navbarMenuItems = Object.keys(globalConfig.navbarMenu)
for (let i = 0; i < navbarMenuItems.length; i++) {
  let menu = navbarMenuItems[i]
  let li  = document.createElement('li')
  li.innerHTML = '<a href="#" class="' + globalConfig.navbarTextColor + '-text">' + menu + '</a>'

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
    a.setAttribute('looker-link', item.content)
    a.innerHTML = '<i class="material-icons">' + item.icon + '</i>' + item.content

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
mainDashContent = globalConfig.content['Main Dashboard']
mainDashURL = getEmbedURL(mainDashContent)
mainDashboard.setAttribute('src', mainDashURL)


window.addEventListener('message', function(event) {
  if (event.source === mainDashboard.contentWindow) {
    if (event.origin == globalConfig.baseURL) {
      payload = JSON.parse(event.data)
      handleEmbedEvent(payload)
    }
  }
});


function handleEmbedEvent(e) {
  if (e.type == 'page:properties:changed') {
    mainDashboard.setAttribute('height', e.height)
  } else {
    console.log('Unused Looker event:', e)
  }
}


function changeDashboard(e) {
  contentName = e.target.attributes['looker-link'].value
  content = globalConfig.content[contentName]
  newURL = getEmbedURL(content)

  // header.textContent = newDash
  mainDashboard.setAttribute('src', newURL)
  if (content.category == 'explore') {
    mainDashboard.setAttribute('height', '600')
  } else {
    mainDashboard.setAttribute('height', '2500')
  }
  mainDashboard.style.display = 'block'
}


function showStaticPage(e) {
  pageURL = globalConfig.navbarMenu[e.target.textContent]
  mainDashboard.setAttribute('src', pageURL)
}


function getEmbedURL(content) {
  let embedURL = globalConfig.baseURL
        + '/embed/'
        + content.category
        + '/'
        + content.number
        + '?embed_domain='
        + globalConfig.embedDomain
        + '&hide_title=true&theme='
        + globalConfig.lookerTheme

  return embedURL
}