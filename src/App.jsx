import React, {useState} from 'react';
import data from './data';
import Questions from "./Questions";

function App() {
    const [questions, setQuestions] = useState(data);
    const [activeId, setActiveId] = useState(1);

    const toggleQuestion = (id) => {
        const nawActiveId = id === activeId ? null : id;
        setActiveId(nawActiveId)
    };

    return <main className='container'>
        <Questions questions={questions} activeId={activeId} toggleQuestion={toggleQuestion}/>
    </main>;
}

export default App;
