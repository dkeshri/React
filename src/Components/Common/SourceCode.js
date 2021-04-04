import React, { useState } from 'react'
import { httpGitHubRequest } from '../../ApiCall'
import styles from '../../assets/css/components/SourceCode.module.css'

const SourceCode = (props) => {
    const [sourceCode, setSourceCode] = useState();
    httpGitHubRequest({
        url: props.url,
        method: 'Get'
    }).then((data) => {
        setSourceCode(data.fetchedData);
    }).catch((error)=>{
        console.log(error);
    });
    return (
        <div className={styles.container}>
            <pre className={styles.container}>
                {sourceCode}
            </pre>
        </div>
    )
}

export default SourceCode
