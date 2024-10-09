function getColorMessage() {
    const colorInput = document.getElementById('colorInput');
    const colorMessage = document.getElementById('colorMessage');
    const colors = ['red', 'blue', 'green', 'yellow'];

    let inputColor = colorInput.value.toLowerCase();

    // Check if input color is in the colors array
    for (let i = 0; i < colors.length; i++) {
        if (inputColor === colors[i]) {
            switch (inputColor) {
                case 'red':
                    colorMessage.textContent = "You're bold and confident!";
                    break;
                case 'blue':
                    colorMessage.textContent = "You're calm and trustworthy!";
                    break;
                case 'green':
                    colorMessage.textContent = "You're nature-loving and harmonious!";
                    break;
                case 'yellow':
                    colorMessage.textContent = "You're bright and optimistic!";
                    break;
            }
            return;
        }
    }

    // Handle invalid input
    if (inputColor === '') {
        colorMessage.textContent = 'Please enter a color!';
    } else {
        colorMessage.textContent = 'Invalid color, please try again!';
    }
}