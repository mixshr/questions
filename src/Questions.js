import SingleQuestion from './Question'
const Questions = ({questions, activeId, toggleQuestion}) => {
    return <section className='section'>
        <h1 className='header'>Questions</h1>
        {
            questions.map((question) => {
                return <SingleQuestion key={question.id} {...question} activeId={activeId} toggleQuestion={toggleQuestion}/>
            })
        }
    </section>
}
export default Questions;