var express = require('express');
const apiRouter = express.Router();
var myGenericMongoEvents = require('./my_generic_mongo_events');
/*
function replace_mongoId_byCode(event){
	event._id = event.titre;
	delete event._id; 
	return event;
}

function replace_mongoId_byCode_inArray(eventArray){
	for(i in eventArray){
		replace_mongoId_byCode(eventArray[i]);
	}
	return eventArray;
}
*/
//exemple URL: http://localhost:8282/devise-api/public/devise (returning all devises)
//             http://localhost:8282/devise-api/public/devise?changeMini=1.05
apiRouter.route('/events-api/public/events')
.get( function(req , res  , next ) {
	var changeMini = Number(req.query.changeMini);
	var mongoQuery = changeMini ? { change: { $gte: changeMini }  } : { } ;
	//console.log("mongoQuery="+JSON.stringify(mongoQuery));
	myGenericMongoEvents.genericFindList('fusionEbenafrica',mongoQuery,function(err,events){
		   //res.send(replace_mongoId_byCode_inArray(events));
		   res.send(events);
	});//end of genericFindList()
});

apiRouter.route('/boutique-api/public/articles')
.get( function(req , res  , next ) {
	var changeMini = Number(req.query.changeMini);
	var mongoQuery = changeMini ? { change: { $gte: changeMini }  } : { } ;
	//console.log("mongoQuery="+JSON.stringify(mongoQuery));
	myGenericMongoEvents.genericFindList('fusionAfrikrea',mongoQuery,function(err,articles){
		   //res.send(replace_mongoId_byCode_inArray(events));
		   res.send(articles);
	});//end of genericFindList()
});

exports.apiRouter = apiRouter;