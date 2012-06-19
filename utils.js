(function() {
    "use strict";
    var root = this;
    var Quiz = function(contestData) {
	this.contest = contestData;
    };

    Quiz.prototype.isSelect = function(tagName) {
	return tagName.toUpperCase() === 'SELECT'; 
    };
     Quiz.prototype.isInput = function(tagName) {
	return tagName.toUpperCase() === 'INPUT';
    };	 
     Quiz.prototype.prefillInput = function(input, text) {
	input.value = text;
    };
    
     Quiz.prototype.prefillSelect = function(select, text) {
	jQuery('option', select).each(function() {
	    if (this.innerHTML === text) {
		this.selected = true;
	    };
	});
    };
    
     Quiz.prototype.prefillField = function(field, text) {
	if (this.isInput(field.tagName)) {
	    this.prefillInput(field, text);
	} else if (this.isSelect(field.tagName)) {
	    this.prefillSelect(field, text);
	}
    };

    Quiz.prototype.questionMatches = function(questionIndex, text) {
	var questionProperty = "question" + questionIndex;
	return this.contest[questionProperty] === text;
    };
    
    Quiz.prototype.prefillQuizForm = function(form) {
	var numberOfQuestions = 5;
	for (var i = 1; i <= numberOfQuestions; i++) {
	    var answerName = 'contest.answer' + i;
	    var questionName = 'contest.question' + i;
	    var contestProperty = "answer" + i;
	    var _this = this;
	jQuery('[name="' + answerName + '"]', form).each(function() {
	    if (_this.questionMatches(i, jQuery('input[name="'+ questionName + '"]', form).val())) {
		_this.prefillField(this, _this.contest[contestProperty]);
	    }
	});
	}
    };
    root.Quiz = Quiz;
}).call(this);
