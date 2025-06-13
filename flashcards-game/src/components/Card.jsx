import { useState } from "react";

export default function Card(Props){
    const [flipped, setFlipped]= useState(true);

    let defaultStyle = 'w-4/5 h-3/4 bg-neutral-300 flex flex-col justify-center items-center rounded-2xl shadow-2xl cursor-grab transition-all duration-300';
    let typeStyle = flipped ?
                    'bg-purple-500':
                    'bg-rose-500';

    
    const handleClick = () => setFlipped(!flipped);


    return (
        <div
        onClick={handleClick}
        className={`${defaultStyle}  ${typeStyle}`}>
            {flipped? (
                <>
                <h1 className="text-6xl text-white mb-5">
                    {Props.content.word}
                </h1>
                <h2 className="text-4xl text-white">
                    {Props.content.phrase}
                </h2>
                </>
            ) : (
                <>
                <h1 className="text-6xl text-stone-100 mb-5">
                    {Props.content.palavra}
                </h1>
                <h2 className="text-4xl text-stone-100">
                    {Props.content.frase}
                </h2>
                </>
            )}
        </div>
    );
}