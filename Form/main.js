const form= document.querySelector('form');
const fname = document.getElementById('fname');
const email= document.getElementById('email');
const tel = document.getElementById ('tel');
const subject = document.getElementById ('subject');
const comments = document.getElementById ('comments');


form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    checkInputs();
  });

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('#error');
    errorDisplay.textContent = message;
    inputControl.classList.add('error');
    inputControl.classList.remove ('success');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('#error');
    errorDisplay.textContent = '';
    
    inputControl.classList.add ('success');
    inputControl.classList.remove ('error');
}

const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};


const checkInputs = () => {
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();
    const subjectValue = subject.value.trim();
    const commentsValue = comments.value.trim();
   
    if (fnameValue === '')
    {
       setError (fname, 'Full name is required');
       
    } else {
       setSuccess(fname);

    }

    if (emailValue === '' )
        {
          
           setError (email, 'Email is required');

        } else if (!isValidEmail(emailValue)){
            setError(email, 'Please enter a valid email');
        } else {
          
           setSuccess(email);
        }

        if (telValue === '' )
            {
               setError (tel, 'Mobile number is required');
 
            } else {
               
               setSuccess(tel);
               
            }
    
            if (subjectValue === '' )
                {
                   
                   setError (subject, 'Subject is required');
                  
                } else {
                   setSuccess(subject);
                }

                if (commentsValue === '')
                    {
                      
                       setError (comments, 'Comments is required');
                
                    } else {
                       
                       setSuccess(comments);
                       
                    }

};






// function submit() {
//   const firstNameValue = firstName.value.trim();
//   const emailValue = email.value.trim();
//   const commentsValue = comments.value.trim();

//   if(firstNameValue === '') {
//     setErrorFor(firstName, 'First Name cannot be blank');
//   } else {
//     setSuccessFor(firstName);
//   }

//   if(emailValue === '') {
//     setErrorFor(email, 'Email cannot be blank');
//   } else if(!isEmail(emailValue)) {
//     setErrorFor(email, 'Not a valid email');
//   } else {
//     setSuccessFor(email);
//   }

//   if(commentsValue === '') {
//     setErrorFor(comments, 'Comments cannot be blank');
//   } else {
//     setSuccessFor(comments);
//   }
// }

// function setErrorFor(input, message) {
//   const formControl = input.parentElement; // .form-control
//   const small = formControl.querySelector('small');

//   // add error message inside small tag
//   small.innerText = message;

//   // add error class
//   formControl.className = 'form-control error';
// }

// function setSuccessFor(input) {
//   const formControl = input.parentElement; // .form-control

//   // remove error class
//   formControl.className = 'form-control success';
// }

// function isEmail(email) {
//   // validate email with regular expression
//   return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
// }
