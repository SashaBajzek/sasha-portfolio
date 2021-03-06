import React from 'react'
import './Saturn.scss'

const Saturn = ({earthspin, earthspinAnimation}) => (
  <svg
    role="presentation"
    viewBox="0 0 209.7 120"
    onClick={earthspinAnimation}
    className={`hero__image--saturn-smooth ${earthspin}`}
  >
    <circle className="saturn-smooth__crater" cx="102.4" cy="59.9" r="59" />
    <path
      className="saturn-smooth__body--main"
      d="M74,8.2c-6.8,3.7-12.5,8.5-17.1,14.2c-1.7,12.3,0.4,25.2,6.8,36.9c15.9,29.1,51.5,39.1,80.6,23.1
				c5.8-3.2,11.8-6.6,16-11.1c2.6-13.1,0.7-27.1-6.2-39.7C138.5,3,102.6-7.5,74,8.2z M75.2,54.2c-2.3,1.3-5.2,0.4-6.4-1.9
				c-1.3-2.3-0.4-5.2,1.9-6.4c2.3-1.3,5.2-0.4,6.4,1.9C78.4,50,77.5,52.9,75.2,54.2z M101.9,10.9c4-2.2,9-0.7,11.2,3.3
				c2.2,4,0.7,9-3.3,11.2c-4,2.2-9,0.7-11.2-3.3C96.4,18.1,97.9,13.1,101.9,10.9z M87,38.3c-5.7,3.1-12.8,1-15.9-4.6
				c-3.1-5.7-1-12.8,4.6-15.9c5.7-3.1,12.8-1,15.9,4.6C94.7,28,92.6,35.1,87,38.3z M122.8,66.8c-2.4,1.3-5.4,0.4-6.7-1.9
				c-1.3-2.4-0.4-5.4,1.9-6.7c2.4-1.3,5.4-0.4,6.7,1.9C126,62.5,125.1,65.5,122.8,66.8z M118.7,49.5c-1-1.9-0.3-4.3,1.5-5.3
				c1.9-1,4.3-0.3,5.3,1.5s0.3,4.3-1.5,5.3C122.1,52.1,119.7,51.4,118.7,49.5z M141,60.5c-3.8,2.1-8.5,0.7-10.6-3.1
				c-2.1-3.8-0.7-8.5,3.1-10.6c3.8-2.1,8.5-0.7,10.6,3.1C146.1,53.7,144.7,58.4,141,60.5z"
    />
    <path
      className="saturn-smooth__ring--accent"
      d="M80.6,102.7c-45.3,9.3-76.4,5.1-79.2-4.1c-2.5-8.1,13.1-20.5,41.8-33.2c0.2,2.6,0.5,5.3,1,7.9
				c-11.8,6.9-17.1,12.6-15.7,16.9c3.1,10,38,3.6,48.6,1.5c10.2-2.1,20.9-4.9,31.9-8.2c19.9-6.1,38.2-13.5,51.4-20.7
				c9.7-5.3,20.8-12.8,19-18.8c-1.3-4.2-8.3-6-20.8-5.3c-1.1-2.5-2.3-5-3.7-7.3c35.9-6.3,50.7-1.8,52.7,4.5
				c3.3,10.7-33.3,39.7-95.9,58.9C101.2,97.9,90.7,100.6,80.6,102.7C80.6,102.7,80.6,102.7,80.6,102.7z"
    />
    <path
      className="saturn-smooth__ring--main"
      d="M153.1,30c1.7,2.9,3.3,6,4.6,9.3c11.7-0.7,19.5,0.8,20.6,4.5c2.6,8.5-28.6,25.5-69.7,38.1
				c-41.1,12.6-76.5,16-79.1,7.5c-1.2-3.9,4.9-9.6,15.6-15.8c-0.3-1.4-1.3-9.9-1.3-10.2C11.8,77.4-2.3,90,0.3,98.4
				c3.8,12.5,51.1,15.4,111.7-3.2c60.6-18.6,100.4-47.8,96.6-60.3C206,26.7,186.9,23.9,153.1,30z M112.5,92.3
				C62.1,107.9,21.1,107.8,8,99.6c21.2,3.8,59.2,0.8,103.6-13.3c45.3-14.4,79.6-34.4,94.7-49.9C202.9,50.3,166,75.7,112.5,92.3z"
    />
  </svg>
)

export default Saturn
