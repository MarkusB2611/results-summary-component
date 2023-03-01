import { useState } from 'react'
import classes from './results-summary.module.css'
import DATA from '../../../data.json'
import Result from './result'
import Summary from './summary'

const ResultsSummary = () => {
    const [result, setResult] = useState(DATA)

    const totalScore = Math.floor(result.reduce((sum, current) => sum + current.score, 0) / 4)
    return <main className={classes.component}>
        <Result totalScore={totalScore} />
        <div className={classes.test}><Summary result={result} />
        <button className={classes.button}>Continue</button></div>
        </main>
}

export default ResultsSummary