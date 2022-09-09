import React from 'react'
import { Link } from 'react-router-dom'
import { constantsText } from '../../constants/constantsText'
import { constantsUrl } from '../../constants/constantsUrl'
import Input from '../input/Input'
import "./NotFoundPage.css"


function searchSVG() {
    return (
        <svg width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="translate(50 50)">
                <g transform="scale(0.8)">
                    <g transform="translate(-50 -50)">
                        <g>
                            <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="2.564102564102564s" values="-20 -20;20 -20;0 20;-20 -20" keyTimes="0;0.33;0.66;1"></animateTransform>
                            <path fill="#ffd740" d="M44.19 26.158c-4.817 0-9.345 1.876-12.751 5.282c-3.406 3.406-5.282 7.934-5.282 12.751 c0 4.817 1.876 9.345 5.282 12.751c3.406 3.406 7.934 5.282 12.751 5.282s9.345-1.876 12.751-5.282 c3.406-3.406 5.282-7.934 5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536 28.033 49.007 26.158 44.19 26.158z"></path>
                            <path fill="#7c14a8" d="M78.712 72.492L67.593 61.373l-3.475-3.475c1.621-2.352 2.779-4.926 3.475-7.596c1.044-4.008 1.044-8.23 0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572 22.362 50.381 20 44.19 20C38 20 31.809 22.362 27.085 27.085 c-9.447 9.447-9.447 24.763 0 34.21C31.809 66.019 38 68.381 44.19 68.381c4.798 0 9.593-1.425 13.708-4.262l9.695 9.695 l4.899 4.899C73.351 79.571 74.476 80 75.602 80s2.251-0.429 3.11-1.288C80.429 76.994 80.429 74.209 78.712 72.492z M56.942 56.942 c-3.406 3.406-7.934 5.282-12.751 5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817 1.876-9.345 5.282-12.751c3.406-3.406 7.934-5.282 12.751-5.282c4.817 0 9.345 1.876 12.751 5.282 c3.406 3.406 5.282 7.934 5.282 12.751C62.223 49.007 60.347 53.536 56.942 56.942z"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}


const NotFoundPage = () => {
    return (
        <div className='not-found-page-container'>
            {searchSVG()}
            <div className="not-found-page-text">{constantsText.NOTE_FOUND_PAGE_TEXT} (404)</div>
            <Link to={constantsUrl.HOME_PAGE}>{constantsText.GO_HOME_PAGE}</Link>

        </div>
    )
}

export default NotFoundPage