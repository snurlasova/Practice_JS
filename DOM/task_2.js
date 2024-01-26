function createStudentCard(student) {
    //Создаем элемент div
    let studentCard = document.createElement('div');
    
    //Создаем заголовок h2  с именем студента 
    let nameStudent = document.createElement('h2');
    nameStudent.textContent = student.name;
  
    //Создаем span с возрастом студента 
    let ageSpan = document.createElement('span');
    ageSpan.textContent = 'Возраст: ' + student.age + ' лет';
    
    //Добавляем заголовок и span внутрь элемента div 
    studentCard.appendChild(nameStudent);
    studentCard.appendChild(ageSpan);
    
    //Добавляем элемент div внутрь body
    document.body.appendChild(studentCard);
    
    //Добавляем стили напрямую в JavaScript 
    studentCard.style.backgroundColor = '#00BFFF';
    studentCard.style.width = 'fit-content';
    studentCard.style.borderRadius = '15px';
    studentCard.style.padding = '20px';
    studentCard.style.margin = '20px';
    studentCard.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    nameStudent.style.marginBottom = '10px';
  }
  
  //Пример вызова функции
  let studentObj = {
    name: 'Игорь',
    age: 17
  };
  
  createStudentCard(studentObj);
  
