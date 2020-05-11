import React, {Component} from 'react'
import './Alien.scss'

export class Alien extends Component {
  render() {
    return (
      <svg role="presentation" viewBox="0 0 130.6 148.9" className={this.props.className}>
        <path
          className="alien__spots"
          d="M45.3,148.3c0-0.1,0-0.2,0-0.2c0-5,4.6-9,10.2-9c1.9,0,3.8,0.5,5.4,1.4l0.9,0.5v-14l-0.5-0.1
				c-14.2-2.7-25.4-14-27.9-28.2l-0.1-0.6L32.7,98c-0.8,0.1-1.6,0.2-2.4,0.2c-2.6,0-5.1-0.7-7.4-2.1c-3.4-2-6.1-5.1-8.7-8l-0.2-0.3
				c-1.6-1.7-2.9-2.5-4.6-2.5c-0.9,0-1.8,0.2-2.9,0.4c-0.5,0.1-1.1,0.2-1.7,0.4c-0.6,0.1-1,0.2-1.5,0.2c-0.8,0-1.3-0.2-1.5-0.5
				c-0.3-0.3-0.3-0.8-0.2-1.6c0.2-0.9,0.5-1.5,1.2-1.9c2.8-1.7,1.7-3.8,0.9-5.2c-0.8-1.5-1.2-2.3,0.1-3.2c0.3-0.2,0.7-0.4,1-0.4
				c0.6,0,1.3,0.4,2,0.9C7,74.7,7.4,75,7.8,75.2c0.5,0.3,1,0.4,1.6,0.4c1.1,0,2.1-0.4,3.1-0.8c0.8-0.3,1.6-0.7,2.3-0.7
				c0.5,0,0.8,0.2,1.1,0.5c0.8,0.9,0.4,2.1-0.1,3.4c-0.3,0.8-0.5,1.6-0.5,2.3c0.1,2,1.7,3.3,3.2,4.4c0.4,0.3,0.8,0.6,1.1,0.9
				c2.9,2.5,6.5,5.6,10.9,5.6c0.6,0,1.3-0.1,1.9-0.2l0.4-0.1l0-0.5c0.7-11.9,7.3-22.6,17.7-28.5l0.5-0.3l-0.2-0.5
				c-0.7-1.5-1.5-3-2.3-4.5c-1.4-2.5-2.7-4.9-3.3-7.4l-0.1-0.5l-0.5,0.1c-0.8,0.1-1.7,0.1-2.5,0.1c-10.3,0-19.3-6.6-22.5-16.4
				c-4-12.4,2.8-25.8,15.2-29.8c2.4-0.8,4.8-1.2,7.3-1.2c10.3,0,19.3,6.6,22.5,16.4c1.8,5.7,1.5,11.8-1,17.2
				c-2.5,5.4-6.9,9.6-12.3,11.9L51,47.2l0,0.4c-0.1,0.6,0,1.2,0,1.8c0.5,3.5,1.7,7,3.5,10.1l0.3,0.4l0.5-0.2c3.1-1.2,6.4-2,9.7-2.3
				c1-0.1,2.1-0.1,3.1-0.1c3.7,0,7.3,0.6,10.8,1.7l0.6,0.2l0.1-0.7c0.3-1.5,0.5-3,0.7-4.4c0.4-2.8,0.7-5.5,1.7-7.9l0.2-0.5l-0.4-0.3
				C71.9,40,67.4,28.3,70.9,17.7C74,7.9,83.1,1.3,93.4,1.3c2.5,0,4.9,0.4,7.3,1.2c6,2,10.9,6.1,13.8,11.8s3.4,12,1.4,18.1
				c-3.2,9.8-12.2,16.3-22.5,16.3c-1.8,0-3.6-0.2-5.4-0.6L87.6,48l-0.2,0.3c-0.4,0.5-0.8,1-1,1.4c-1.8,3.2-2.9,7-3.2,10.8l0,0.4
				l0.4,0.2c10.9,5.5,18.1,16,19.2,28.1l0.1,0.8l0.7-0.3c3.4-1.3,5.9-4.4,8-6.9c0.3-0.3,0.6-0.7,1-1.1c1.3-1.3,2.7-2.8,2.4-4.9
				c-0.1-0.7-0.5-1.4-0.9-2.2c-0.6-1.2-1.2-2.3-0.6-3.3c0.3-0.5,0.8-0.7,1.5-0.7c0.6,0,1.2,0.1,1.9,0.3c0.8,0.2,1.6,0.4,2.4,0.4
				c0.9,0,1.7-0.2,2.3-0.7c0.3-0.3,0.6-0.6,0.9-0.8c0.7-0.7,1.3-1.3,2.1-1.3c0.3,0,0.5,0.1,0.8,0.2c1.4,0.7,1.2,1.5,0.7,3.1
				c-0.5,1.6-1.2,3.8,1.8,5c0.7,0.3,1.2,0.8,1.5,1.6c0.3,0.8,0.3,1.3,0.1,1.7c-0.2,0.3-0.9,0.8-2.7,0.8l0,0c-0.8,0-1.6-0.1-2.2-0.1
				l-0.2,0c-0.3,0-0.7,0-1,0c-3.5,0-4.7,2-6.2,4.5c-0.3,0.5-0.6,1-0.9,1.5c-1.6,2.5-3.5,5.1-5.8,7.2c-2.2,1.9-4.5,3-7.2,3.4l-0.4,0.1
				l-0.1,0.4c-1.9,12.4-10.4,23-22.1,27.5l-0.6,0.2l6.3,13.9l0.6-0.8c1.1-1.5,2.6-2.7,4.3-3.5c1.5-0.7,3.1-1,4.7-1c3.8,0,7,1.9,8.4,5
				c0,0.1,0.1,0.1,0.1,0.2l-18.6,8.4c-0.9-1.9-4.2-9.2-9.3-20.7l-0.2-0.4l-0.5,0.1c-1.6,0.4-3.2,0.6-4.7,0.7c-1,0.1-2,0.1-3,0.1
				c-0.5,0-1.1,0-1.7,0l-0.6,0l0,0.6c0.1,11.2,0.1,18.4,0.1,20.4L45.3,148.3L45.3,148.3z"
        />
        <path
          className="alien__body"
          d="M129.7,78.1c-0.4-0.9-0.9-1.6-1.8-2c-4.8-2,1.6-6.2-2.4-8.1c-2-0.9-3.1,0.9-4.4,2c-2.5,2-6.6-1.7-8.2,1
				c-1.2,2,1.2,4.1,1.4,5.9c0.3,2.2-2,3.9-3.3,5.5c-2.2,2.7-4.6,5.5-7.7,6.7c-1.2-12.7-8.9-23.2-19.5-28.6c0.3-3.8,1.4-7.5,3.1-10.5
				c0.3-0.5,0.6-0.9,0.9-1.3c12.2,2.9,24.7-4,28.6-16.1c4.1-12.7-2.8-26.4-15.6-30.6S74.4,4.8,70.3,17.5c-3.6,11.1,1.2,22.9,11,28.5
				c-1.5,3.8-1.5,8.3-2.3,12.4c-4.4-1.4-9.2-2-14.1-1.6c-3.5,0.3-6.8,1.1-9.8,2.3c-1.8-3.1-3-6.6-3.4-9.9c-0.1-0.5-0.1-1.1,0-1.6
				c11.5-4.8,17.6-17.7,13.7-29.8C61.1,5,47.4-2,34.7,2.2C22,6.3,15,20,19.1,32.7c3.6,11.1,14.4,17.9,25.6,16.7c1,4.1,3.8,7.9,5.6,12
				C40,67.2,33,78,32.3,90.3c-4.9,1-8.7-2.2-12.3-5.2c-1.5-1.3-4.1-2.6-4.2-4.8c0-1.8,1.9-4.3,0.4-6c-2.1-2.4-5.4,2-8.3,0.5
				c-1.5-0.8-2.9-2.5-4.7-1.2c-3.7,2.5,3.4,5.6-1,8.4c-0.9,0.5-1.3,1.3-1.4,2.2c-0.6,2.8,1.7,3,3.9,2.6c4-0.7,5.7-1.9,8.7,1.5
				c2.7,3.1,5.5,6.2,9.1,8.4c3.4,2,6.8,2.6,10.3,2c2.6,14.7,14.1,26,28.4,28.7v12.6c-1.6-0.9-3.6-1.4-5.7-1.4c-6,0-10.8,4.3-10.8,9.6
				c0,0.3,0,0.6,0,0.8h21.5c0-0.2-0.1-13.2-0.1-21c1.6,0.1,3.2,0,4.8-0.1c1.6-0.1,3.3-0.4,4.8-0.8c2.9,6.5,9.4,21.1,9.5,21.2l19.6-8.9
				c-0.1-0.3-0.2-0.5-0.3-0.8c-2.2-4.8-8.4-6.7-13.8-4.3c-1.9,0.9-3.4,2.1-4.6,3.7l-5.6-12.4c11.9-4.5,20.6-15.2,22.5-27.9
				c2.7-0.4,5.2-1.6,7.5-3.6c2.4-2.1,4.2-4.7,5.9-7.3c2.3-3.5,2.9-6.1,7.6-5.6C126.4,81.4,131.2,82,129.7,78.1z M43.1,100.9
				c-0.1-1.2,0.8-2.3,2-2.4c1.2-0.1,2.3,0.8,2.4,2c0.1,1.2-0.8,2.3-2,2.4S43.2,102.1,43.1,100.9z M49.4,116.1c-2.9,0.2-5.4-1.9-5.6-4.7
				c-0.2-2.9,1.9-5.4,4.7-5.6c2.9-0.2,5.4,1.9,5.6,4.7C54.3,113.3,52.2,115.9,49.4,116.1z M81.8,70.7c-0.3,2.5-2.5,4.2-5,3.9
				c-2.5-0.3-4.2-2.5-3.9-5c0.3-2.5,2.5-4.2,5-3.9C80.3,66,82.1,68.3,81.8,70.7z M85.5,69.3c0.2-1.3,1.3-2.2,2.6-2.1
				c1.3,0.2,2.2,1.3,2.1,2.6c-0.2,1.3-1.3,2.2-2.6,2.1C86.3,71.7,85.4,70.6,85.5,69.3z M90.8,77.1c-0.1,1.2-1.3,2.1-2.5,2
				s-2.1-1.3-2-2.5s1.3-2.1,2.5-2C90,74.8,90.9,75.9,90.8,77.1z"
        />
        <path
          className="alien__tongue"
          d="M87,84.9c0-0.5-0.1-0.9-0.1-1.3c-0.5,0.3-1,0.6-1.6,0.9c-0.2,0.1-0.4,0.2-0.6,0.3c-0.4,0.2-0.8,0.4-1.2,0.5
				c-0.2,0.1-0.5,0.2-0.7,0.3c-0.4,0.1-0.8,0.3-1.2,0.4c-0.3,0.1-0.6,0.2-0.8,0.3c-1.3,0.4-2.6,0.7-4,0.9c-0.3,0-0.5,0.1-0.8,0.1
				c-2.3,0.4-4.7,0.6-7.2,0.5c-1.6,0-3.2-0.1-4.7-0.3c-0.3,0-0.7-0.1-1-0.1c-1.4-0.2-2.8-0.4-4.1-0.7c-0.5-0.1-0.9-0.2-1.3-0.4
				c-0.3-0.1-0.6-0.2-0.9-0.2c-0.4-0.1-0.8-0.3-1.2-0.4c-0.3-0.1-0.6-0.2-0.8-0.3c-0.4-0.2-0.8-0.3-1.2-0.5c-0.2-0.1-0.5-0.2-0.7-0.3
				c-0.6-0.3-1.2-0.6-1.7-0.9c-0.6,7,3.3,13.5,9.8,16.7c0,0,0,0,0,0c0.4,0.1,2.9,1.1,4.4,1.5c1.8,0.4,3.6,0.5,5.4,0.4
				c2.1-0.1,4.4-0.9,6-1.5c0,0,0,0,0,0c0,0,0,0,0.1,0c0.2-0.1,0.3-0.1,0.5-0.2c0,0,0,0,0,0c0.2-0.1,0.3-0.2,0.5-0.2c0,0,0,0,0.1,0
				c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0,0,0.1,0c0.1-0.1,0.2-0.1,0.3-0.2c2.3-1.4,4.3-3.2,5.7-5.4c1-1.6,1.8-3.3,2.2-5.2
				C86.9,87.6,87,86.2,87,84.9z"
        />
        <path
          className="alien__teeth"
          d="M86.9,83.5c-4.2,2.6-10.7,4.3-18,4.2c-7.1,0-13.4-1.7-17.6-4.2c-0.6,7,3.3,13.5,9.8,16.7c0,0,0,0,0.1,0
				c0,0,0-0.1,0-0.1c0.1-2.7,2.9-4.9,6.7-5.2c0.4,0,0.9,0,1.3,0c2.1,0.1,4,0.7,5.5,1.7c1.5,1.1,2.3,2.5,2.2,4c0.8-0.3,1.5-0.7,1.8-0.9
				c3.9-2.3,6.9-5.9,7.9-10.6C87,87.2,87.1,85.3,86.9,83.5z"
        />
        <path
          className="alien__eye--pupil"
          d="M86.9,83.5c-1.8,1.1-4.1,2.1-6.7,2.8l1.1,3.4l-3.7,0.9l-0.7-3.5c-0.7,0.1-1.4,0.2-2.1,0.3l0.7,3.7l-4.2,0.5
				l-0.2-3.9c-0.7,0-1.5,0-2.2,0c-0.1,0-0.2,0-0.4,0l0.1,4l-4.2-0.2l0.4-3.9c-0.8-0.1-1.5-0.2-2.3-0.3l-0.4,3.4l-3.7-0.7l0.8-3.3
				c-3.1-0.7-5.8-1.8-8-3.1c-0.6,7,3.3,13.5,9.8,16.7c0,0,0.1,0,0.3,0.1c0,0,0-0.1,0-0.1c0.1-2.9,3.6-5.1,7.7-5
				c4.2,0.1,7.5,2.5,7.4,5.4c1-0.4,1.8-0.8,2.1-1c3.9-2.3,6.9-5.9,7.9-10.6C87,87.2,87.1,85.3,86.9,83.5z"
        />
        <circle className="alien__eye--shadow" cx="93.2" cy="24.9" r="20.1" />
        <path
          className="alien__eye--whites"
          d="M113,28.5c-1.8,10.6-11.2,17.8-20.7,16.2c-9.5-1.6-15.8-11.4-14-22.1C80,12.1,89.1,4.7,98.6,6.3
				C108.1,7.9,114.7,17.9,113,28.5z"
        />
        <path
          className="alien__eye--iris"
          d="M107.1,25c-1.2,0.7-2.6,1-4,0.8c-3.2-0.5-5.4-3.6-4.8-6.8c0.3-1.7,1.2-3,2.5-3.9c-1.1-0.6-2.3-1-3.7-1.2
				c-6.6-1.1-12.7,3.4-13.8,9.9c-1.1,6.6,3.4,12.7,9.9,13.8s12.7-3.4,13.8-9.9C107.1,26.8,107.1,25.8,107.1,25z"
        />
        <path
          className="alien__eye--pupil"
          d="M103.4,25.9c-0.1,0-0.2,0-0.3,0c-3.2-0.5-5.3-3.5-4.9-6.7c-0.3-0.1-0.7-0.2-1-0.2c-4.1-0.7-7.9,2.1-8.5,6.1
				c-0.7,4.1,2.1,7.9,6.1,8.5c4.1,0.7,7.9-2.1,8.5-6.1C103.4,26.9,103.4,26.4,103.4,25.9z"
        />
        <circle className="alien__eye--shadow" cx="42.6" cy="24.9" r="20.1" />
        <path
          className="alien__eye--whites"
          d="M60.8,16.1c4.8,9.6,1.3,21-7.3,25.3c-8.6,4.3-19.5,0-24.3-9.6c-4.8-9.6-1.7-20.9,6.9-25.2
				C44.7,2.2,56,6.4,60.8,16.1z"
        />
        <path
          className="alien__eye--iris"
          d="M53,17.8c-0.5,1.3-1.5,2.4-2.8,3c-2.9,1.5-6.4,0.3-7.9-2.6c-0.8-1.5-0.8-3.2-0.3-4.6c-1.3,0.2-2.5,0.6-3.7,1.2
				c-5.9,3-8.4,10.2-5.4,16.1c3,5.9,10.2,8.4,16.1,5.4s8.4-10.2,5.4-16.1C54.1,19.2,53.6,18.5,53,17.8z"
        />
        <path
          className="alien__eye--pupil"
          d="M50.6,20.7c-0.1,0.1-0.2,0.1-0.3,0.2c-2.9,1.4-6.4,0.3-7.8-2.6c-0.3,0.1-0.7,0.2-1,0.4c-3.7,1.8-5.2,6.3-3.3,10
				c1.8,3.7,6.3,5.2,10,3.3c3.7-1.8,5.2-6.3,3.3-10C51.2,21.5,50.9,21.1,50.6,20.7z"
        />
      </svg>
    )
  }
}