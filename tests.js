var expect = chai.expect;
describe('Utilities', function() {
    var ourQuiz;
    var contestData = {
	    question1: 'How Are you?',
	    answer1: 'Fine, thanks.',
	    question2: 'Status',
	    answer2: 'Great',
	    question3: 'Who is the greatest painter?',
	    answer3: 'Raphael'
    };

    before(function() {
		ourQuiz = new Quiz(contestData);
    });
    it('should correctly list data', function() {
	expect(ourQuiz.isSelect('select')).to.be.true;
	expect(ourQuiz.isSelect('input')).to.be.false;
	expect(ourQuiz.isInput('input')).to.be.true;
	expect(ourQuiz.isSelect('input')).to.be.false;
    });

    it('should select the correct option', function() {
	var select = document.getElementById('testSelect');
	ourQuiz.prefillSelect(select, 'Hello');
	expect(select.children[0].selected).to.be.true;
    });
   
    it('should identify matching questions', function() {
	expect(ourQuiz.questionMatches(1, contestData.question1)).to.be.true;
    });
    
    it('should identify non-matching questions', function() {
	expect(ourQuiz.questionMatches(1, contestData.question1 + 'blah')).to.be.false;
    });
});

describe('Main function', function() {
    var form, ourQuiz;
    var contestData = {
	    question1: 'How Are you?',
	    answer1: 'Fine, thanks.',
	    question2: 'Status',
	    answer2: 'Great',
	    question3: 'Who is the greatest painter?',
	    answer3: 'Raphael'
    };

    before(function() {
		ourQuiz = new Quiz(contestData);
    });
   
    beforeEach(function() {
	var form = document.getElementById('testform');
	document.getElementById('contestOption').value = contestData.answer2;
	jQuery('input[name="contest.question1"]').val(contestData.question1);
	jQuery('input[name="contest.question2"]').val(contestData.question2);
	ourQuiz.prefillQuizForm(form);
    });
    
    it('should fill the text fields that correspond to an answer', function() {
	expect(document.getElementById('contestInput').value).to.equal(contestData.answer1);
    });

    it('should select the options that correspond to an answer', function() {
	expect(document.getElementById('contestOption').selected).to.be.true;
    });

    it('should skip fields where the question has changed', function() {
	expect(document.getElementById('badQuizAnswer').value).to.be.empty;
    });
});

describe('Initialization', function() {
    it('should initialize the main object', function() {
	var contestData = {
	    question1: 'How Are you?',
	    answer1: 'Fine, thanks.',
	    question2: 'Status',
	    answer2: 'Great',
	    question3: 'Who is the greatest painter?',
	    answer3: 'Raphael'
	};
	var contest = new Quiz(contestData);
    });
});


