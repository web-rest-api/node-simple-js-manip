"use-strict"

const firstName = "bob"

const age = 34

// typeof

const userOne = {
	firstName: "Test user one",
	age: 40,
	admin: false,
}

userOne.age = 41

const userTwo = {
	firstName: "Test Two",
	age: 34,
	admin: true,
}

const users = [userOne, userTwo]


const userThree = {
	firstName: "Test 3",
	age: 21,
	admin: true,
}

users.push(userThree)


console.log(users)
