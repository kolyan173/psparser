var fs = require('fs');
var exec = require('child_process').exec;
var logFilePath = '/Users/sabinahasan-ogly/Library/Logs/PokerStars/PokerStars.log.0';
var logging = exec('tail -F '+logFilePath);

var cardPattern = /::: [\d+]*[c,h,d,s]/g;

logging.stdout.on('data', function(data) {
	var cardNominalIndex = data.indexOf('::: ')
	var getCardNominal = data.match(cardPattern) && data.match(cardPattern).map(function(item) {
							return item.slice(4);
						});

	console.log(data);
	
	if (getCardNominal &&  getCardNominal.length) {
		// console.log(getCardNominal);
		// console.log(data);
	}
});
