cd ~/apex-frontend
npm run build:prod

rm -rf ~/../var/www/apex-frontend/html
mv ~/apex-frontend/build ~/../var/www/apex-frontend/html