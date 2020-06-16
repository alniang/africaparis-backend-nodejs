set MONGO_HOME=C:\Program Files\MongoDB\Server\4.2
cd /d "%~dp0"
"%MONGO_HOME%\bin\mongoimport" --db projetAL04 --collection events --drop --file dataset/ebenafrica.json --jsonArray
"%MONGO_HOME%\bin\mongoimport" --db projetAL04 --collection eventsurls --drop --file dataset/ebenafrica-urls.json --jsonArray
"%MONGO_HOME%\bin\mongoimport" --db projetAL04 --collection eventslogos --drop --file dataset/ebenafrica-logos.json --jsonArray
pause