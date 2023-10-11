/**
 *Project Name: Making An Expression Validation App Using JavaScript
 * Code Owner: Md.Ashraful Islam
 * Project Finish Time: 11th October 2023
 */


class UI {
    constructor() {
        this.regexType = ''; // Added instance variable to track selected regex type
        this.regexValue = this.regexValue;
        this.form = document.getElementById('regexValidation');
        this.input = document.getElementById('regexTake');
    }

    formOfregex() {
        // Remove the event listener
        this.form.removeEventListener('submit', this.validation);

        // Add the event listener based on the selected option
         /**
          * Learn About How actually html value used in the type.
          * Here i match the Type of the value for recognized which option i select
          * also rename the regexPatterns same as this because of math the type
          * so then its can recognized which type of value its verified and its help
          * to show user that his or her email or phone or postal code is valid or not.
          * Means which type of input user gave to the form its dynamically collect .
          */
            if (this.regexType === 'email' || this.regexType === 'phone' || this.regexType === 'postal') {
                this.form.addEventListener('submit', (event) => {
                    event.preventDefault();
                        this.regexValue = this.input.value;
                        this.validation();    
                });
            }
        
    }

    validation() {
        // Define regex patterns based on selected type
        let result = document.querySelector('.showResult');
        result.innerHTML = '';
    
        const regexPatterns = {
            postal: /^[0-9]{4}$/,
            phone: /^(\+)?(88)?01[0-9]{9}$/,
            email: /^([A-Za-z0-9]\.?)+[^\.]@([A-Za-z0-9]\.?)+[^\.]$/,
        };

        const selectedRegex = regexPatterns[this.regexType]; // Get the selected regex pattern
         
        if (this.regexValue.match(selectedRegex)) {
            this.showTheResult(this.regexValue + ' is valid ' + this.regexType, 'green');
        } else if(this.regexValue === '') {
            this.showTheResult( ' Please Fillup The Input First ', 'orange');
            
        }else{
            this.showTheResult(this.regexValue + ' is not valid ' + this.regexType, 'red');
        }
    }

    showTheResult(message, color) {
        let result = document.querySelector('.showResult');
        let resultDiv = document.createElement('div');
        let h3=document.createElement('h3');                                           
        h3.textContent = message;
        resultDiv.appendChild(h3);
        resultDiv.style.width = '500px';
        resultDiv.style.height = '30px';
        resultDiv.style.background = color;
        resultDiv.style.borderRadius='5px';
        //h3 style
        h3.style.marginLeft='50px';
        // h3.style.marginTop='20px';
        h3.style.color = 'white';
        h3.style.fontFamily='monospace';
        h3.style.fontSize='18px';
        result.appendChild(resultDiv);
    }
}

function selectTriggered() {
    let selectElement = document.getElementById('regex');
    let divOfform = document.getElementById('container-Inner');
    divOfform.style.display = 'none';
    let ui = new UI();
   

    selectElement.addEventListener('change', () => {
        
        let selectOption = selectElement.options[selectElement.selectedIndex];
        ui.regexType = selectOption.value; // Set the selected regex type

        // Clear the result div
         let result = document.querySelector('.showResult');
         result.innerHTML = ''; // Remove all child elements
         // Clear the input field
         let input = document.getElementById('regexTake');
         input.value = '';
        if (selectOption.classList.contains('email_class')) {
            divOfform.style.display = 'block';
            ui.formOfregex();
        } else if (selectOption.classList.contains('Phone_number')) {
            divOfform.style.display = 'block';
            ui.formOfregex();
        } else if (selectOption.classList.contains('Post_code')) {
            divOfform.style.display = 'block';
            ui.formOfregex();
        }else if (selectOption.classList.contains('chooseOption')) {
            divOfform.style.display = 'none';
            // ui.formOfregex();
        }
    });
}

selectTriggered();
