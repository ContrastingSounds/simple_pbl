// On Looker instance:
// admin/embed - Set Embedded Domain Whitelist
// admin/themes - Set Theme (if any – good idea to copy Looker theme and set background to #ffffff )

// All icons refer to the Material Design icon set. Refer to https://materializecss.com/icons.html.

// 1. Update images in img/ folder (usually required)
// 2. Be sure to baseURL and embedDomain
// 3. Update content: {} with your chosen dashboards, looks and explores 
//    - 'Main Dashboard' is required, and will be the dashboard shown by default
// 4. Update sidebarItems: {} 
//    - Use type: 'li' for a link to content
//      - Use content: '' to refer to one of the keys in your content object (also used for the display text)
//    - Use type: 'subheader' to create a subheader
//      - Use text: '' for the text you want displayed in the sidebar
// 5. Update html in html/ folder (not necessarily required)
 

var globalConfig = {
  baseURL: 'https://demo.looker.com',
  embedDomain: 'http://127.0.0.1:5500', // This value based on using VS Code with Live Server extension
  lookerTheme: 'LookerWhite', // Theme
  headerText: 'Introduction to Looker',
  title: 'Looker Proof of Value',
  favicon: '/img/favicon.ico',
  logo: 'img/logo.png',
  logoClass: '', // Can set this to 'circle' if it helps mask a circular logo with white background
  logoText: 'Powered By Looker',
  
  navbarBackgroundColor: 'red',
  navbarTextColor: 'white',
  
  content: {
    // Main Dashboard is required
    'Main Dashboard': {
      category: 'dashboards',
      number: 159,
    },

    // Choose any number of dashboards, looks and explores
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

  navbarMenu: {
    'Business Value': 'html/business_value.html',
    'Time to Market': 'html/time_to_market.html',
    'Cloud Native': 'html/cloud_native.html',
  },
}