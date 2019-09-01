var lookerTheme = 'Looker'

var globalConfig = {
  headerText: 'Introduction to Looker',
  title: 'Looker Proof of Value',
  logo: 'https://storage.googleapis.com/media-jw-test-environment/images/Vodafone%20iView%20Logo.png',
  logoText: 'OSR',

  navbarMenu: {
    'Business Value': 'business_value.html',
    'Time to Market': 'time_to_market.html',
    'Radical Simplicity': 'cloud_native_architecture.html',
  },
  
  sidebarImage: 'https://public-vodafone-a.s3-eu-west-1.amazonaws.com/wp-content/uploads/2019/07/unlimited-1024x569.jpg',
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