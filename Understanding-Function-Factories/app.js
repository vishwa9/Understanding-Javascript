function makeGreeting(language){
	return function(firstName, lastName){
		if(language === 'en'){
			console.log('Hello '+ firstName+ ' '+ lastName);
		}
		if(language === 'es'){
			console.log('Hola '+ firstName+ ' '+ lastName);
		}
	}
}

 var greetEnglish = makeGreeting('en');

 var greetSpanish = makeGreeting('es');

greetEnglish('Vishwa','Chauhan'); // Hello Vishwa Chauhan
greetSpanish('Vishwa', 'Chauhan'); // Hola Vishwa Chauhan
