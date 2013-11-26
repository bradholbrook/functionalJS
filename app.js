//Brad Holbrook
//11/26/13

//Exercises summarized from http://reactive-extensions.github.io/learnrx/

//==============================
//Traverse array without indexes
//===============================
{
	function applytraverse(array)
	{
		array.forEach(function(name) { console.log(name); });
	}
	applytraverse(["Ben", "Jafar", "Matt", "Priya", "Brian"]);
}//collapse scope

//===============================
//Project array with forEach()
//Project array with map()
//===============================
{
	var projectarray = [
				{
	                "id": 70111470,
	                "title": "Die Hard",
	                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	                "rating": [4.0],
	                "bookmark": []
	            },
	            {
	                "id": 654356453,
	                "title": "Bad Boys",
	                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	                "rating": [5.0],
	                "bookmark": [{ id:432534, time:65876586 }]
	            },
	            {
	                "id": 65432445,
	                "title": "The Chamber",
	                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	                "rating": [4.0],
	                "bookmark": []
	            },
	            {
	                "id": 675465,
	                "title": "Fracture",
	                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	                "rating": [5.0],
	                "bookmark": [{ id:432534, time:65876586 }]
	            }
	        ];
	function applyproject(array)
	{
		var results = [];
    	array.forEach(function (video)
				{
				  results.push( { id:video.id, title:video.title } );	  
				});
    	return results;    
	}
	function applymap(array)
	{
		return array.map( function(video) { return { id:video.id, title:video.title } } );
	}
	console.log(applyproject(projectarray));
	console.log(applymap(projectarray));
}//collapse scope

//===============================
//Filter array using forEach()
//Filter array with filter()
//Combine filter() and map() 
//===============================
{
	var filterarray = [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id:432534, time:65876586 }]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id:432534, time:65876586 }]
            }
        ];
    function applyFilterForEach(array)
    {
    	var results = [];
  		array.forEach(
  			function(video){
  				if(video.rating==5) { results.push(video); }
  			}
  		);
  		return results;
    }
    function applyFilter(array)
    {
    	return array.filter(function(video) { return video.rating==5; } );
    }
    function applyFilterAndMap(array)
    {
    	return array.
        filter(function(video) {
            return video.rating === 5.0;
        }).
        map(function(video) {
            return video.id;
        });
    }
    console.log(applyFilterForEach(filterarray));
    console.log(applyFilter(filterarray));
}//collapse scope

//===============================
//===============================
{
	
}//collapse scope