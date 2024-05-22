import SingleQuestion from './Question'
const Questions = ({questions}) => {
    return <section className='section'>
        <h1>Questions</h1>
        {
            questions.map((question) => {
                return <SingleQuestion key={question.id} {...question}/>
            })
        }
    </section>
}
export default Questions;