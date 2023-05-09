import React from "react";

const Footer = () => {
    return(
        <>
        <footer className="osg-footer">
            <div className="osg-footer__gutter">
                <div className="osg-footer__content">
                <div className="osg-grid osg-grid--gap">
                    <div className="osg-grid__column--12 osg-grid__column--4-breakpoint-medium">
                    <h2 className="osg-text--size-india osg-text--size-hotel-breakpoint-medium osg-text--size-golf-breakpoint-large osg-text--weight-medium osg-margin-bottom-4">Heading 1</h2>
                    <ul className="osg-unordered-list osg-unordered-list--clean">
                        <li className="osg-unordered-list__item"><a href="javascript:void(0)" className="osg-link osg-link--chevron-right osg-link--state-light">Link text 1</a></li>
                        <li className="osg-unordered-list__item"><a href="javascript:void(0)" className="osg-link osg-link--chevron-right osg-link--state-light">Link text 2 - long link text spanning multiple lines</a></li>
                        <li className="osg-unordered-list__item"><a href="javascript:void(0)" className="osg-link osg-link--chevron-right osg-link--state-light">Link text 3</a></li>
                    </ul>
                    </div>
                    <div className="osg-grid__column--12 osg-grid__column--4-breakpoint-medium">
                    <h2 className="osg-text--size-india osg-text--size-hotel-breakpoint-medium osg-text--size-golf-breakpoint-large osg-text--weight-medium osg-margin-bottom-4">Heading 2</h2>
                    <ul className="osg-unordered-list osg-unordered-list--clean">
                        <li className="osg-unordered-list__item"><a href="javascript:void(0)" className="osg-link osg-link--chevron-right osg-link--state-light">Link text 1</a></li>
                        <li className="osg-unordered-list__item"><a href="javascript:void(0)" className="osg-link osg-link--chevron-right osg-link--state-light">Link text 2</a></li>
                    </ul>
                    </div>
                    <div className="osg-grid__column--12 osg-grid__column--4-breakpoint-medium">
                    <h2 className="osg-text--size-india osg-text--size-hotel-breakpoint-medium osg-text--size-golf-breakpoint-large osg-text--weight-medium osg-margin-bottom-4">Heading 3 - Long heading spanning multiple lines</h2>
                    <ul className="osg-unordered-list osg-unordered-list--clean">
                        <li className="osg-unordered-list__item"><a href="javascript:void(0)" className="osg-link osg-link--chevron-right osg-link--state-light">Link text 1</a></li>
                        <li className="osg-unordered-list__item"><a href="javascript:void(0)" className="osg-link osg-link--chevron-right osg-link--state-light">Link text 2</a></li>
                    </ul>
                    </div>
                    <div className="osg-grid__column--12 osg-grid__column--8-breakpoint-medium">Adding multiple rows and columns give more options for content placement.</div>
                    <div className="osg-grid__column--12 osg-grid__column--4-breakpoint-medium">SoMe links</div>
                </div>
                </div>
            </div>
        </footer>
        </>
    )
};
export default Footer;