function calculateAge(event) {
    event.preventDefault();
    const inputDate = new Date(document.getElementById("calcYears").value);
    const today = new Date();

    if (isNaN(inputDate)) {
        document.getElementById("result").textContent = "Please enter a valid date.";
        return;
    }
    if (inputDate > today) {
        document.getElementById("result").textContent = "You haven't been born yet! Please enter a date in the past.";
        document.getElementById("birthdayCountdown").textContent = "";
        return;
    }

    const birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    };
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();
    const { years, months, days } = ageCalculate(
        birthDetails,
        currentYear,
        currentMonth,
        currentDate
    );
    const daysUntilNextBirthday = getDaysUntilNextBirthday(inputDate);

    displayBirthdayCountdown(daysUntilNextBirthday);
    displayResult(days, months, years);
}

function ageCalculate(birthDetails, currentYear, currentMonth, currentDate) {
    let years = currentYear - birthDetails.year;
    let months, days;

    if (currentMonth < birthDetails.month || (currentMonth === birthDetails.month && currentDate < birthDetails.date)) {
        years--;
        months = 12 - (birthDetails.month - currentMonth);
    } else {
        months = currentMonth - birthDetails.month;
    }

    if (currentDate < birthDetails.date) {
        months--;
        const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        const daysInLastMonth = getDaysInMonth(lastMonth, currentYear);
        days = daysInLastMonth - (birthDetails.date - currentDate);
    } else {
        days = currentDate - birthDetails.date;
    }

    return { years, months, days };
}

function getDaysInMonth(month, year) {
    const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    const daysInMonth = [
        31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];

    return daysInMonth[month - 1];
}

function getDaysUntilNextBirthday(birthDate) {
    const today = new Date();
    const currentYear = today.getFullYear();
    let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

    if (today > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, birthDate.getMonth(), birthDate.getDate());
    }

    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = nextBirthday - today;
    const daysLeft = Math.ceil(diffInTime / oneDay);

    return daysLeft;
}

function displayResult(days, months, years) {
    document.getElementById("result").textContent = `You are ${years} years, ${months} months, ${days} days old 😁`;
}

function displayBirthdayCountdown(daysLeft) {
    const countdownEl = document.getElementById("birthdayCountdown");
    countdownEl.textContent = `🎉 ${daysLeft} day(s) left until your next birthday!`;
}

