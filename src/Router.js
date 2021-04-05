import React from 'react'
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
}
getRouteComponent(config.menuItems);
export const AppRouter = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
                <ProtectedRoute path="/" exact component={Home} />
                {routeList.map((item, i) => {
                    if (item.openPage)
                        return <ProtectedRoute path={`${item.path}`} url={item.path} exact component={item.component} key={i} openPage/>
                    else
                        return <ProtectedRoute path={item.path} url={item.path} exact component={item.component} key={i} />

                })}
                <ProtectedRoute path="*" exact component={PageNotFound} openPage />
            </Switch>
        </AnimatePresence>
    )
}