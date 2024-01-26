function createStudentCard(name, age){
    let studentCard = document.createElement('div');

    let nameStudent = document.createElement('h2');
    nameStudent.textContent = name;

    let ageSpan = document.createElement('span');
    ageSpan.textContent = 'Возраст' + age + 'лет';

    studentCard.appendChild(nameStudent);
    studentCard.appendChild(ageSpan);

    document.body.appendChild(studentCard);

  studentCard.style.backgroundColor = '#00BFFF';
  studentCard.style.width = 'fit-content';
  studentCard.style.borderRadius = '15px';
  studentCard.style.padding = '20px';
  studentCard.style.margin = '20px';
  studentCard.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  nameStudent.style.marginBottom = '10px';
}
createStudentCard('Игорь', 17);