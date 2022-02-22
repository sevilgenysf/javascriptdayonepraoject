const newYears = '1st January 2021';

function countdown() {
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();
	console.log(newYearsDate - currentDate);
}
countdown();
