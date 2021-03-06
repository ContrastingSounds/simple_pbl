// Looker event handling – unused events
tileEvents = [
  'dashboard:tile:start',
  'dashboard:tile:complete',
]

dashboardEvents = [
  'dashboard:run:start',
  'dashboard:run:complete'
]

exploreEvents = [
  'explore:state:changed',
  'explore:run:start',
  'explore:run:complete',
]


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
logoStyle = 'position: relative; height:' + globalConfig.logoHeight + '; top:' + globalConfig.logoTop
navbarImage.setAttribute('style', logoStyle)

navbarHome = document.getElementById('navbar-home')
navbarHome.classList.add(globalConfig.navbarTextColor + '-text')
if (globalConfig.navbarTextColorModifier) {
  navbarHome.classList.add(globalConfig.navbarTextColorModifier)
}
navbarHome.innerHTML += globalConfig.logoText

navMenu = document.getElementById('nav-menu')
navbarMenuItems = Object.keys(globalConfig.navbarMenu)
for (let i = 0; i < navbarMenuItems.length; i++) {
  let li  = document.createElement('li')
  let a = document.createElement('a')

  a.setAttribute('href', '#')
  a.className = globalConfig.navbarTextColor + '-text'
  if (globalConfig.navbarTextColorModifier) {
    a.classList.add(globalConfig.navbarTextColorModifier)
  }
  a.innerHTML = navbarMenuItems[i]
  
  li.appendChild(a)
  li.addEventListener('click', showStaticPage)

  navMenu.appendChild(li)
}

// GO TO LOOKER BUTTON

escapeButton = document.getElementById('escape-button')
if (globalConfig.navbarTextColor == 'white') {
  escapeButton.classList.add('white')
  escapeButton.classList.add(globalConfig.navbarBackgroundColor + '-text' )
  if (globalConfig.navbarBackgroundColorModifier) {
    escapeButton.classList.add(globalConfig.navbarBackgroundColorModifier)
  }
} else {
  escapeButton.classList.add(globalConfig.navbarTextColor)
  if (globalConfig.navbarTextColorModifier) {
    escapeButton.classList.add(globalConfig.navbarTextColorModifier.substr(5)) // substr removes the 'text-' prefix
  }
}
escapeButton.setAttribute('href', globalConfig.baseURL)

// SIDEBAR

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

sidebarBackgroundImage = document.getElementById('sidebar-image')
sidebarBackgroundImage.setAttribute('src', globalConfig.sidebarBackgroundImage)

sidebarLogo = document.getElementById('sidebar-logo')
sidebarLogo.setAttribute('src', globalConfig.sidebarImage)

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

// NOTE: most events are ignored. Placeholders below will make it easy to add
//       new handlers if required.
function handleEmbedEvent(e) {
  console.log(e.type)
  if (e.type == 'page:properties:changed') {
    mainDashboard.setAttribute('height', e.height)
  } else if ( e.type == 'page:changed' ) {
    escapeButton.setAttribute('href', e.page.absoluteUrl.replace('embed/', ''))
  } else if (e.type == 'dashboard:filters:changed') {
    console.log('Filters changed:', e.dashboard.dashboard_filters)
  } else if (e.type == 'explore:state:changed') {
    mainDashboard.setAttribute('height', 600)
  } else if ( tileEvents.includes(e.type) ) {
    //
  } else if ( dashboardEvents.includes(e.type) ) {
    //
  } else if ( exploreEvents.includes(e.type) ) {
    //
  } else {
    console.log('Looker:', e.type, e)
  }
}


function sendEmbedEvent(e) {
  mainDashboard.contentWindow.postMessage(e, globalConfig.baseURL)
}


function changeDashboard(e) {
  contentName = e.target.attributes['looker-link'].value
  content = globalConfig.content[contentName]
  newURL = getEmbedURL(content)

  // header.textContent = newDash
  mainDashboard.setAttribute('src', newURL)
  if (content.category == 'explore') {
    mainDashboard.setAttribute('height', '600')
  } 
  mainDashboard.style.display = 'block'
}


function showStaticPage(e) {
  pageURL = globalConfig.navbarMenu[e.target.textContent]
  mainDashboard.setAttribute('src', pageURL)
  escapeButton.setAttribute('href', globalConfig.baseURL)
}


function getEmbedURL(content) {
  let embedURL = globalConfig.baseURL
        + '/embed/'
        + content.category
        + '/'
        + content.number
        + '?embed_domain='
        + globalConfig.embedDomain

  if (content.category == 'dashboards') {
    embedURL += '&hide_title=true&theme=' + globalConfig.lookerTheme
  }

  return embedURL
}
