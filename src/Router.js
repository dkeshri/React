import React, { useState, useEffect } from 'react'
import { Switch, useLocation } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { config } from './data/NavMenuListConfig';
import { AnimatePresence } from 'framer-motion';
import PageNotFound from './Components/Common/PageNotFound';
import Home from './Components/Home';
const routeList = [];
const getRouteComponent = (MenuConfig) => {
    MenuConfig.forEach(item => {
        if (item.children !== undefined && item.children.length !== 0) {
            getRouteComponent(item.children);
        }
        if (item.path !== undefined)
            routeList.push(item);
    });
    //return optionList;
}
getRouteComponent(config.menuItems);
//<ProtectedRoute path={`${item.path}`} exact component={item.component} key={count++}/>
//getItemFromMenuConfig(config.menuItems);
export const AppRouter = () => {
    const location = useLocation();
    const [RouteList, setRouteList] = useState();
    // useEffect(() => {
    //     setRouteList(routeList);
    // }, [routeList]);
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
                <ProtectedRoute path="/" exact component={Home}/>
                {routeList.map((item, i) => {
                    return <ProtectedRoute path={`${item.path}`} exact component={item.component} key={i} />
                })}
                <ProtectedRoute path="*" exact component={PageNotFound} openPage />
            </Switch>
        </AnimatePresence>
    )
}