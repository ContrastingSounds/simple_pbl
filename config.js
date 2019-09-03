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
  embedDomain: 'https://contrastingsounds.github.io', // This value based on using VS Code with Live Server extension
  lookerTheme: 'LookerBlue', // Theme
  headerText: 'Introduction to Looker',
  title: 'Gazprom Data Workshop',
  favicon: '/img/tue4th-favicon.png',
  logo: 'img/tue4th-logo.png',
  logoHeight: '50px', // Defaults to 50px, but adjust this setting to get your logo at the optimum size
  logoTop: '4px', // Defaults to 8px, but adjust this setting to get your logo in the right place
  logoClass: '', // Can set this to 'circle' if it helps mask a circular logo with white background
  logoText: 'Gazprom Data Workshop',
  
  navbarBackgroundColor: 'white', // Palette here: https://materializecss.com/color.html
  navbarBackgroundColorModifier: '', // formula: 'lighten-x' or 'darken-x', with x between 1 and 5
  navbarTextColor: 'blue', // tested with 'white' and 'black'
  navbarTextColorModifier: 'text-darken-2', // formula: 'text-lighten-x' or 'text-darken-x', with x between 1 and 5
  
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
    'Shipping Logistics': {
      category: 'dashboards',
      number: 3322,
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

  sidebarImage: 'img/tue4th-favicon.png',
  sidebarBackgroundImage: 'img/tue4th-background.jpg',
  sidebarItems: [
    {
      type: 'li',
      icon: 'euro_symbol',
      content: 'Business Pulse',
    },
    {
      type: 'li',
      icon: 'dashboard',
      content: 'Brand Analytics',
    },
    {
      type: 'subheader',
      text: 'Operations',
    },
    {
      type: 'li',
      icon: 'access_time',
      content: 'Shipping Logistics',
    },
    {
      type: 'subheader',
      text: 'Salesforce',
    },
    {
      type: 'li',
      icon: 'euro_symbol',
      content: 'All Sales Pulse',
    },
    {
      type: 'subheader',
      text: 'Data Exploration',
    },
    {
      type: 'li',
      icon: 'shopping_cart',
      content: 'Orders',
    },
  ],

  navbarMenu: {
    'Business Value': 'html/business_value.html',
    'Agile Delivery': 'html/agile_delivery.html',
    'Cloud Native': 'html/cloud_native.html',
  },
}
