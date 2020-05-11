import React from 'react'
import './Rocket.scss'

const Rocket = ({takeoff, takeoffAnimation}) => (
  <svg
    role="presentation button"
    tabIndex="0"
    onClick={takeoffAnimation}
    onKeyPress={takeoffAnimation}
    className={`hero__image--rocket ${takeoff}`}
    viewBox="0 0 119 255"
  >
    <path
      className="rocket__fire--accent"
      d="M74.2,166.3c8,2.7,13.2,10.5,14.8,18.6c0.4,2.1,0.9,4.2,0.8,6.3c0,2,0.2,4.2-0.3,6.2c-0.1,0.5-0.3,1.1-0.5,1.6
				c-0.2,0.5-0.7,0.3-1,0.1c-0.7-0.6-1.2-1.6-1.5-2.4c-0.2-0.4-0.2-1.3-0.5-1.5c-0.8-0.9-0.8,0.9-0.8,1.3c0,1.1-0.2,2.2-0.3,3.3
				c-0.5,4.2-1.6,8.5-2.5,12.6c-0.5,1.9-1,3.8-1.6,5.7c-0.6,1.9-1.1,4.3-2.3,6c-0.2,0.2-0.2,0.3-0.4,0.6c-1.1-1.7-1.9-3.6-2.6-5.7
				c-0.4-1-0.7-2-1.1-3c-0.2-0.4-0.3-1.7-1-1.4c-0.4,0.2-0.5,1.1-0.7,1.4c-1.4,4.2-3.3,7.9-5.9,11.5c-2.6,3.5-5.9,6.1-9.6,8.1
				c-0.9,0.6-2,0.9-2.9,1.4c-0.4,0.2-0.8,0.2-1.2,0.4c-0.2,0-0.6,0.3-0.8,0.3c-0.3-0.1-0.3-0.2-0.4-0.4c-0.2-1,0-1.9,0.2-2.9
				c0.2-1.1,0.8-2,0.9-3c0.3-1.4-0.8-1.6-1.8-1.2c-0.9,0.3-1.7,0.9-2.1,1.8c-0.8,1.9-1.2,3.7-1.5,5.7c-0.4,2.2-0.5,4.4-1,6.6
				c-0.2,0.8-0.3,2.2-1,2.7c-0.9,0.8-1.8,0-2.4-0.6c-3-2.9-4.9-6.9-6.6-10.6c-1.7-3.9-3.5-7.9-4.6-12c-1.1-4.3-2-8.5-1.9-13
				c0.1-4,1.2-8.6,3.7-11.8c0.2-0.3,1.1-1.2,0.9-1.6c-0.3-0.5-1.1-0.2-1.5-0.2c-1,0.2-1.9,0.4-2.7,1c-0.4,0.3-0.8,0.6-1.3,0.7
				c-0.6,0.1-0.4-0.3-0.2-0.9c0.2-1.1,0.5-2.1,1-3.1c0.9-1.9,2-3.6,3.4-5.1c0.4-0.4,0.8-0.8,1.2-1.2c0.7-0.6,0.1-1.2-0.7-1.1
				s-1.7,0.6-2.4,1.1c-4.6,3.6-8.5,8-12.3,12.4c-0.5-1.9,0-4.3,0.4-6.2c0.4-2.1,1.2-4.1,2-6.1c1.6-4,3.9-7.8,6.2-11.4
				c2.2-3.6,5.2-6.6,8.7-8.8c3.6-2.3,7.4-3.5,11.6-4.2c4.1-0.5,8.5-0.6,12.5,0.4c1,0.3,2.1,0.1,3.1,0c1-0.1,2,0.1,3.2,0.1
				c2,0.1,4.1,0.6,6.1,1.2C73.6,166,73.9,166.2,74.2,166.3z"
    />
    <path
      className="rocket__fire--main"
      d="M19.4,194.6c-0.2,1.2-0.5,2.5-0.5,3.7c0,0.6,0,1.2,0,1.7c0,0.6,0.3,1.3,0.4,1.9c2.3-2.7,4.7-5.4,7.1-7.9
				c1.2-1.3,2.5-2.5,3.9-3.8c0.9-0.8,3.2-3,4.4-2.3c-2.5,2.2-4.6,4.9-5.7,8c-0.3,0.8-0.4,1.6-0.5,2.4c0,0.5-0.2,0.7,0.3,0.9
				c0.4,0,0.7-0.1,1.1-0.3c0.7-0.3,1.3-0.9,1.9-1.1c0.8-0.2,1.6-0.5,2.5-0.5c-5.5,6.4-5.4,16.2-3.4,23.9c1.1,4.4,2.7,8.6,4.4,12.7
				c1.5,3.7,3.5,7.7,6,10.8c1,1.3,2.9,3.9,4.6,2.4c0.7-0.6,1-2,1.2-2.9c0.2-1.1,0.4-2,0.5-3.1c0.3-2.1,0.5-4.2,0.9-6.3
				c0.2-1.1,0.5-2.1,1-3c0.5-1,1.3-1.3,2.4-1.7c1.2-0.4,0.4,1.7,0.2,2c-0.4,1-0.7,2-0.8,3.1c0,0.4-0.2,2.9,0.5,2.7c1-0.3,2-0.5,3-1
				c3.8-1.7,7.4-3.9,10.2-7c1.9-2,3.9-4.5,5.2-7c0.6-1.3,1.3-2.6,1.9-3.9c0.6-1.4,1-2.8,1.4-4.3c0.6,2,1.3,4.1,2.2,5.9
				c0.5,0.9,0.7,2.1,1.4,3c0.1,0.3,0.6,1.1,0.9,1.2c0.4,0,0.8-0.6,1-1c0.5-0.8,0.8-1.8,1.1-2.6c0.4-1.2,0.8-2.2,1.1-3.4
				c0.6-1.9,1.1-3.8,1.6-5.7c0.7-2.8,1.2-5.6,1.8-8.4c0.3-1.5,0.6-2.8,0.7-4.3c0.2-1.4,0.4-2.9,0.2-4.4c0.3,1,0.6,1.9,1.1,2.9
				c0.3,0.7,1.3,1.9,2.2,1.7c0.7-0.2,1-2,1.1-2.6c0.1-1,0.3-2.2,0.3-3.3c0.4-4.1-0.5-8.6-1.7-12.5c-1.3-4.1-3.4-7.8-6.4-10.7
				s-6.6-4.7-10.6-5.8c-2-0.5-4.1-0.7-6.1-0.7c-1,0-2.1,0-3.1,0c-1.1,0.1-2.1-0.3-3.1-0.4c-4.3-0.6-8.5-0.5-12.7,0.2
				c-8.3,1.2-15.3,7-19.5,14C23.7,183.2,20.9,188.6,19.4,194.6z M45.1,242.2c-0.4,0.8-0.9,0.8-1.6,0.3c-0.6-0.6-1.2-1.2-1.7-2
				c-1.1-1.3-1.9-2.8-2.7-4.4c-1.7-3.1-3-6.4-4.3-9.6c1.2,2.1,5.5,10.3,8.7,6.8c0.8-0.6,1.1-2.1,1.2-3c0.2-1.1,0.4-2,0.4-3
				c0.3-2.2,0.5-4.2,1-6.3c0.2-0.9,0.7-2.2,1.5-2.7c-0.4,1.3-0.8,2.4-0.9,3.6c-0.2,0.9-0.1,11.8-0.3,12.9
				C46.2,237.1,46.1,239.8,45.1,242.2z M79.9,198.5c1.1-4.1,2-8.3,2.7-12.5c0-0.4,0.1-0.7,0.1-1.1c0.9,1.1,2.6,1.8,3.5,0.5
				c0.8-1,0.8-3,1-4.1c1,4.3,1.6,9.4,0.3,13.6c-0.8-0.4-1.2-1.5-1.5-2.4c-0.2-0.5-0.2-1.3-0.8-1.6c-0.4-0.2-1-0.1-1.3,0.3
				c-0.2,0.3-0.1,0.7-0.1,1.1c-0.1,2-0.4,4.1-0.7,6.1c-0.8,4.3-1.7,8.5-2.9,12.7c-0.7,2.3-1.4,4.7-2.4,7c-0.9-1.1-1.4-2.9-1.9-4.3
				c-0.5-1.4-1-3.1-1.5-4.3C76.8,211.3,79.5,200,79.9,198.5z M70,219.5c-0.2,0.4-0.4,0.9-0.6,1.2c-0.5,0.8-0.9,1.7-1.5,2.5
				c-1.2,1.6-2.3,3.1-3.7,4.4c-2.8,2.7-5.9,4.6-9.4,6.2c0.2-1.1,0.5-2.3,0.6-3.5c0.1-0.8,0.2-0.8,0.9-1.2c0.8-0.4,1.7-0.8,2.5-1.3
				c1.6-0.9,3-1.9,4.5-3c2.7-2.3,4.9-5,6.7-8.1C69.9,217.7,70.3,218.6,70,219.5z M61.9,200c1-0.9,2-1.2,3.4-1.5c0.3,0,2.9,0.3,3,0.2
				c0.6-0.9,1.1-1.8,1.6-2.8c0.9-2,1.6-3.9,2.2-5.9c1.2-3.9,1.7-8.2,1.8-12.3c0-1.8,0-3.6-0.1-5.5c2.8,3.3,3.3,7.8,3.1,12
				c0,4.2-0.6,8.4-1.5,12.4c-1,4.5-2.2,8.9-3.7,13.2c-0.3,0.9-0.6,1.6-0.9,2.4c-0.1,0.1-0.4,1.3-0.6,1c-0.4-0.3-0.6-0.7-0.9-1.1
				c-0.7-0.9-1.2-1.9-1.9-2.8c-0.5-0.8-1.1-1.7-1.9-2.3c-1-0.6-3.2,4.9-3.5,5.6c-0.3-1-0.6-1.8-0.9-2.8c-1.3,2.9-3.5,5.5-5.5,8
				c-2,2.6-4.2,5-6.4,7.5c0.1-8.4,4.5-16.2,9.9-22.4C60,201.8,60.9,200.8,61.9,200z M41.4,205.5c-0.6,1.6-0.8,3.2-1,4.8
				c-0.1,0.8,0.2,1.7,0.1,2.5c-0.2,0.8-0.8,1.9-1.1,2.6c-1.3,3.1-2.5,6.3-3.6,9.5c-0.2-0.4-0.5-0.7-0.8-1.2c-1.8-3.9-2.2-8.2-2.1-12.3
				c0.1-2,0.3-4.1,0.5-6.2c0.1-1.1,0.1-2.3,0.7-3.3c0.5-1,1-1.9,1.6-2.9c0.5-0.8,1.5-2.7,2.6-2.5c-1.4,3-2.6,6.2-2.4,9.5
				c0,0.8,0.2,1.7,0.4,2.5c0.1,0.5,0.1,0.8,0.7,0.7c0.4-0.1,0.6-0.4,0.9-0.7c0.5-0.6,0.8-1.3,1.4-1.7C39.9,206.3,40.6,205.8,41.4,205.5
				z M22.2,191.2c0.2-0.4,0.5-0.9,0.7-1.2c1.8-2.9,3.5-5.9,5.3-8.8c2.2-3.5,4.6-7.1,7.7-9.8s7-4.5,11.1-4.8c2.1-0.2,4,0,6.1,0.1
				c-0.6,0.2-1.1,0.6-1.7,0.6c-0.3-0.1-0.7,0-1,0.1c-0.7,0-1.5,0.1-2.2,0.3c-1.5,0.3-2.8,1-4.1,1.6c-2.9,1.6-5.4,3.7-7.7,6
				c-4.4,4.6-8.1,9.9-11.3,15.4c-1.3,2.3-2.5,4.9-3.9,7c0.1-1.4,0.2-2.9,0.5-4.2C21.9,192.6,22,191.7,22.2,191.2z"
    />
    <path
      className="rocket__body"
      d="M102.9,181.6c13.5-15.9,6.2-44.3-7.7-50.3c2.3-6.7,4.1-14,5-21.6c1.4-12.3,0.9-26-1.2-39.4
				c-1.4-8.8-3.5-17.5-6.1-25c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.3-0.1-0.4c-5.3-15.2-11.9-25.1-16-25.4C72.8,19,64.5,27,56.1,40.4
				l-0.2,0.2c-0.1,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.2,0,0.4c-11.5,18.4-19.7,41.4-22,62.1c-0.7,6.8-0.6,13.7,0.2,21.4
				c-14.5,3.6-27,29.1-17.5,47.3c0,0,1.2,2.6,2,2.4c1.3-0.4,6.9-27.1,18.9-30.1c0.5,2.7,1,5.2,1.5,7.7c0.2,1,0.4,2.1,0.6,3
				c-1.7,0.3-3.1,1.6-3.2,3.3c-0.3,2.2,1.3,4.1,3.4,4.3l42.7,4.6c2.2,0.3,4.1-1.3,4.3-3.4c0.2-2.1-1.2-3.9-3.2-4.2
				c0.2-0.4,0.4-0.9,0.6-1.4c1-2.2,1.9-4.4,3-6.8c0.3-0.7,0.6-1.3,0.9-2c11.8,4.6,11.6,33,12.7,33.7
				C101.1,183.9,102.9,181.6,102.9,181.6z"
    />
    <path
      className="rocket__window"
      d="M35.2,131.2c-1.7-10.6-2-19.4-1.1-28.1c2.3-20.7,10.5-43.9,22.1-62.3c17.9,4.7,29.6,4.8,36.4,3.9
				c2.6,7.7,4.9,16.4,6.3,25.3c2.1,13.4,2.6,27,1.2,39.3c-1.9,16.9-8.8,32.2-14.4,44.5c-0.8,1.8-1.6,3.5-2.3,5.1
				c-3.1-0.4-21.5-2.4-21.7-2.5c-16.3-1.7-20.6-2.2-21.8-2.2c-0.4-2.2-0.9-4.3-1.5-6.7C37.3,142.5,36.1,137,35.2,131.2L35.2,131.2z"
    />
    <path
      className="rocket__body"
      d="M100.5,109.5c2.6-23.7-1.6-48-7.6-65.1c-7.7,1-19.6,0.7-36.8-3.9C46.2,56,36.3,79,33.7,103.1
				c-2.1,19.6,2.9,37.3,5.8,51.7c0.6-0.3,43.8,4.5,44.1,4.7C89.6,146,98.4,128.8,100.5,109.5z M68.6,54.2c-0.5-2.4,1.1-4.6,3.4-5.1
				c2.4-0.5,4.6,1.1,5.1,3.4c0.5,2.4-1.1,4.6-3.4,5.1C71.4,58.1,69,56.7,68.6,54.2z M62.6,72.5c-0.8-4.3,2-8.5,6.3-9.4
				c4.3-0.9,8.5,2,9.4,6.3c0.8,4.3-2,8.5-6.3,9.4C67.7,79.7,63.5,76.8,62.6,72.5z M62.6,149c-4.2-0.4-10.2-1.1-15.1-1.5
				c-0.3-0.1-0.5,0-0.8-0.1c0-0.1,0-0.3-0.1-0.4c-2.8-13-6.1-27.7-4.3-43c0.5-4.5,1.2-8.9,2.2-13.1l48.1,4.4c0,4.5-0.2,8.9-0.7,13.2
				c-1.7,15.4-8.1,30.2-13.5,42.3C74.9,150.4,69.9,149.9,62.6,149z"
    />
  </svg>
)

export default Rocket