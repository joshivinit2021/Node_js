var events=require('events');

var eventsemitter=new events.EventEmitter();

var getoder=function(){
    console.log("Order is placed");
}
eventsemitter.on('oderP',getoder);
eventsemitter.emit('oderP');