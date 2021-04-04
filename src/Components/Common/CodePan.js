import React,{useState} from 'react'
import styles from '../../assets/css/components/CodePan.module.css'
const CodePan = () => {
    const [isSourceCodeDisplay,setourceCodeDisplay] = useState(false)
    const onClickViweSource = () =>{
        setourceCodeDisplay(!isSourceCodeDisplay);
        console.log(isSourceCodeDisplay);
    }
    return (
        <div className={styles.container}>
            <i className={`fa fa-code ${styles.View_source}`} title="View Source"
                onClick={onClickViweSource}
            ></i>
        </div>
    )
}

export default CodePan
