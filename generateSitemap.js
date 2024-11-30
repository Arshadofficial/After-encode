const fs = require('fs');
const path = require('path');
const { create } = require('xmlbuilder2');

const baseUrl = 'https://afterencode.com'; // Your website URL
const routes = ['/ContactUs', '/bluehost', '/PrivacyPolicy','/godaddy', '/hostgator', '/hostinger', '/ionos', '/dreamhost', '/inmotion', '/AboutUs', '/TermsofUse' ]; // Your routes

const xml = create({ version: '1.0' }).ele('urlset');

routes.forEach(route => {
  xml.ele('url').ele('loc').txt(baseUrl + route);
});

const xmlString = xml.end({ prettyPrint: true });

const sitemapFilePath = path.join(__dirname, 'sitemap.xml');

try {
  fs.writeFileSync(sitemapFilePath, xmlString, 'utf8');
  console.log('Sitemap generated successfully at:', sitemapFilePath);
} catch (error) {
  console.error('Error generating sitemap:', error);
}
