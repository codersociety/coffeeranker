# Test Post Commands

curl -X POST -H "Content-Type: application/json" -d '{ "a" :"1","b":"1"}' -o postlocation.html http://localhost:3000/location
curl -X POST -H "Content-Type: application/json" -d '{ "b" : "1" }' -o postbarista.html http://localhost:3000/barista
curl -X POST -H "Content-Type: application/json" -d '{ "c" : "1" }' -o postdrinker.html http://localhost:3000/drinker
curl -X POST -H "Content-Type: application/json" -d '{ "d" : "1" }' -o postdrink.html http://localhost:3000/drink
curl -X POST -H "Content-Type: application/json" -d '{ "e" : "1" }' -o postreview.html http://localhost:3000/review

# Test Get Commands

curl -o getlocation.html http://localhost:3000/location/xxx
curl -o getbarista.html http://localhost:3000/barista/xxx
curl -o getdrinker.html http://localhost:3000/drinker/xxx
curl -o getdrink.html http://localhost:3000/drink/xxx
curl -o getreview.html http://localhost:3000/review/xxx

# Test Get Commands

curl -o getlocationList.html http://localhost:3000/location
curl -o getbaristaList.html http://localhost:3000/barista
curl -o getdrinkerList.html http://localhost:3000/drinker
curl -o getdrinkList.html http://localhost:3000/drink
curl -o getreviewList.html http://localhost:3000/review

