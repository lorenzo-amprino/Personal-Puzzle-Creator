echo Compilo parte Frontend
cd frontend/ppc-app
cmd /c ng build --prod
cd ..
cd ..
echo Compilo parte Backend e Impacchetto
cmd /c mvn package
echo ripristino build per sviluppo
cd frontend/ppc-app
cmd /c ng build