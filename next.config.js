/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	env: {
		API_ENTRY: process.env.API_ENTRY,
	},
}

module.exports = nextConfig
