var myStatechart = Statechart.create();
myStatechart.addState('first', {
  substatesAreConcurrent: true,
	// Base Events
	enterState: function(){
	  console.log('Enter State: ', this.name);
	},
	exitState: function(){ 
	  console.log('Exit State: ', this.name);
	},
	testEvent: function(){
	  console.log('In ', this.name, ' firing event: testEvent');
    this.goToState('second');
	}
});
myStatechart.addState('first.first', {
  parentState: 'first',
  initialSubstate: 'first.first.first',
	// Base Events
	enterState: function(){
	  console.log('Enter State: ', this.name);
	},
	exitState: function(){ 
	  console.log('Exit State: ', this.name);
	},
	
	testEvent: function(){
	  console.log('In ', this.name, ' firing event: testEvent');
	}
});
myStatechart.addState('first.second', {
  parentState: 'first',
  initialSubstate: 'first.second.first',
	// Base Events
	enterState: function(){
	  console.log('Enter State: ', this.name);
	},
	exitState: function(){ 
	  console.log('Exit State: ', this.name);
	},
	
	testEvent: function(){
	  console.log('In ', this.name, ' firing event: testEvent');
	}
});
myStatechart.addState('first.first.first', {
  parentState: 'first.first',
	// Base Events
	enterState: function(){
	  console.log('Enter State: ', this.name);
	},
	exitState: function(){ 
	  console.log('Exit State: ', this.name);
	},
	
	testEvent: function(){
	  console.log('In ', this.name, ' firing event: testEvent');
	  this.goToState('first.first.second');
	}
});
myStatechart.addState('first.first.second', {
  parentState: 'first.first',
	// Base Events
	enterState: function(){
	  console.log('Enter State: ', this.name);
	},
	exitState: function(){ 
	  console.log('Exit State: ', this.name);
	},
	
	testEvent: function(){
	  console.log('In ', this.name, ' firing event: testEvent');
	}
});
myStatechart.addState('first.second.first', {
  parentState: 'first.second',
	// Base Events
	enterState: function(){
	  console.log('Enter State: ', this.name);
	},
	exitState: function(){ 
	  console.log('Exit State: ', this.name);
	},
	
	testEvent: function(){
	  console.log('In ', this.name, ' firing event: testEvent');
	}
});
myStatechart.addState('first.second.second', {
  parentState: 'first.second',
	// Base Events
	enterState: function(){
	  console.log('Enter State: ', this.name);
	},
	exitState: function(){ 
	  console.log('Exit State: ', this.name);
	},
	
	testEvent: function(){
	  console.log('In ', this.name, ' firing event: testEvent');
	}
});
myStatechart.addState('second', {
  initialSubstate: 'second.first',
	// Base Events
	enterState: function(){
	  console.log('Enter State: ', this.name);
	},
	exitState: function(){ 
	  console.log('Exit State: ', this.name);
	},
	
	testEvent: function(){
	  console.log('In ', this.name, ' firing event: testEvent');
	}
});
myStatechart.addState('second.first', {
  parentState: 'second',
	// Base Events
	enterState: function(){
	  console.log('Enter State: ', this.name);
	},
	exitState: function(){ 
	  console.log('Exit State: ', this.name);
	},
	
	testEvent: function(){
	  console.log('In ', this.name, ' firing event: testEvent');
	}
});
myStatechart.addState('second.second', {
  parentState: 'second',
	// Base Events
	enterState: function(){
	  console.log('Enter State: ', this.name);
	},
	exitState: function(){ 
	  console.log('Exit State: ', this.name);
	},
	
	testEvent: function(){
	  console.log('In ', this.name, ' firing event: testEvent');
	}
});
myStatechart.initStates('first');
window.myStatechart = myStatechart;