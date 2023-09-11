import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

interface AppWrapProps {
    idName: string;
    classNames: string;
    Component: any;
    active: string;
}
const AppWrap = ({ Component, idName, classNames } :AppWrapProps ) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
    <SocialMedia />

    <div className="app__wrapper app__flex">
        <Component />
        </div>
        <NavigationDots active={idName}  />
    </div>
);
};

export default AppWrap;
