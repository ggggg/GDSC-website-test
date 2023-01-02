import React, { lazy } from 'react';
const Homepage = lazy(() => import("./Homepage"));
const ResourcesPage = lazy(() => import("./Resources"));
const ProjectPage = lazy(() => import("./Projects"));
const Events = lazy(() => import("./Events"));
const BrandResources = lazy(() => import("./BrandResources"));

/**
 * This file contains the list of pages that are available on the website.
 *  The first element of each array is the name of the page,
 *  the second is the path to the page,
 *  and the third is the component that is rendered.
 */
const pages = [["About", "/", <Homepage />],
["Resources", "/resources", <ResourcesPage />],
["Past Projects", "/past-projects", <ProjectPage />],
["Events", "/events", <Events />],
["Logo Download", "/brand-resources", <BrandResources />]];

export default pages;
