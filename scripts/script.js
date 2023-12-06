function calculateAge(birthdate) {
    const currentDate = new Date();
    const birthDate = new Date(birthdate);
  
    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      ageYears--;
    }
  
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    if (ageMonths < 0) {
      ageMonths += 12;
    }
  
    let ageDays = currentDate.getDate() - birthDate.getDate();
    if (ageDays < 0) {
      const lastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        birthDate.getDate()
      );
      ageDays += Math.floor((currentDate - lastMonth) / (1000 * 60 * 60 * 24));
    }
  
    return {
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    };
  }
  

  const birthdate = "2004-07-05"; 
  const age = calculateAge(birthdate);
  console.log(`Age: ${age.years} years, ${age.months} months, ${age.days} days`);
  
  const handleClick = (e) => {
    const dayEl = document.querySelector('#day').value;
    const monthsEl = document.querySelector('#month').value;
    const yearsEl = document.querySelector('#year').value;

    const dateString = `${yearsEl}-${monthsEl}-${dayEl}`;
    console.log(dateString)

    const calculatedAge = calculateAge(dateString);

    const dayOutEl = document.querySelector('#days-age');
    const monthsOutEl = document.querySelector('#months-age');
    const yearsOutEl = document.querySelector('#years-age');

    const calculatedDays = calculatedAge.days;
    const calculatedMonths = calculatedAge.months;
    const calculatedYears = calculatedAge.years;


    dayOutEl.textContent = calculatedDays;
    monthsOutEl.textContent = calculatedMonths;
    yearsOutEl.textContent = calculatedYears;
  }