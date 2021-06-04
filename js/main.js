let liste = document.querySelector('.people');
fetch('./people.json')
.then(res => res.json())
.then(res => res.forEach(individ => {

        var tr = document.createElement('tr');

        var td = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');

        td.innerHTML=individ.fornavn + " " + individ.etternavn;
        td2.innerHTML = individ.age;
        td3.innerHTML = individ.city;
        td4.innerHTML = individ.relationship;

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        liste.appendChild(tr);
}))

//Quiz
//Not done
const form = document.querySelector('form');
form.addEventListener('submit', validateForm);
function validateForm(event){
    event.preventDefault();
    if(document.getElementById('8848').checked){
        if(document.getElementById('oslo').checked){
            if(document.getElementById('erna_solberg').checked){
                if(document.getElementById('1975').checked){
                    if(document.getElementById('117km').checked){
                        alert('Congrats!')
                    }
                }
            }
        }
    }else{
        alert('Better luck next time')
    }
}

//Contact



function saveContactInfo(e){
    //Not done
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;

    localStorage.setItem('fname', fname);
    localStorage.setItem('lname', lname);
    localStorage.setItem('email', email);
    localStorage.setItem('age', age);
    localStorage.setItem('address', address);
    localStorage.setItem('city', city);
}
