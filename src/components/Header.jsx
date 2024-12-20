export default function Header() {
    return (
        <header>
            <img src="react-core-concepts.png" alt="Logo" />
            <h1>React Essentials</h1>
            <p>{title[getTitlePhrase(2)]} React concepts you will need for almost any app you are going to build!</p>
        </header>
    )
}


const title = ['Core', 'Vital', 'Fundamentals'];

function getTitlePhrase(max){
    return (
        Math.floor(Math.random()*(max+1))
    )
}