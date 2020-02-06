// code for first multistep form

const form = document.querySelector('.multiForm');
const formSteps = document.querySelector('.next');
const nextStep = document.querySelector('.nextStep');
const prevStep = document.querySelector('.prevStep');
const fieldsets = document.querySelectorAll('[data-index]');

let i = 0;

const currentStep = 0;
revealCurrentStep(currentStep);

function revealCurrentStep(step){

	formSteps.classList.remove('hide');


	if (step == 0) {
		prevStep.style.display = "none";
	} else {
		prevStep.style.display = "inline-block";
	}

}

function revealNextStep(step){
	i = fieldsets.length;
	console.log(i);
	if ( fieldsets[i] > 0 ) {
		const selectAllFormSteps = document.getElementsByClassName('next');
		selectAllFormSteps.classList.remove('hide');

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

nextStep.addEventListener('click', revealNextStep);

form.addEventListener('submit', submitForm);
