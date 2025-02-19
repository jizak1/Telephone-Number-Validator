document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultsDiv = document.getElementById('results-div');

    const validatePhoneNumber = (str) => {
       
        const cleanStr = str.replace(/\s+/g, '');
        const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
        

        if (!phoneRegex.test(str)) {
            return false;
        }
        

        if (str.startsWith('2') || str.startsWith('0') || str.startsWith('-') || str.startsWith('(1')) {
            return false;
        }
        
  
        if ((str.includes('(') && !str.includes(')')) || (!str.includes('(') && str.includes(')'))) {
            return false;
        }
        

        if (/[^\d\s\(\)\-]/.test(str)) {
            return false;
        }
        
        return true;
    };

    const displayResult = (input) => {
        const isValid = validatePhoneNumber(input);
        resultsDiv.textContent = `${isValid ? 'Valid' : 'Invalid'} US number: ${input}`;
        resultsDiv.className = `results ${isValid ? 'valid' : 'invalid'}`;
    };

    checkBtn.addEventListener('click', () => {
        const input = userInput.value.trim();
        
        if (!input) {
            alert('Please provide a phone number');
            return;
        }
        
        displayResult(input);
    });

    clearBtn.addEventListener('click', () => {
        userInput.value = '';
        resultsDiv.textContent = '';
        resultsDiv.className = 'results';
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkBtn.click();
        }
    });
});
// Ini tugas susah bener anjink 