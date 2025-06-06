#!/bin/bash

echo "Cleaning previous installations..."
rm -rf node_modules
rm -rf .next

echo "Installing dependencies..."
npm install

echo "Starting development server..."
npm run dev 