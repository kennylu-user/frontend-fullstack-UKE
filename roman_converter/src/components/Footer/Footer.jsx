import React from "react";

const Footer = () => {
    return(
        <>
        <div className="osg-grid__column--12">

        <footer className="osg-footer">
            <div className="osg-footer__gutter">
                <div className="osg-footer__content">
                    <div className="osg-grid osg-grid--gap">
                        <div className="osg-grid__column--12 osg-grid__column--4-breakpoint-medium">
                            <div>
                                <h2 className="io-text-preset-4 osg-margin-bottom-4x">Kontakt</h2>
                                <ul className="osg-unordered-list osg-unordered-list--clean">
                                    <li className="osg-unordered-list__item"><a href="https://www.oslo.kommune.no/kontakt/" className="osg-link osg-link--chevron-right osg-link--state-light">Kontakt Oslo Kommune</a></li>
                                    <li className="osg-unordered-list__item"><a href="https://www.oslo.kommune.no/finn-en-ansatt/?searchID=ansatt" className="osg-link osg-link--chevron-right osg-link--state-light">Finn en ansatt</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="osg-grid__column--12 osg-grid__column--4-breakpoint-medium">
                            <div>
                                <h2 className="io-text-preset-4 osg-margin-bottom-4x">Jobb i Oslo Kommune</h2>
                                <ul className="osg-unordered-list osg-unordered-list--clean">
                                    <li className="osg-unordered-list__item"><a href="https://candidate.webcruiter.com/nb-no/home/companyadverts?companylock=2180#search" className="osg-link osg-link--chevron-right osg-link--state-light">Ledige stillinger</a></li>
                                    <li className="osg-unordered-list__item"><a href="https://www.oslo.kommune.no/jobb-i-oslo-kommune/" className="osg-link osg-link--chevron-right osg-link--state-light">Lønn og arbeidsforhold</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="osg-grid__column--12 osg-grid__column--4-breakpoint-medium">
                            <div>
                                <h2 className="io-text-preset-4 osg-margin-bottom-4x">Om nettstedet</h2>
                                <ul className="osg-unordered-list osg-unordered-list--clean">
                                    <li className="osg-unordered-list__item"><a href="https://www.oslo.kommune.no/personvern-og-informasjonskapsler/" className="osg-link osg-link--chevron-right osg-link--state-light">Personvern og informasjonskapsler</a></li>
                                    <li className="osg-unordered-list__item"><a href="https://www.oslo.kommune.no/tilgjengelighet/" className="osg-link osg-link--chevron-right osg-link--state-light">Tilgjengelighet</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="osg-grid__column--12 osg-grid__column--4-breakpoint-medium osg-grid__column--start-9-breakpoint-medium osg-grid__column--end-13-breakpoint-medium">
                            <div className="osg-grid__column--12 osg-grid__column--4-breakpoint-medium">
                                <div className="osg-grid">
                                    <div className="osg-grid__column--6">
                                        <a className="osg-link osg-link--state-light io-text-preset-15" href="https://www.oslo.kommune.no/english/" lang="en-GB">English</a>
                                    </div>
                                    <div className="osg-grid__column--6 osg-text--align-right">            
                                        <a className="osg-link osg-link--state-light osg-link--no-decoration io-text-preset-10 osg-margin-left-5" href="https://www.facebook.com/Oslo/" target="_blank" rel="noopener"><span className="osg-icon osg-icon--facebook"></span><span className="osg-sr-only">Facebook</span></a>
                                        <a className="osg-link osg-link--state-light osg-link--no-decoration io-text-preset-10 osg-margin-left-5" href="https://twitter.com/oslokommune" target="_blank" rel="noopener"><span className="osg-icon osg-icon--twitter"></span><span className="osg-sr-only">Twitter</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
        </>
    )
};
export default Footer;