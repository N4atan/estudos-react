import { useState } from 'react'
import Card from '../components/Card.jsx'
import ActionGroup from '../components/ActionGroup.jsx'

export default function DivMain(){
    let [currentIndex, setIndex] = useState(0);

    const handleNextCard = () => setIndex(currentIndex < data.flashcardData.length - 1 ? currentIndex + 1 : currentIndex);
    const handlePrevCard = () => setIndex(currentIndex > 0 ? currentIndex - 1 : 0);

    return (
        <main id="div-main" className="w-3/4 h-3/4 bg-white mx-auto mt-15 p-4 gap-5 flex flex-col items-center rounded-xl shadow-xl/20">
            <header className="w-9/10 h-14 bg-neutral-200">
            </header>

            <Card content={data.flashcardData[currentIndex]}
            />

            <ActionGroup 
            nextCard={handleNextCard} 
            prevCard={handlePrevCard}
            hideNext={currentIndex === data.flashcardData.length - 1}
            />
        </main>
    )
}

let data = {
    flashcardData: [
        {word: 'Cat', phrase: 'I have a black cat !', palavra: 'Gato', frase: 'Eu tenho um gato preto !'},
        {word: 'Java', phrase: 'Java is an object-oriented programming language', palavra: 'Java', frase: 'Java é uma linguagem de programação orientada a objetos!'},
        {word: 'Thrive', phrase: 'Some plants thrive in sunlight, while others prefer shade.', palavra: 'Algumas plantas prosperam sob a luz do sol, enquanto outras preferem sombra.', frase: 'Thrive significa “prosperar”, “crescer bem” ou “se desenvolver com sucesso”. É usado para descrever algo (ou alguém) que está indo muito bem, seja fisicamente, emocionalmente ou até financeiramente.'}
    ]
}