var movieDb = [
    {name: "World Of Warcraft", watched: true,rating: 5},
    {name: "My Little Pony", watched: false, rating: 4.5},
    {name: "2012", watched: true, rating: 5}
  ];
movieDb.forEach(function (data,i){
  if(data.watched === true)
  {
    console.log("You have watched" + " \"" + data.name + "\" " + "- " + data.rating + " stars");
  }
  else{
    console.log("You have not seen" + " \"" + data.name + "\" " + "- " + data.rating + " stars");
  }
});
