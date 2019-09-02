var globalConfig = {
  baseURL: 'https://demo.looker.com',
  lookerTheme: 'LookerWhite',
  headerText: 'Introduction to Looker',
  title: 'Looker Proof of Value',
  favicon: '/img/favicon.ico',
  logo: 'img/logo.png',
  logoClass: 'circle', 
  logoText: 'Powered By Looker',
  
  navbarBackgroundColor: 'red',
  navbarTextColor: 'white',

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
      content: 'Business Pulse',
    },
    {
      type: 'li',
      icon: 'bar_chart',
      content: 'Brand Analytics',
    },
    {
      type: 'subheader',
      text: 'Salesforce',
    },
    {
      type: 'li',
      icon: 'bubble_chart',
      content: 'All Sales Pulse',
    },
    {
      type: 'subheader',
      text: 'Data Exploration',
    },
    {
      type: 'li',
      icon: 'bubble_chart',
      content: 'Orders',
    },
  ],

  content: {
    'Main Dashboard': {
      category: 'dashboards',
      number: 159,
    },
    'Business Pulse': {
      category: 'dashboards',
      number: 159
    },
    'Brand Analytics': {
      category: 'dashboards',
      number: 8,
    },
    'All Sales Pulse': {
      category: 'dashboards',
      number: 317,
    },
    'Orders': {
      category: 'explore',
      number: 'thelook/order_items',
    },
  },
}