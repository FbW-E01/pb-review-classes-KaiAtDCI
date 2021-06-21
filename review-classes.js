class Component {

    constructor(name) {
        this.name = name;
    }

    render() {
        console.log(`<p>Component _${this.name}_ rendering`);
    }
}

class UserCard extends Component {

    constructor(user) {
        super(user.name);
        this.user = user;
    }

    render() {
        const content = `
<div class="card card-user">
    <img class="card-img-top" src="${this.user.imageUrl}" alt>
    <div class="card-body">
        <h5 class="card-title">${this.user.name}</h5>
        <p class="card-text">To contact, please send a message to</p>
        <a
            href="mailto:${this.user.email}"
            class="btn btn-primary"
        >
            ${this.user.email}
        </a>
    </div>
</div>
     `;

        console.log(content);
    }
}

const component = new Component('Zaphod');
component.render();

const userCards = [
    new UserCard({name: 'Zaphod1', imageUrl: 'http://...', email: 'zaphod@universe.org'}),
    new UserCard({name: 'Zaphod2', imageUrl: 'http://...', email: 'zaphod@universe.org'}),
    new UserCard({name: 'Zaphod3', imageUrl: 'http://...', email: 'zaphod@universe.org'}),
    new UserCard({name: 'Zaphod4', imageUrl: 'http://...', email: 'zaphod@universe.org'}),
    new UserCard({name: 'Zaphod5', imageUrl: 'http://...', email: 'zaphod@universe.org'}),
];

userCards.forEach(console.log);
console.log(typeof UserCard); // function
console.log (typeof userCards[0]); // object