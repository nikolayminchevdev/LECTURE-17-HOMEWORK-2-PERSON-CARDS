function expandItem() {
    var itemToExpand = document.querySelector('.EditPeopleWrapper');
    itemToExpand.classList.toggle('expand');

    var itemToChange = document.querySelector('.EditPageButton');
    itemToChange.classList.toggle('editColor');

    var opened = itemToChange.classList.contains('editColor');

    if (opened) {
        itemToChange.innerHTML = "Stop Editing";
    }
    else {
        itemToChange.innerHTML = "Edit";
    }
}

var person = {};

function inputValue(value, title) {
    person[title] = value;
}

function cardCreate() {
    var personCard = document.createElement('DIV');
    personCard.className = "PersonCard";

    var personImage = document.createElement('DIV');
    personImage.className = "PersonImage";

    var personName = document.createElement('DIV');
    personName.className = "PersonName";
    personName.innerHTML = person['name'];

    var personJob = document.createElement('DIV');
    personJob.className = "personJobTitle";
    personJob.innerHTML = person['job'];

    var personEmail = document.createElement('DIV');
    personEmail.className = "eMail";
    personEmail.innerHTML = person['email'];

    var personPhone = document.createElement('DIV');
    personPhone.className = "PersonPhoneNumber";
    personPhone.innerHTML = person['phone'];

    document.querySelector('.PeopleCardWrapper').appendChild(personCard);
    personCard.appendChild(personImage);
    personCard.appendChild(personName);
    personCard.appendChild(personJob);
    personCard.appendChild(personEmail);
    personCard.appendChild(personPhone);

    document.querySelector('.PeopleCardsContainer').remove();
}