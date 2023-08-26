import "cypress-map"

import {
  checkURL,
  clickSimpleOnNthElement,
  typeTextSimple,
  checkElementState,
  checkElementStateAndHasText,
} from "../support/reusableFunctions"

import url from "../urls/urls.json"
import data from "../fixtures/contactList_testData.json"
import locators from "../selectors/contactList_selectors.json"
import basicData from "../support/basic_data.json"

describe("Practice", () => {
  it("Validate a row in a table", () => {
    let personFound = false

    const persons = [
      {
        name: "Jack",
        position: "Engineer",
        city: "Pune",
        salary: 3000,
      },
      {
        name: "Ion",
        position: "Doctor",
        city: "Balti",
        salary: 2000,
      },
      {
        name: "Cornel",
        position: "Driver",
        city: "Chisinau",
        salary: 1500,
      },
    ]

    persons.forEach(($person) => {
      if ($person.name === "Cornel" && $person.salary === 1500) {
        personFound = true
      }
    })

    expect(personFound).to.be.true
  })

  it("Find unique numbers from array", () => {
    const getUnique = (arr) => {
      let uniqueArr = []

      // loop through array
      for (let i of arr) {
        if (uniqueArr.indexOf(i) === -1) {
          uniqueArr.push(i)
        }
      }
      console.log(uniqueArr)
    }

    const array = [11, 4, 3, 65, 4, 11, 5, 8, 9, 9, 3]

    // calling the function
    // passing array argument
    getUnique(array)
  })

  it("Find duplicates", () => {
    const array = [11, 4, 3, 65, 4, 11, 5, 8, 9, 3, 9, 12, 13, 12]

    const findDuplicates = (arr) => {
      const duplicates = []
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j + 1]) {
            duplicates.push(arr[i])
          }
        }
      }
      return duplicates
    }

    console.log(findDuplicates(array))
  })

  it("Get the extension of the file", () => {
    const getFileExtension = (str) => str.slice(str.lastIndexOf("."))

    cy.log(getFileExtension("index.html"))
  })

  it("Get the half of the string", () => {
    const getHalfString = (str) => str.slice(0, str.length / 2)

    cy.log(getHalfString("Joma"))
    cy.log(getHalfString("Good Morning"))
  })

  it("Concatenate 2 strings except their firtst character", () => {
    const concatenate = (str1, str2) => str1.slice(1).concat(str2.slice(1))

    cy.log(concatenate("pool", "homework"))
  })

  it("Which is closer to 100", () => {
    const closeTo100 = (a, b) => {
      if (100 - a < 100 - b) {
        return `${a} is closer to 100`
      } else {
        return `${b} is closer to 100`
      }
    }

    cy.log(closeTo100(99, 2))
    cy.log(closeTo100(34, 18))
    cy.log(closeTo100(89, 90))
  })

  it("Find the number of even digits", () => {
    const countEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length
    cy.log(countEvenNumbers([1, 2, 3, 4, 5, 6]))
    cy.log(countEvenNumbers([3, 5, 7, 9, 10, 1000]))
  })

  it("Find the number of even values up to a given number", () => {
    const countEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length

    const createArrayNumbers = (n) => {
      const array = []
      for (let i = 1; i <= n; i++) {
        array.push(i)
      }
      return array
    }

    cy.log(countEvenNumbers(createArrayNumbers(5)))
  })

  it("Check if the given array is in ascending order", () => {
    const isAscending = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] < arr[i]) {
          return false
        }
      }
      return true
    }

    cy.log(isAscending([3, 7, 19, 37]))
    cy.log(isAscending([1, 2, 4, 3, 5, 6]))
  })

  it("Replace the first digit in string with $ char", () => {
    const replaceFirstDigit = (str) => {
      return str.replace(/\d/, "$")
      //using /[0-9]/g or /\d/g will replace all the numbers with the mentioned char
    }

    cy.log(replaceFirstDigit("ABCD1abcd"))
    cy.log(replaceFirstDigit("ABCD111abcd"))
  })

  it("Compare 2 objects to determine if the first one contains the same props as the second one", () => {
    const obj1 = { a: 1, b: 2, c: 1 }
    const obj2 = { a: 1, b: 1, c: 1 }
    const obj3 = { a: 1, b: 1, d: 1 }

    const objectsEqual = (a, b) => {
      return Object.keys(a).every((key) => b[key])
    }

    cy.log(objectsEqual(obj1, obj2))
    cy.log(objectsEqual(obj1, obj3))
    cy.log(objectsEqual(obj2, obj3))
  })

  it("Compare 2 objects to determine if the first one contains the same props as the second one", () => {
    const isEveryElement = (arr, fn) => {
      for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) {
          return false
        }
      }
      return true
    }

    cy.log(isEveryElement([2, 4, 6, 8], (x) => x % 2 === 0))
    cy.log(isEveryElement([2, 4, 6, 8], (x) => x > 2))
  })

  it("Order a string in ascending order", () => {
    const ascendingString = (str) => {
      return str.split("").sort().join("")
    }

    cy.log(ascendingString("dsajfosd"))
    cy.log(ascendingString("javascript"))
  })

  it("Count the number of vowels/letters within a string", () => {
    const vowels = ["a", "e", "i", "o", "u"]

    const countVowels = (str, letters) => {
      return str.split("").filter((s) => letters.indexOf(s) > -1).length
    }

    cy.log(countVowels("abcde", vowels))
    cy.log(countVowels("abcde", ["c", "d", "b"]))
  })

  it("Convert amount to coins (LEI)", () => {
    const countCoins = (money, availableCoins) => {
      let totalCoins = []

      for (let i = 0; i < availableCoins.length; i++) {
        const thisCoinNumber = Math.floor(money / availableCoins[i])
        for (let j = 0; j < thisCoinNumber; j++) {
          totalCoins.push(availableCoins[i])
        }
        money -= availableCoins[i] * thisCoinNumber
      }
      return totalCoins
    }

    const coins = [50, 25, 10, 5, 1]

    console.log(countCoins(89, coins))
  })

  it("Check how many fruits can be bought", () => {
    const arr = [
      {
        fruit: "Banana",
        weightInKilos: 7,
      },
      {
        fruit: "Apple",
        weightInKilos: 5,
      },
      {
        fruit: "kiwi",
        weightInKilos: 3,
      },
    ]

    const packageWithFruits = (capacity, availableFruits) => {
      let totalFruits = []

      for (let i = 0; i < availableFruits.length; i++) {
        const thisFruitNumber = Math.floor(capacity / availableFruits[i])

        for (let j = 0; j < thisFruitNumber; j++) {
          totalFruits.push(availableFruits[i])
        }
        capacity -= availableFruits[i] * thisFruitNumber
      }
      return totalFruits
    }

    const fruits = arr.map((fruits) => fruits.weightInKilos)

    console.log(packageWithFruits(20, fruits))
  })

  it("Find the first not repeated char", () => {
    const getNotRepeatedChars = (str) => {
      return str
        .split("")
        .filter(
          (item, index, arr) =>
            arr.filter((arrItem) => arrItem === item).length === 1
        )
    }

    cy.log(getNotRepeatedChars("abacddbec"))
  })

  it("Array of people", () => {
    const people = [
      {
        firstName: "Sam",
        lastName: "Hughes",
        DOB: "07/07/1978",
        department: "Development",
        salary: "45000",
      },
      {
        firstName: "Terri",
        lastName: "Bishop",
        DOB: "02/04/1989",
        department: "Development",
        salary: "35000",
      },
      {
        firstName: "Jar",
        lastName: "Burke",
        DOB: "11/01/1985",
        department: "Marketing",
        salary: "38000",
      },
      {
        firstName: "Julio",
        lastName: "Miller",
        DOB: "12/07/1991",
        department: "Sales",
        salary: "40000",
      },
      {
        firstName: "Chester",
        lastName: "Flores",
        DOB: "03/15/1988",
        department: "Development",
        salary: "41000",
      },
      {
        firstName: "Madison",
        lastName: "Marshall",
        DOB: "09/22/1980",
        department: "Sales",
        salary: "32000",
      },
      {
        firstName: "Ava",
        lastName: "Pena",
        DOB: "11/02/1986",
        department: "Development",
        salary: "38000",
      },
      {
        firstName: "Gabriella",
        lastName: "Steward",
        DOB: "08/26/1994",
        department: "Marketing",
        salary: "46000",
      },
      {
        firstName: "Charles",
        lastName: "Campbell",
        DOB: "09/04/1977",
        department: "Sales",
        salary: "42000",
      },
      {
        firstName: "Tiffany",
        lastName: "Lambert",
        DOB: "05/11/1990",
        department: "Development",
        salary: "34000",
      },
      {
        firstName: "Antonio",
        lastName: "Gonzalez",
        DOB: "03/24/1985",
        department: "Office Management",
        salary: "49000",
      },
      {
        firstName: "Aaron",
        lastName: "Garrett",
        DOB: "09/04/1985",
        department: "Development",
        salary: "39000",
      },
    ]

    // Exercises

    // 1) What is the average income of all the people in the array?

    const findAverageSalary = (array) => {
      let sum = 0
      const salaries = array.map((person) => parseInt(person.salary)) //OR Number(person.salary)
      for (let i = 0; i < salaries.length; i++) {
        sum += salaries[i]
      }
      return Math.floor(sum / salaries.length)
    }

    //OR ANOTHER WAY

    const findAverage = (array) => {
      const salaries = array.map((person) => parseInt(person.salary))
      const total = Math.floor(
        salaries.reduce((sum, actual) => sum + actual, 0) / salaries.length
      )
      return total
    }

    cy.log(
      `1) Average salary is: ${findAverageSalary(
        people
      )}\nSecond solution: ${findAverage(people)}`
    )

    // 2) Who are the people that are currently older than 30?

    const findOldPeople = (array) => {
      const oldPeople = array.filter(
        (person) =>
          new Date().getFullYear() - new Date(person.DOB).getFullYear() > 40
      )
      return oldPeople
        .map((person) => `${person.firstName} ${person.lastName}`)
        .join("\n")
    }

    cy.log(`2) People older than 40:\n${findOldPeople(people)}`)

    // 3) Get a list of the people's full name (firstName and lastName)

    const getFullNamePeople = (array) => {
      return array
        .map((person) => `${person.firstName} ${person.lastName}`)
        .join("\n")
    }

    cy.log(`3) List of people:\n${getFullNamePeople(people)}`)

    // 4) Get a list of people in the array ordered from youngest to oldest

    const sortPeopleByAge = (array) => {
      const sorted = array.sort(
        (personA, personB) => new Date(personA.DOB) - new Date(personB.DOB)
      )
      return sorted
        .map(
          (person) => `${person.firstName} ${person.lastName}, ${person.DOB}`
        )
        .join("\n")
    }

    cy.log(`4) People ordered by age:\n${sortPeopleByAge(people)}`)

    // 5) How many people are there in each department?

    const peopleInDepartment = (array) => {
      const departments = {}
      array.forEach((person) => {
        if (!departments[person.department]) {
          departments[person.department] = 1
        } else {
          departments[person.department] += 1
        }
      })
      return departments
    }

    cy.log(`5) Check the browser web console`)

    console.log(peopleInDepartment(people))
  })

  it("Orders", () => {
    const orders = [
      {
        orderId: "123",
        customerId: "123",
        deliveryDate: "01-01-2020",
        delivered: true,
        items: [
          { productId: "123", price: 55 },
          { productId: "234", price: 30 },
        ],
      },
      {
        orderId: "234",
        customerId: "234",
        deliveryDate: "01-02-2020",
        delivered: false,
        items: [{ productId: "234", price: 30 }],
      },
      {
        orderId: "345",
        customerId: "234",
        deliveryDate: "05-01-2020",
        delivered: true,
        items: [
          { productId: "567", price: 30 },
          { productId: "678", price: 80 },
        ],
      },
      {
        orderId: "456",
        customerId: "345",
        deliveryDate: "12-01-2020",
        delivered: true,
        items: [
          { productId: "789", price: 12 },
          { productId: "890", price: 90 },
        ],
      },
      {
        orderId: "578",
        customerId: "456",
        deliveryDate: "12-01-2020",
        delivered: true,
        items: [
          { productId: "901", price: 43 },
          { productId: "123", price: 55 },
        ],
      },
    ]

    // Exercises

    // 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.

    const notDelivered_234 = (array) => {
      return array.filter(
        (order) => order.customerId === "234" && order.delivered === true
      )
    }

    console.log(notDelivered_234(orders))

    // 2) Create a new property on each order with the total price of items ordered.

    const totalPriceOrdered = (array) => {
      array.forEach((order) => {
        order.totalPrice = 0
        order.items.forEach((item) => {
          order.totalPrice += item.price
        })
      })
      return array
    }

    console.log(totalPriceOrdered(orders))

    // 3) Have all the orders been delivered?

    const checkIfDelivered = (array) => {
      return array.every((order) => order.delivered)
    }

    console.log(checkIfDelivered(orders))

    // 4) Has the customer with ID '123' made any orders?

    const checkCustomer123MadeOrder = (array) => {
      return array.some((order) => order.orderId === "123")
    }

    console.log(checkCustomer123MadeOrder(orders))

    // 5) Have any products with an id of 123 been sold?

    const checkProduct123HasBeenSold = (array) => {
      return array.some((order) =>
        order.items.find((item) => item.productId === "123")
      )
    }

    console.log(checkProduct123HasBeenSold(orders))
  })

  it("Users and comments", () => {
    const users = [
      {
        id: "88f24bea-3825-4237-a0d1-efb6b92d37a4",
        firstName: "Sam",
        lastName: "Hughes",
      },
      {
        id: "2a35032d-e02b-4508-b3b5-6393aff75a53",
        firstName: "Terri",
        lastName: "Bishop",
      },
      {
        id: "7f053852-7440-4e44-838c-ddac24611050",
        firstName: "Jar",
        lastName: "Burke",
      },
      {
        id: "d456e3af-596a-4224-b1dc-dd990a34c9cf",
        firstName: "Julio",
        lastName: "Miller",
      },
      {
        id: "58a1e37b-4b15-47c1-b95b-11fe016f7b64",
        firstName: "Chester",
        lastName: "Flores",
      },
      {
        id: "b4a306cb-8b95-4f85-b9f8-434dbe010985",
        firstName: "Madison",
        lastName: "Marshall",
      },
      {
        id: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c",
        firstName: "Ava",
        lastName: "Pena",
      },
      {
        id: "7f0ce45a-bdca-4067-968b-d908e79276ce",
        firstName: "Gabriella",
        lastName: "Steward",
      },
      {
        id: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6",
        firstName: "Charles",
        lastName: "Campbell",
      },
      {
        id: "e789565f-fa5a-4d5e-8f6c-dd126cf995be",
        firstName: "Madison",
        lastName: "Lambert",
      },
    ]

    const comments = [
      { userId: "88f24bea-3825-4237-a0d1-efb6b92d37a4", text: "Great Job!" },
      {
        userId: "7f053852-7440-4e44-838c-ddac24611050",
        text: "Well done, I think I understand now!",
      },
      {
        userId: "e789565f-fa5a-4d5e-8f6c-dd126cf995be",
        text: "How do you do that? 😲",
      },
      {
        userId: "7f053852-7440-4e44-838c-ddac24611050",
        text: "OK great thanks",
      },
      { userId: "b4a306cb-8b95-4f85-b9f8-434dbe010985", text: "Cool, thanks!" },
      { userId: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6", text: "Nice one 😉" },
      { userId: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c", text: "Got it." },
      { userId: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6", text: "Thanks!" },
      { userId: "58a1e37b-4b15-47c1-b95b-11fe016f7b64", text: "Cool 😀" },
      { userId: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c", text: "Great stuff!" },
    ]

    // Exercises

    // 1) What is Madison Marshall's user id?

    const findPersonId = (users) => {
      let user = users.find(
        (user) => user.firstName === "Madison" && user.lastName === "Marshall"
      )
      return user.id
    }

    console.log(findPersonId(users))

    // 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)

    const firstComment = (users, comments) => {
      const user = users.find((user) => user.id === comments[0].userId)
      return `${user.firstName} ${user.lastName}`
    }

    console.log(firstComment(users, comments))

    // 3) Which user commented 'OK great thanks'?

    const userComment = (users, comments) => {
      const user = users.find(
        (user) =>
          user.id ===
          comments.find((comment) => comment.text === "OK great thanks").userId
      )
      return `${user.firstName} ${user.lastName}`
    }

    console.log(userComment(users, comments))

    // 4) Add the user's first and last name to each comment in the comments array

    const addUsersToComments = (users, comments) => {
      comments.forEach((comment) => {
        let user = users.find((u) => u.id === comment.userId)
        comment.firstName = user.firstName
        comment.lastName = user.lastName
      })
      return comments
    }

    console.log(addUsersToComments(users, comments))

    // 5) Get a list of the users who haven't commented

    const usersWithoutComments = (users, comments) => {
      let user = users.filter(
        (user) => !comments.some((comment) => user.id === comment.userId)
      )
      return user
        .map((person) => `${person.firstName} ${person.lastName}`)
        .join("\n")
    }

    console.log(usersWithoutComments(users, comments))
  })

  it("Promise", () => {
    console.log("Request data...")

    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Preparing data...")

        const backendData = {
          server: "aws",
          port: 2000,
          status: "working",
        }
        resolve(backendData)
      }, 2000)
    })
      .then((data) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            data.modified = true
            resolve(data)
          }, 2000)
        })
          .then((clientData) => {
            console.log("Data received", clientData)
            clientData.fromPromise = true
            return clientData
          })
          .then((data) => {
            console.log("Modified data", data)
          })
      })
      .catch((err) => console.error("Error: ", err))
      .finally(() => {
        console.log("The request has been processed.")
      })

    //GOOD PRACTICE FOR PROMISES

    const sleep = (ms) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(), ms)
      })
    }

    // sleep(2000).then(() => {
    //   console.log("After 2000 ms")
    // })
    // sleep(5000).then(() => {
    //   console.log("After 5000 ms")
    // })

    //COLLECTS ALL THE PROMISES AND EXECUTE AFTE THE LAST PROMISE IS RESOLVED
    Promise.all([sleep(2000), sleep(5000)]).then(() => {
      console.log("All promises")
    })
  })

  it.only("Another practice with promise", () => {
    console.log("Request data...")
    const age = 18

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Processing your request...")

        const backendData = {
          server: "aws",
          port: 2000,
          status: "working",
        }
        if (age <= 18) {
          reject("Failure")
        } else{
          resolve(backendData)
        }
      }, 2000)
    }).then((data) => {
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          data.modified = true
          resolve("Success")
          console.log("Modified data", data)
        }, 2000)
      })
    }, (err) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Error message")
        , 2000})
      })
    })
    .then((rez) => {
      alert(rez)
      console.log("The request has been processed.")
    }, (error) => {
      alert(error)
      console.log("The request has been aborted.")
    })
  })

  after(() => {
    Cypress.session.clearAllSavedSessions()
  })
})
