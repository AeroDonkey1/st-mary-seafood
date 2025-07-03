# St. Mary Seafood Website

A beautiful, professional website for St. Mary Seafood & Marina - a family-owned Louisiana seafood business serving fresh catches since 1986.

## 🌟 Features

### Public Website
- **Stunning Hero Section** with family photos and Louisiana bayou theme
- **About Section** telling the Edgar family's three-generation story
- **Fresh Catch Display** with dynamic pricing and availability
- **Contact Information** with business hours and location
- **Responsive Design** that works on all devices
- **Professional Navigation** with smooth scrolling

### Admin Panel
- **Secure Login System** protecting the admin area
- **User-Friendly Interface** designed for non-technical users
- **Easy Photo Management** with existing image gallery and custom URL support
- **Pricing Management** with real-time updates
- **Inventory Control** to mark items as available/out of stock
- **Category Organization** (Crawfish, Crab, Shrimp, Fish, Oyster)
- **Featured Items** highlighting special catches

## 🚀 Getting Started

### Prerequisites
- Node.js (version 20.18.1 or higher)
- npm

### Installation & Running

1. **Start the Backend Server**
   ```bash
   node backend/server/server.js
   ```
   The API will be available at `http://localhost:3001`

2. **Start the Frontend Development Server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5173`

### Building for Production
```bash
npm run build
```

## 🔐 Admin Access

### Accessing the Admin Panel
1. Visit the website at `http://localhost:5173`
2. Click the "⚙️ Admin" link in the navigation bar
3. Enter your admin credentials (contact the website administrator for login details)
4. You'll be taken to the Seafood Pricing Manager

### Security Features
- **Server-side Authentication:** Credentials are stored securely on the backend server
- **Session Management:** 24-hour login sessions with automatic expiration
- **Secure Communication:** All login attempts are validated through the API
- **No Client-side Credentials:** Username and password are never stored in the frontend code

### Using the Admin Panel

#### Managing Seafood Items
- **View All Items:** See all seafood products in a card-based layout
- **Edit Details:** Click on any field to edit name, description, price, category
- **Change Photos:** Hover over any product image and click "📷 Change Photo"
- **Set Availability:** Use checkboxes to mark items as available, featured, or seasonal
- **Save Changes:** Click "💾 Save Changes" to update the item
- **Delete Items:** Click "🗑️ Delete Item" to remove products

#### Adding New Items
1. Click the "➕ Add New Item" card
2. A new seafood item will be created with default values
3. Edit all the fields as needed
4. Save your changes

#### Photo Management
When changing photos, you can:
- **Select from existing photos** in the gallery
- **Use custom URLs** by entering an image URL
- **Fallback images** are automatically used if an image fails to load

#### Categories Available
- 🦞 Crawfish
- 🦀 Crab  
- 🦐 Shrimp
- 🐟 Fish
- 🦪 Oyster

## 🎨 Design Features

### Color Palette
- **Primary Blue:** Deep Louisiana bayou blue
- **Accent Orange:** Warm Louisiana sunset orange
- **Seafoam Green:** Fresh water green
- **Cream:** Warm, welcoming background

### Typography
- **Headers:** Georgia serif for elegance
- **Body Text:** Inter sans-serif for readability
- **Accent Text:** Brush Script for Louisiana charm

### Animations
- Smooth hover effects
- Floating elements in hero section
- Fade-in animations
- Loading states

## 📱 Responsive Design

The website is fully responsive and works beautifully on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Technical Details

### Frontend
- **Vue.js 3** with Composition API
- **Vue Router** for navigation
- **CSS Custom Properties** for consistent theming
- **Modern CSS Grid & Flexbox** for layouts

### Backend
- **Express.js** server
- **LowDB** for data storage
- **CORS** enabled for frontend communication
- **RESTful API** endpoints

### API Endpoints
- `GET /api/pricing` - Get all seafood items
- `POST /api/pricing` - Add new seafood item
- `PUT /api/pricing/:id` - Update existing item
- `DELETE /api/pricing/:id` - Delete item

## 📁 Project Structure

```
st-mary-seafood/
├── backend/
│   ├── server/
│   │   └── server.js          # Express server
│   └── data/
│       ├── pricing.json       # Seafood data storage
│       └── pricing.js         # Data management
├── public/
│   └── images/               # Seafood and family photos
├── src/
│   ├── components/           # Vue components
│   ├── pages/               # Page components
│   ├── router/              # Vue Router config
│   ├── views/               # View components
│   ├── App.vue              # Main app component
│   ├── main.js              # App entry point
│   └── style.css            # Global styles
├── package.json
└── README.md
```

## 🛡️ Security Features

- **Session-based authentication** with 24-hour expiration
- **Password protection** for admin access
- **Input validation** on all forms
- **Secure credential storage** in localStorage
- **Automatic logout** after session expiration

## 🎯 User Experience

### For Customers
- **Easy navigation** with clear call-to-action buttons
- **Phone number prominently displayed** for orders
- **Beautiful product showcase** with pricing
- **Family story** builds trust and connection
- **Contact information** clearly presented

### For Admin Users
- **Intuitive interface** designed for non-technical users
- **Visual feedback** with success messages
- **Confirmation dialogs** for destructive actions
- **Error handling** with helpful messages
- **Responsive design** works on any device

## 📞 Support

For technical support or questions about the website:
- Review this README file
- Check the browser console for any error messages
- Ensure both backend and frontend servers are running
- Verify the admin credentials are correct

## 🎉 Features for Non-Technical Users

The admin panel is specifically designed to be user-friendly:

1. **Visual Interface** - Everything is point-and-click
2. **Clear Labels** - All fields are clearly labeled
3. **Helpful Placeholders** - Example text in all input fields
4. **Image Gallery** - Easy photo selection from existing images
5. **Custom URLs** - Option to use any image from the internet
6. **Instant Feedback** - Success messages when changes are saved
7. **Safety Features** - Confirmation before deleting items
8. **Automatic Backup** - All changes are saved to the database

The website represents the Edgar family's commitment to quality and tradition, now beautifully showcased online with modern web technology while maintaining the authentic Louisiana charm.
