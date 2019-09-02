var lookerTheme = 'Looker'

var globalConfig = {
  headerText: 'Introduction to Looker',
  title: 'Looker Proof of Value',
  logo: 'img/logo.png',
  logoClass: 'circle',
  logoText: 'Looker PBL',

  navbarMenu: {
    'Business Value': 'html/business_value.html',
    'Time to Market': 'html/time_to_market.html',
    'Cloud Native': 'html/cloud_native.html',
  },
  
  sidebarImage: 'img/image.jpg',
  sidebarItems: [
    {
      type: 'li',
      icon: 'dashboard',
      text: 'Product Overview',
    },
    {
      type: 'li',
      icon: 'bar_chart',
      text: 'Account Overview',
    },
    {
      type: 'subheader',
      text: 'Replicated Dashboards',
    },
    {
      type: 'li',
      icon: 'bubble_chart',
      text: 'Sales Performance',
    },
  ],

  dashboards: {
    'Sales Performance': 'https://saleseng.dev.looker.com/embed/dashboards/321?hide_title=true&theme=' + lookerTheme,
    'Product Overview': 'https://saleseng.dev.looker.com/embed/dashboards/522?hide_title=true&theme=' + lookerTheme,
    'Account Overview': 'https://saleseng.dev.looker.com/embed/dashboards/312?hide_title=true&theme=' + lookerTheme,
  },

  mainDashboard: 'https://saleseng.dev.looker.com/embed/dashboards/321?hide_title=true&theme=' + lookerTheme
}