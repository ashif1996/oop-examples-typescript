// In this example, we demonstrate Inheritance, Polymorphism, and Encapsulation in a Library Management System involving Persons, Members, Staff, and a Library.

class Person {
    constructor(public name: string, public email: string) {}

    displayInfo(): void {
        console.log("\n" + `Name: ${this.name}, Email: ${this.email}`);
    }
}

class Member extends Person {
    private borrowedBooks: string[] = [];

    borrowBook(bookName: string): void {
        this.borrowedBooks.push(bookName);
        console.log("\n" + `${this.name} borrowed ${bookName}.`);
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Borrowed books: ${this.borrowedBooks.join(", ") || null}`);
    }
}

class Staff extends Person {
    constructor(name: string, email: string, private role: string) {
        super(name, email);
    }

    manageBooks(action: string, bookName: string): void {
        console.log("\n" + `${this.name} (${this.role}) ${action} the book "${bookName}".` + "\n");
    }
}

class Library {
    private books: string[] = ["1984", "To Kill a Mockingbird", "The Great Gatsby"];
    private members: Member[] = [];

    addMember(member: Member): void {
        this.members.push(member);
        console.log("\n" + `Member ${member.name} added to the library.`);
    }

    listBooks(): void {
        console.log("\n" + `Available books: ${this.books.join(", ")}`);
    }

    lendBook(member: Member, bookName: string): void {
        if (this.books.includes(bookName)) {
            member.borrowBook(bookName);
            this.books = this.books.filter((book) => book !== bookName);
        } else {
            console.log("\n" + `The book ${bookName} is not available.`);
        }
    }
}

const library = new Library();

const member = new Member("Ashif", "ashifhassan1996@gmail.com");
const staff = new Staff("Ashil", "muhammadashil313@gmail.com", "Librarian");

library.addMember(member);

library.listBooks();

library.lendBook(member, "1984");

library.listBooks();

member.displayInfo();

staff.manageBooks("added", "The Divine Reality");