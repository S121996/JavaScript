const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter the first angle of the triangle: ", function (angle1) {
    rl.question("Enter the second angle of the triangle: ", function (angle2) {
        rl.question("Enter the third angle of the triangle: ", function (angle3) {
            const angle1Value = parseFloat(angle1);
            const angle2Value = parseFloat(angle2);
            const angle3Value = parseFloat(angle3);

            if (!isNaN(angle1Value) && !isNaN(angle2Value) && !isNaN(angle3Value) && angle1Value > 0 && angle2Value > 0 && angle3Value > 0) {
                const sumOfAngles = angle1Value + angle2Value + angle3Value;

                if (sumOfAngles === 180 && angle1Value !== 0 && angle2Value !== 0 && angle3Value !== 0) {
                    console.log("The triangle is valid.");
                } else {
                    console.log("The triangle is not valid. The sum of angles should be 180 degrees, and no angle should be 0.");
                }
            } else {
                console.log("Invalid input. Please enter valid angles greater than 0.");
            }

            rl.close();
        });
    });
});

rl.on('close', function () {
    process.exit(0);
});