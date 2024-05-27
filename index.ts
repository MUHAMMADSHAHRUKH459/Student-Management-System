#! /usr/bin/env node

import inquirer from 'inquirer';

let students: { name: string, age: number, course: string, fees: number }[] = [];

async function main() {
    while (true) {
        let choice = await inquirer.prompt(
            [
                {
                    type: 'list',
                    name: 'choice',
                    message: 'What do you want to do?',
                    choices: ['Add Student', 'View Student', 'Update Student', 'Delete Student', 'Exit']
                }
            ]
        );

        switch (choice.choice) {
            case 'Add Student':
                await addStudent();
                break;
            case 'View Student':
                viewStudents();
                break;
            case 'Update Student':
                // Update student logic
                break;
            case 'Delete Student':
                // Delete student logic
                break;
            case 'Exit':
                console.log('Exiting...');
                process.exit(0); // Exit the program
                break;
            default:
                console.log('Invalid choice');
        }
    }
}

async function addStudent() {
    let studentInfo = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter student's name:"
        },
        {
            type: 'number',
            name: 'age',
            message: "Enter student's age:"
        },
        {
            type: 'input',
            name: 'course',
            message: "Enter student's course:"
        },
        {
            type: 'number',
            name: 'fees',
            message: "Enter student's fees:"
        }
    ]);

    students.push({
        name: studentInfo.name,
        age: studentInfo.age,
        course: studentInfo.course,
        fees: studentInfo.fees
    });

    console.log('Student added successfully!');
}

function viewStudents() {
    if (students.length === 0) {
        console.log('No students to display.');
    } else {
        console.log('List of students:');
        students.forEach((student, index) => {
            console.log(`Student ${index + 1}:`);
            console.log(`Name: ${student.name}`);
            console.log(`Age: ${student.age}`);
            console.log(`Course: ${student.course}`);
            console.log(`Fees: ${student.fees}`);
            console.log('---------------------');
        });
    }
}

main();