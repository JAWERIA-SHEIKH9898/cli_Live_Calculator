#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(
    chalk.red("\t\t\t\t\t<======="),
    chalk.bgWhite.red.italic.bold("CODE WITH JAWERIA SHEIKH"),
    chalk.red("=======>")
  );
  console.log(
    chalk.green("\t\t           <--"),
    chalk.blue.italic.bold("WELCOME TO TIME LIVE CALCULATOR USING TYPESCRIPT AND INQUIRER"),
    chalk.green("-->\n")
  );
  console.log(chalk.red.bold("\t\t\t\t\t\t =============================================== "));

// Function to calculate time difference in years, months, days, minutes, and seconds

function calculateTimeDifference(birthDate: Date): void {
    const currentDate = new Date();
    const diff = currentDate.getTime() - birthDate.getTime();

    const millisecondsPerSecond = 1000;
    const millisecondsPerMinute = millisecondsPerSecond * 60;
    const millisecondsPerHour = millisecondsPerMinute * 60;
    const millisecondsPerDay = millisecondsPerHour * 24;
    const millisecondsPerMonth = millisecondsPerDay * 30.436875; // Average days per month
    const millisecondsPerYear = millisecondsPerDay * 365.25; // Average days per year

    const years = Math.floor(diff / millisecondsPerYear);
    const months = Math.floor(diff / millisecondsPerMonth);
    const days = Math.floor(diff / millisecondsPerDay);
    const minutes = Math.floor(diff / millisecondsPerMinute);
    const seconds = Math.floor(diff / millisecondsPerSecond);

    // Output using chalk for colorful formatting
    console.log(chalk.green(`\nYou have lived approximately:`));
    console.log(chalk.cyan(`- ${years} years`));
    console.log(chalk.cyan(`- ${months} months`));
    console.log(chalk.cyan(`- ${days} days`));
    console.log(chalk.cyan(`- ${minutes} minutes`));
    console.log(chalk.cyan(`- ${seconds} seconds\n`));
}

// Main function to prompt user for birthdate and calculate time

async function main() {
    console.log(chalk.yellow.bold('\nWelcome to Time Lived Calculator!\n'));

    const questions = [
        {
            type: 'input',
            name: 'birthdate',
            message: 'Enter your birthdate (YYYY-MM-DD):',
            validate: (input: string) => {
                const pattern = /^\d{4}-\d{2}-\d{2}$/;
                if (pattern.test(input)) {
                    const parts = input.split('-');
                    const year = parseInt(parts[0]);
                    const month = parseInt(parts[1]);
                    const day = parseInt(parts[2]);

                    // Basic validation of date
                    if (year > 1900 && year < new Date().getFullYear() && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
                        return true;
                    }
                }
                return 'Please enter a valid date in YYYY-MM-DD format.';
            }
        }
    ];

    const answers = await inquirer.prompt(questions);
    const birthDate = new Date(answers.birthdate);
    calculateTimeDifference(birthDate);
}

main();