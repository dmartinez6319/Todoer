import "./styles.css";

const names = ["james","frank","henry"];
const nums = ["1","2","3"];


const [j,,h] = names // extra commas skip an index

console.log(j);
console.log(h);

const person = {
    firstName: "john",
    lastName: "smith",
    money: 3
}

const {lastName, ...y} = person
console.log(y);

const swimmer = ({name}) => {
    const swim = () => {
        console.log(`${name} swam through smth`);
    }
    return {swim}
}

function flyer({name}) {
    return {
        fly: () => console.log(`${name} flew through smth`)
        
    }
}

const monsterCreator = (name) => {
    const monster = {name: name};

    return {
        ...monster,
        ...flyer(monster),
        ...swimmer(monster)
    };
}

const killdude = monsterCreator("jeff");
console.log()
killdude.swim()