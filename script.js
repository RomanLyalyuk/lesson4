const data = [
    {
      name: "Steve",
      gender: "Male",
      adress: "Lviv",
    },
    {
        name: "Steve",
        gender: "Male",
        adress: "Lviv",
      },
]
data.forEach(row => {

    const tr = document.createElement('tr');
    const thName = document.createElement('th');
    const thGender = document.createElement('th');
    const nameInput = document.createElement('input');
    const buttonAction = document.createElement('button');
    const table = document.querySelector('#table').appendChild(tr);

    nameInput.value = row.name;
    nameInput.disabled = false;
    thName.appendChild(nameInput);
    
    //thName.textContent = row.name;
    thGender.textContent = row.gender;
    buttonAction.textContent = 'Add adress';
    tr.appendChild(thName);
    tr.appendChild(thGender);
    tr.appendChild(buttonAction);
    
//     buttonAction.addEventListener('click', (event) => {
//         const thAdress = document.createElement('th')
//         const adress = document.createElement('th')
//     adress.textContent = 'Adress'
//     thAdress.textContent = data[0].adress
//     document.querySelector('#first-tr').appendChild(adress)
//     tr.appendChild(thAdress)
// })
})
