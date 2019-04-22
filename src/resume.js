import { library } from '@fortawesome/fontawesome-svg-core'
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fagithub } from '@fortawesome/free-solid-svg-icons'
import { falinkedinin } from '@fortawesome/free-solid-svg-icons'
import { fadribble } from '@fortawesome/free-solid-svg-icons'
import {render} from 'react-dom';

import BackgroundStyle from "./backgroundstyle.css"

const linkedin = () => (
  <div>
    Linkedin: <FontAwesomeIcon icon ="fa-linkedin-in"/>
    </div>
)

const github = () => (
  <div>
    Github: <FontAwesomeIcon icon ="fa-github"/>
    </div>
)

const dribble = () => (
  <div>
    Dribble: <FontAwesomeIcon icon="fa-dribbble"/>
    </div>
)

render(< linkedin/>, document.getElementById('root'));

export default render;