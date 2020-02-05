// code for first multistep form

const form = document.querySelector('.multiForm');
const formSteps = document.querySelector('.next');
const next = document.querySelector('.nextStep');
const prev = document.querySelector('.prevStep');
const step = document.querySelector('[data-index]');

const currentStep = 0;
revealCurrentStep(currentStep);

function revealCurrentStep(step){
	formSteps.classList.remove('hide');
	const selectAllFormSteps = document.getElementsByClassName('next');

	if (step == 0) {
		prev.style.display = "none";
	} else {
		prev.style.display = "inline-block";
	}
	
	
}


function validateInput(e){
	e.preventDefault;
	const selectAllFormSteps = document.getElementsByClassName('next');
	
	const input = document.querySelectorAll('input');

	console.log(input);


}


function submitForm(e){
	//code to submit the form
}

next.addEventListener('click', validateInput);

form.addEventListener('submit', submitForm);
