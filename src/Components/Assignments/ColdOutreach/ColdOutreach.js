import React from 'react'
import Upload from '../../Upload/Upload'
import './cold-outreach.scss'

const ColdOutreach = () => {

    return (

        <div className='cold-outreach'>

            <iframe
                width="560"
                height="315"
                title='ass ign ment'
                src="https://www.youtube.com/embed/2uqgQ3i1EEU"
                frameBorder="0"
                allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture"
                allowFullScreen
            />

            <div style={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h5>FOR FRIDAY, please complete the following:</h5>

                <p>1: Send at least three cold outreach messages to someone on LinkedIn (or via email if you have their email addresses)
                    > - Links to templates and resources to get you started are in thread
                    > - Submit screenshots of your outreach messages to your PM on Friday</p>

                <p >2: Identify three upcoming networking events that you can attend over the next month or two. If you live in an area without many events like this, then instead join three online groups relevant to your field and interests and post an introduction.
                    > - Links to templates and resources to get you started are in thread
                    > - Submit screenshots of your event RSVPs or your group posts to your PM on Friday.</p>
            </div>

            <h3>Additional Resources</h3>

            <ul style={{ listStyleType: 'none' }}>

                <li>
                    <a href='https://docs.google.com/spreadsheets/d/1NCAaKLBLu8YQayvffvR4tmxnggcx84O9yVjH06Yf1yo/edit?usp=sharing'>Networking tracker* (go to “people in my network” tab)</a>
                </li>

                <li>
                    <a href='https://docs.google.com/document/d/1_psIFrb87SnKHHF8oJnCZxXwI6SszCXssmpEoRwzkCA/edit?usp=sharing'>*Networking convo starters*</a>
                </li>

                <li>
                    <a href='https://docs.google.com/document/d/1owl_mvOeXt08TfEQlfYGimRzQ9QIDLY1ewBgK7SHC5I/edit?usp=sharing'>*Networking and outreach templates*</a>
                </li>

                <li>
                    <a href='https://docs.google.com/document/d/1HLfnzpXFY3vn1UzBEhE1g7pNnEzNZIfS2Dw6b3FORj8/edit?usp=sharing'>*LinkedIn outreach templates* (300 characters or less)*</a>
                </li>

            </ul>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div id={'CardUpload'}  >
                    <Upload />
                </div>
            </div>

        </div>

    )

}



export default ColdOutreach