echo "Liaison à la branche MAIN"
git checkout main

echo "Building de l'application"
npm run build

echo "Déploiement en cours..."
scp -r build/* root@173.230.131.139:/var/www/173.230.131.139/

echo "SUCCESSFULLY!!!"
echo "Happy use!"