(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ngxMatomo = global.ngxMatomo || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service for injecting the Matomo tracker in the application.
 *
 * @export
 */
var MatomoInjector = (function () {
    /**
     * Creates an instance of MatomoInjector.
     *
     * @memberof MatomoInjector
     */
    function MatomoInjector() {
        window["_paq"] = window["_paq"] || [];
    }
    /**
     * Injects the Matomo tracker in the DOM.
     *
     * @param url: URL of the Matomo instance to connect to.
     * @param id : SiteId for this application/site.
     * @param skipTrackingInitialPageView: Optional boolean which, if true, will prevent tracking the initial page as part of init
     * @memberof MatomoInjector
     */
    /**
     * Injects the Matomo tracker in the DOM.
     *
     * \@memberof MatomoInjector
     * @param {?} url
     * @param {?} id : SiteId for this application/site.
     * @param {?=} skipTrackingInitialPageView
     * @return {?}
     */
    MatomoInjector.prototype.init = /**
     * Injects the Matomo tracker in the DOM.
     *
     * \@memberof MatomoInjector
     * @param {?} url
     * @param {?} id : SiteId for this application/site.
     * @param {?=} skipTrackingInitialPageView
     * @return {?}
     */
    function (url, id, skipTrackingInitialPageView) {
        if (!skipTrackingInitialPageView) {
            window["_paq"].push(['trackPageView']);
        }
        window["_paq"].push(['enableLinkTracking']);
        (function () {
            var /** @type {?} */ u = url;
            window["_paq"].push(['setTrackerUrl', u + 'piwik.php']);
            window["_paq"].push(['setSiteId', id.toString()]);
            var /** @type {?} */ d = document, /** @type {?} */
            g = d.createElement('script'), /** @type {?} */
            s = d.getElementsByTagName('script')[0];
            g.type = 'text/javascript';
            g.async = true;
            g.defer = true;
            g.src = u + 'piwik.js';
            s.parentNode.insertBefore(g, s);
        })();
    };
    MatomoInjector.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    MatomoInjector.ctorParameters = function () { return []; };
    return MatomoInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Wrapper for functions available for the Matomo Javascript tracker.
 *
 * @export
 */
var MatomoTracker = (function () {
    /**
     * Creates an instance of MatomoTracker.
     *
     * @memberof MatomoTracker
     */
    function MatomoTracker() {
        if (typeof window["_paq"] === 'undefined') {
            console.warn('Matomo has not yet been initialized! (Did you forget to inject it?)');
        }
    }
    /**
     * Logs an event with an event category (Videos, Music, Games...), an event action (Play, Pause, Duration,
     * Add Playlist, Downloaded, Clicked...), and an optional event name and optional numeric value.
     *
     * @param category
     * @param action
     * @param [name]
     * @param [value]
     * @memberof MatomoTracker
     */
    /**
     * Logs an event with an event category (Videos, Music, Games...), an event action (Play, Pause, Duration,
     * Add Playlist, Downloaded, Clicked...), and an optional event name and optional numeric value.
     *
     * \@memberof MatomoTracker
     * @param {?} category
     * @param {?} action
     * @param {?=} name
     * @param {?=} value
     * @return {?}
     */
    MatomoTracker.prototype.trackEvent = /**
     * Logs an event with an event category (Videos, Music, Games...), an event action (Play, Pause, Duration,
     * Add Playlist, Downloaded, Clicked...), and an optional event name and optional numeric value.
     *
     * \@memberof MatomoTracker
     * @param {?} category
     * @param {?} action
     * @param {?=} name
     * @param {?=} value
     * @return {?}
     */
    function (category, action, name, value) {
        try {
            var /** @type {?} */ args = [category, action];
            if (!!name) {
                args.push(name);
            }
            if (typeof value === 'number') {
                args.push(value);
            }
            window["_paq"].push(['trackEvent'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Logs a visit to this page.
     *
     * @param [customTitle]
     * @memberof MatomoTracker
     */
    /**
     * Logs a visit to this page.
     *
     * \@memberof MatomoTracker
     * @param {?=} customTitle
     * @return {?}
     */
    MatomoTracker.prototype.trackPageView = /**
     * Logs a visit to this page.
     *
     * \@memberof MatomoTracker
     * @param {?=} customTitle
     * @return {?}
     */
    function (customTitle) {
        try {
            var /** @type {?} */ args = [];
            if (!!customTitle) {
                args.push(customTitle);
            }
            window["_paq"].push(['trackPageView'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Logs an internal site search for a specific keyword, in an optional category,
     * specifying the optional count of search results in the page.
     *
     * @param keyword
     * @param [category]
     * @param [resultsCount]
     * @memberof MatomoTracker
     */
    /**
     * Logs an internal site search for a specific keyword, in an optional category,
     * specifying the optional count of search results in the page.
     *
     * \@memberof MatomoTracker
     * @param {?} keyword
     * @param {?=} category
     * @param {?=} resultsCount
     * @return {?}
     */
    MatomoTracker.prototype.trackSiteSearch = /**
     * Logs an internal site search for a specific keyword, in an optional category,
     * specifying the optional count of search results in the page.
     *
     * \@memberof MatomoTracker
     * @param {?} keyword
     * @param {?=} category
     * @param {?=} resultsCount
     * @return {?}
     */
    function (keyword, category, resultsCount) {
        try {
            var /** @type {?} */ args = [keyword];
            if (!!category) {
                args.push(category);
            }
            if (typeof resultsCount === 'number') {
                args.push(resultsCount);
            }
            window["_paq"].push(['trackSiteSearch'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
     *
     * @param idGoal
     * @param [customRevenue]
     * @memberof MatomoTracker
     */
    /**
     * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
     *
     * \@memberof MatomoTracker
     * @param {?} idGoal
     * @param {?=} customRevenue
     * @return {?}
     */
    MatomoTracker.prototype.trackGoal = /**
     * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
     *
     * \@memberof MatomoTracker
     * @param {?} idGoal
     * @param {?=} customRevenue
     * @return {?}
     */
    function (idGoal, customRevenue) {
        try {
            var /** @type {?} */ args = [idGoal];
            if (typeof customRevenue === 'number') {
                args.push(customRevenue);
            }
            window["_paq"].push(['trackGoal'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Manually logs a click from your own code.
     *
     * @param url: is the full URL which is to be tracked as a click.
     * @param linkType: can either be 'link' for an outlink or 'download' for a download.
     * @memberof MatomoTracker
     */
    /**
     * Manually logs a click from your own code.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @param {?} linkType
     * @return {?}
     */
    MatomoTracker.prototype.trackLink = /**
     * Manually logs a click from your own code.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @param {?} linkType
     * @return {?}
     */
    function (url, linkType) {
        try {
            var /** @type {?} */ args = [url, linkType];
            window["_paq"].push(['trackLink'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
     *
     * @memberof MatomoTracker
     */
    /**
     * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.trackAllContentImpressions = /**
     * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        try {
            window["_paq"].push(['trackAllContentImpressions']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Scans the entire DOM for all content blocks as soon as the page is loaded.
     * It tracks an impression only if a content block is actually visible.
     *
     * @param checkOnScroll
     * @param timeIntervalInMs
     * @memberof MatomoTracker
     */
    /**
     * Scans the entire DOM for all content blocks as soon as the page is loaded.
     * It tracks an impression only if a content block is actually visible.
     *
     * \@memberof MatomoTracker
     * @param {?} checkOnScroll
     * @param {?} timeIntervalInMs
     * @return {?}
     */
    MatomoTracker.prototype.trackVisibleContentImpressions = /**
     * Scans the entire DOM for all content blocks as soon as the page is loaded.
     * It tracks an impression only if a content block is actually visible.
     *
     * \@memberof MatomoTracker
     * @param {?} checkOnScroll
     * @param {?} timeIntervalInMs
     * @return {?}
     */
    function (checkOnScroll, timeIntervalInMs) {
        try {
            var /** @type {?} */ args = [checkOnScroll, timeIntervalInMs];
            window["_paq"].push(['trackVisibleContentImpressions'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Scans the given DOM node and its children for content blocks and tracks an impression for them
     * if no impression was already tracked for it.
     *
     * @param domNode
     * @memberof MatomoTracker
     */
    /**
     * Scans the given DOM node and its children for content blocks and tracks an impression for them
     * if no impression was already tracked for it.
     *
     * \@memberof MatomoTracker
     * @param {?} domNode
     * @return {?}
     */
    MatomoTracker.prototype.trackContentImpressionsWithinNode = /**
     * Scans the given DOM node and its children for content blocks and tracks an impression for them
     * if no impression was already tracked for it.
     *
     * \@memberof MatomoTracker
     * @param {?} domNode
     * @return {?}
     */
    function (domNode) {
        try {
            var /** @type {?} */ args = [domNode];
            window["_paq"].push(['trackContentImpressionsWithinNode'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Tracks an interaction with the given DOM node / content block.
     *
     * @param domNode
     * @param contentInteraction
     * @memberof MatomoTracker
     */
    /**
     * Tracks an interaction with the given DOM node / content block.
     *
     * \@memberof MatomoTracker
     * @param {?} domNode
     * @param {?} contentInteraction
     * @return {?}
     */
    MatomoTracker.prototype.trackContentInteractionNode = /**
     * Tracks an interaction with the given DOM node / content block.
     *
     * \@memberof MatomoTracker
     * @param {?} domNode
     * @param {?} contentInteraction
     * @return {?}
     */
    function (domNode, contentInteraction) {
        try {
            var /** @type {?} */ args = [domNode, contentInteraction];
            window["_paq"].push(['trackContentInteractionNode'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Tracks a content impression using the specified values.
     *
     * @param contentName
     * @param contentPiece
     * @param contentTarget
     * @memberof MatomoTracker
     */
    /**
     * Tracks a content impression using the specified values.
     *
     * \@memberof MatomoTracker
     * @param {?} contentName
     * @param {?} contentPiece
     * @param {?} contentTarget
     * @return {?}
     */
    MatomoTracker.prototype.trackContentImpression = /**
     * Tracks a content impression using the specified values.
     *
     * \@memberof MatomoTracker
     * @param {?} contentName
     * @param {?} contentPiece
     * @param {?} contentTarget
     * @return {?}
     */
    function (contentName, contentPiece, contentTarget) {
        try {
            var /** @type {?} */ args = [contentName, contentPiece, contentTarget];
            window["_paq"].push(['trackContentImpression'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Tracks a content interaction using the specified values.
     *
     * @param contentInteraction
     * @param contentName
     * @param contentPiece
     * @param contentTarget
     * @memberof MatomoTracker
     */
    /**
     * Tracks a content interaction using the specified values.
     *
     * \@memberof MatomoTracker
     * @param {?} contentInteraction
     * @param {?} contentName
     * @param {?} contentPiece
     * @param {?} contentTarget
     * @return {?}
     */
    MatomoTracker.prototype.trackContentInteraction = /**
     * Tracks a content interaction using the specified values.
     *
     * \@memberof MatomoTracker
     * @param {?} contentInteraction
     * @param {?} contentName
     * @param {?} contentPiece
     * @param {?} contentTarget
     * @return {?}
     */
    function (contentInteraction, contentName, contentPiece, contentTarget) {
        try {
            var /** @type {?} */ args = [contentInteraction, contentName, contentPiece, contentTarget];
            window["_paq"].push(['trackContentInteraction'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Logs all found content blocks within a page to the console. This is useful to debug / test content tracking.
     *
     * @memberof MatomoTracker
     */
    /**
     * Logs all found content blocks within a page to the console. This is useful to debug / test content tracking.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.logAllContentBlocksOnPage = /**
     * Logs all found content blocks within a page to the console. This is useful to debug / test content tracking.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        try {
            window["_paq"].push(['logAllContentBlocksOnPage']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Installs link tracking on all applicable link elements.
     * Set the enable parameter to true to use pseudo click-handler (treat middle click and open contextmenu as left click).
     * A right click (or any click that opens the context menu) on a link will be tracked as clicked even if "Open in new tab"
     * is not selected. If "false" (default), nothing will be tracked on open context menu or middle click.
     *
     * @param enable
     * @memberof MatomoTracker
     */
    /**
     * Installs link tracking on all applicable link elements.
     * Set the enable parameter to true to use pseudo click-handler (treat middle click and open contextmenu as left click).
     * A right click (or any click that opens the context menu) on a link will be tracked as clicked even if "Open in new tab"
     * is not selected. If "false" (default), nothing will be tracked on open context menu or middle click.
     *
     * \@memberof MatomoTracker
     * @param {?} enable
     * @return {?}
     */
    MatomoTracker.prototype.enableLinkTracking = /**
     * Installs link tracking on all applicable link elements.
     * Set the enable parameter to true to use pseudo click-handler (treat middle click and open contextmenu as left click).
     * A right click (or any click that opens the context menu) on a link will be tracked as clicked even if "Open in new tab"
     * is not selected. If "false" (default), nothing will be tracked on open context menu or middle click.
     *
     * \@memberof MatomoTracker
     * @param {?} enable
     * @return {?}
     */
    function (enable) {
        try {
            var /** @type {?} */ args = [enable];
            window["_paq"].push(['enableLinkTracking'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Install a Heart beat timer that will regularly send requests to Matomo in order to better measure the time spent on the page.
     * These requests will be sent only when the user is actively viewing the page( when the tab is active and in focus).
     * These requests will not track additional actions or pageviews.
     * By default, delayInSeconds is set to 15 seconds.
     *
     * @param delayInSeconds
     * @memberof MatomoTracker
     */
    /**
     * Install a Heart beat timer that will regularly send requests to Matomo in order to better measure the time spent on the page.
     * These requests will be sent only when the user is actively viewing the page( when the tab is active and in focus).
     * These requests will not track additional actions or pageviews.
     * By default, delayInSeconds is set to 15 seconds.
     *
     * \@memberof MatomoTracker
     * @param {?} delayInSeconds
     * @return {?}
     */
    MatomoTracker.prototype.enableHeartBeatTimer = /**
     * Install a Heart beat timer that will regularly send requests to Matomo in order to better measure the time spent on the page.
     * These requests will be sent only when the user is actively viewing the page( when the tab is active and in focus).
     * These requests will not track additional actions or pageviews.
     * By default, delayInSeconds is set to 15 seconds.
     *
     * \@memberof MatomoTracker
     * @param {?} delayInSeconds
     * @return {?}
     */
    function (delayInSeconds) {
        try {
            var /** @type {?} */ args = [delayInSeconds];
            window["_paq"].push(['enableHeartBeatTimer'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Enables cross domain linking. By default, the visitor ID that identifies a unique visitor is stored in the browser's
     * first party cookies. This means the cookie can only be accessed by pages on the same domain. If you own multiple domains and
     * would like to track all the actions and pageviews of a specific visitor into the same visit, you may enable cross domain
     * linking (learn more) . Whenever a user clicks on a link it will append a URL parameter pk_vid to the clicked URL which forwards
     * the current visitor ID value to the page of the different domain.
     *
     * @memberof MatomoTracker
     */
    /**
     * Enables cross domain linking. By default, the visitor ID that identifies a unique visitor is stored in the browser's
     * first party cookies. This means the cookie can only be accessed by pages on the same domain. If you own multiple domains and
     * would like to track all the actions and pageviews of a specific visitor into the same visit, you may enable cross domain
     * linking (learn more) . Whenever a user clicks on a link it will append a URL parameter pk_vid to the clicked URL which forwards
     * the current visitor ID value to the page of the different domain.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.enableCrossDomainLinking = /**
     * Enables cross domain linking. By default, the visitor ID that identifies a unique visitor is stored in the browser's
     * first party cookies. This means the cookie can only be accessed by pages on the same domain. If you own multiple domains and
     * would like to track all the actions and pageviews of a specific visitor into the same visit, you may enable cross domain
     * linking (learn more) . Whenever a user clicks on a link it will append a URL parameter pk_vid to the clicked URL which forwards
     * the current visitor ID value to the page of the different domain.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        try {
            window["_paq"].push(['enableCrossDomainLinking']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
     * a 180 seconds timeout window.
     *
     * @param timeout
     * @memberof MatomoTracker
     */
    /**
     * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
     * a 180 seconds timeout window.
     *
     * \@memberof MatomoTracker
     * @param {?} timeout
     * @return {?}
     */
    MatomoTracker.prototype.setCrossDomainLinkingTimeout = /**
     * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
     * a 180 seconds timeout window.
     *
     * \@memberof MatomoTracker
     * @param {?} timeout
     * @return {?}
     */
    function (timeout) {
        try {
            var /** @type {?} */ args = [timeout];
            window["_paq"].push(['setCrossDomainLinkingTimeout'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Overrides document.title
     *
     * @param title
     * @memberof MatomoTracker
     */
    /**
     * Overrides document.title
     *
     * \@memberof MatomoTracker
     * @param {?} title
     * @return {?}
     */
    MatomoTracker.prototype.setDocumentTitle = /**
     * Overrides document.title
     *
     * \@memberof MatomoTracker
     * @param {?} title
     * @return {?}
     */
    function (title) {
        try {
            var /** @type {?} */ args = [title];
            window["_paq"].push(['setDocumentTitle'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets array of hostnames or domains to be treated as local.
     * For wildcard subdomains, you can use: setDomains('.example.com'); or setDomains('*.example.com');.
     * You can also specify a path along a domain: setDomains('*.example.com/subsite1');
     *
     * @param domains
     * @memberof MatomoTracker
     */
    /**
     * Sets array of hostnames or domains to be treated as local.
     * For wildcard subdomains, you can use: setDomains('.example.com'); or setDomains('*.example.com');.
     * You can also specify a path along a domain: setDomains('*.example.com/subsite1');
     *
     * \@memberof MatomoTracker
     * @param {?} domains
     * @return {?}
     */
    MatomoTracker.prototype.setDomains = /**
     * Sets array of hostnames or domains to be treated as local.
     * For wildcard subdomains, you can use: setDomains('.example.com'); or setDomains('*.example.com');.
     * You can also specify a path along a domain: setDomains('*.example.com/subsite1');
     *
     * \@memberof MatomoTracker
     * @param {?} domains
     * @return {?}
     */
    function (domains) {
        try {
            var /** @type {?} */ args = [domains];
            window["_paq"].push(['setDomains'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Override the page's reported URL.
     *
     * @param url
     * @memberof MatomoTracker
     */
    /**
     * Override the page's reported URL.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    MatomoTracker.prototype.setCustomUrl = /**
     * Override the page's reported URL.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    function (url) {
        try {
            var /** @type {?} */ args = [url];
            window["_paq"].push(['setCustomUrl'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Overrides the detected Http-Referer.
     *
     * @param url
     * @memberof MatomoTracker
     */
    /**
     * Overrides the detected Http-Referer.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    MatomoTracker.prototype.setReferrerUrl = /**
     * Overrides the detected Http-Referer.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    function (url) {
        try {
            var /** @type {?} */ args = [url];
            window["_paq"].push(['setReferrerUrl'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Specifies the website ID.
     * Redundant: can be specified in getTracker() constructor.
     *
     * @param siteId
     * @memberof MatomoTracker
     */
    /**
     * Specifies the website ID.
     * Redundant: can be specified in getTracker() constructor.
     *
     * \@memberof MatomoTracker
     * @param {?} siteId
     * @return {?}
     */
    MatomoTracker.prototype.setSiteId = /**
     * Specifies the website ID.
     * Redundant: can be specified in getTracker() constructor.
     *
     * \@memberof MatomoTracker
     * @param {?} siteId
     * @return {?}
     */
    function (siteId) {
        try {
            var /** @type {?} */ args = [siteId];
            window["_paq"].push(['setSiteId'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Specify the Matomo HTTP API URL endpoint. Points to the root directory of piwik,
     * e.g. http://piwik.example.org/ or https://example.org/piwik/.
     * This function is only useful when the 'Overlay' report is not working.
     * By default, you do not need to use this function.
     *
     * @param url
     * @memberof MatomoTracker
     */
    /**
     * Specify the Matomo HTTP API URL endpoint. Points to the root directory of piwik,
     * e.g. http://piwik.example.org/ or https://example.org/piwik/.
     * This function is only useful when the 'Overlay' report is not working.
     * By default, you do not need to use this function.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    MatomoTracker.prototype.setApiUrl = /**
     * Specify the Matomo HTTP API URL endpoint. Points to the root directory of piwik,
     * e.g. http://piwik.example.org/ or https://example.org/piwik/.
     * This function is only useful when the 'Overlay' report is not working.
     * By default, you do not need to use this function.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    function (url) {
        try {
            var /** @type {?} */ args = [url];
            window["_paq"].push(['setApiUrl'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Specifies the Matomo server URL.
     * Redundant: can be specified in getTracker() constructor.
     *
     * @param url
     * @memberof MatomoTracker
     */
    /**
     * Specifies the Matomo server URL.
     * Redundant: can be specified in getTracker() constructor.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    MatomoTracker.prototype.setTrackerUrl = /**
     * Specifies the Matomo server URL.
     * Redundant: can be specified in getTracker() constructor.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    function (url) {
        try {
            var /** @type {?} */ args = [url];
            window["_paq"].push(['setTrackerUrl'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Returns the Matomo server URL.
     *
     * @memberof MatomoTracker
     */
    /**
     * Returns the Matomo server URL.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.getPiwikUrl = /**
     * Returns the Matomo server URL.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getPiwikUrl());
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * Returns the current url of the page that is currently being visited.
     * If a custom URL was set before calling this method, the custom URL will be returned.
     *
     * @memberof MatomoTracker
     */
    /**
     * Returns the current url of the page that is currently being visited.
     * If a custom URL was set before calling this method, the custom URL will be returned.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.getCurrentUrl = /**
     * Returns the current url of the page that is currently being visited.
     * If a custom URL was set before calling this method, the custom URL will be returned.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getCurrentUrl());
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * Sets classes to be treated as downloads (in addition to piwik_download).
     *
     * @param classes
     * @memberof MatomoTracker
     */
    /**
     * Sets classes to be treated as downloads (in addition to piwik_download).
     *
     * \@memberof MatomoTracker
     * @param {?} classes
     * @return {?}
     */
    MatomoTracker.prototype.setDownloadClasses = /**
     * Sets classes to be treated as downloads (in addition to piwik_download).
     *
     * \@memberof MatomoTracker
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        try {
            var /** @type {?} */ args = [classes];
            window["_paq"].push(['setDownloadClasses'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets list of file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * @param extensions
     * @memberof MatomoTracker
     */
    /**
     * Sets list of file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * \@memberof MatomoTracker
     * @param {?} extensions
     * @return {?}
     */
    MatomoTracker.prototype.setDownloadExtensions = /**
     * Sets list of file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * \@memberof MatomoTracker
     * @param {?} extensions
     * @return {?}
     */
    function (extensions) {
        try {
            var /** @type {?} */ args = [extensions];
            window["_paq"].push(['setDownloadClasses'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets additional file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * @param extensions
     * @memberof MatomoTracker
     */
    /**
     * Sets additional file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * \@memberof MatomoTracker
     * @param {?} extensions
     * @return {?}
     */
    MatomoTracker.prototype.addDownloadExtensions = /**
     * Sets additional file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * \@memberof MatomoTracker
     * @param {?} extensions
     * @return {?}
     */
    function (extensions) {
        try {
            var /** @type {?} */ args = [extensions];
            window["_paq"].push(['setDownloadClasses'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets file extensions to be removed from the list of download file extensions.
     * Example: 'doc' or['doc', 'xls'].
     *
     * @param extensions
     * @memberof MatomoTracker
     */
    /**
     * Sets file extensions to be removed from the list of download file extensions.
     * Example: 'doc' or['doc', 'xls'].
     *
     * \@memberof MatomoTracker
     * @param {?} extensions
     * @return {?}
     */
    MatomoTracker.prototype.removeDownloadExtensions = /**
     * Sets file extensions to be removed from the list of download file extensions.
     * Example: 'doc' or['doc', 'xls'].
     *
     * \@memberof MatomoTracker
     * @param {?} extensions
     * @return {?}
     */
    function (extensions) {
        try {
            var /** @type {?} */ args = [extensions];
            window["_paq"].push(['setDownloadClasses'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets classes to be ignored if present in link (in addition to piwik_ignore).
     *
     * @param classes
     * @memberof MatomoTracker
     */
    /**
     * Sets classes to be ignored if present in link (in addition to piwik_ignore).
     *
     * \@memberof MatomoTracker
     * @param {?} classes
     * @return {?}
     */
    MatomoTracker.prototype.setIgnoreClasses = /**
     * Sets classes to be ignored if present in link (in addition to piwik_ignore).
     *
     * \@memberof MatomoTracker
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        try {
            var /** @type {?} */ args = [classes];
            window["_paq"].push(['setDownloadClasses'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Set classes to be treated as outlinks (in addition to piwik_link).
     *
     * @param classes
     * @memberof MatomoTracker
     */
    /**
     * Set classes to be treated as outlinks (in addition to piwik_link).
     *
     * \@memberof MatomoTracker
     * @param {?} classes
     * @return {?}
     */
    MatomoTracker.prototype.setLinkClasses = /**
     * Set classes to be treated as outlinks (in addition to piwik_link).
     *
     * \@memberof MatomoTracker
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        try {
            var /** @type {?} */ args = [classes];
            window["_paq"].push(['setDownloadClasses'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Set delay for link tracking (in milliseconds).
     *
     * @param delay
     * @memberof MatomoTracker
     */
    /**
     * Set delay for link tracking (in milliseconds).
     *
     * \@memberof MatomoTracker
     * @param {?} delay
     * @return {?}
     */
    MatomoTracker.prototype.setLinkTrackingTimer = /**
     * Set delay for link tracking (in milliseconds).
     *
     * \@memberof MatomoTracker
     * @param {?} delay
     * @return {?}
     */
    function (delay) {
        try {
            var /** @type {?} */ args = [delay];
            window["_paq"].push(['setLinkTrackingTimer'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Returns delay for link tracking (in milliseconds).
     *
     * @memberof MatomoTracker
     */
    /**
     * Returns delay for link tracking (in milliseconds).
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.getLinkTrackingTimer = /**
     * Returns delay for link tracking (in milliseconds).
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getLinkTrackingTimer());
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * Set to true to not record the hash tag (anchor) portion of URLs
     *
     * @param value
     * @memberof MatomoTracker
     */
    /**
     * Set to true to not record the hash tag (anchor) portion of URLs
     *
     * \@memberof MatomoTracker
     * @param {?} value
     * @return {?}
     */
    MatomoTracker.prototype.discardHashTag = /**
     * Set to true to not record the hash tag (anchor) portion of URLs
     *
     * \@memberof MatomoTracker
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            var /** @type {?} */ args = [value];
            window["_paq"].push(['discardHashTag'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
     * the page. You may overwrite the value by specifying a milliseconds value here.
     *
     * @param generationTime
     * @memberof MatomoTracker
     */
    /**
     * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
     * the page. You may overwrite the value by specifying a milliseconds value here.
     *
     * \@memberof MatomoTracker
     * @param {?} generationTime
     * @return {?}
     */
    MatomoTracker.prototype.setGenerationTimeMs = /**
     * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
     * the page. You may overwrite the value by specifying a milliseconds value here.
     *
     * \@memberof MatomoTracker
     * @param {?} generationTime
     * @return {?}
     */
    function (generationTime) {
        try {
            var /** @type {?} */ args = [generationTime];
            window["_paq"].push(['setGenerationTimeMs'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Appends a custom string to the end of the HTTP request to piwik.php?
     *
     * @param appendToUrl
     * @memberof MatomoTracker
     */
    /**
     * Appends a custom string to the end of the HTTP request to piwik.php?
     *
     * \@memberof MatomoTracker
     * @param {?} appendToUrl
     * @return {?}
     */
    MatomoTracker.prototype.appendToTrackingUrl = /**
     * Appends a custom string to the end of the HTTP request to piwik.php?
     *
     * \@memberof MatomoTracker
     * @param {?} appendToUrl
     * @return {?}
     */
    function (appendToUrl) {
        try {
            var /** @type {?} */ args = [appendToUrl];
            window["_paq"].push(['appendToTrackingUrl'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Set to true to not track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
     *
     * @param doNotTrack
     * @memberof MatomoTracker
     */
    /**
     * Set to true to not track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
     *
     * \@memberof MatomoTracker
     * @param {?} doNotTrack
     * @return {?}
     */
    MatomoTracker.prototype.setDoNotTrack = /**
     * Set to true to not track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
     *
     * \@memberof MatomoTracker
     * @param {?} doNotTrack
     * @return {?}
     */
    function (doNotTrack) {
        try {
            var /** @type {?} */ args = [doNotTrack];
            window["_paq"].push(['setDoNotTrack'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
     *
     * @memberof MatomoTracker
     */
    /**
     * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.killFrame = /**
     * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        try {
            window["_paq"].push(['killFrame']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Forces the browser load the live URL if the tracked web page is loaded from a local file (e.g., saved to someone's desktop).
     *
     * @param url
     * @memberof MatomoTracker
     */
    /**
     * Forces the browser load the live URL if the tracked web page is loaded from a local file (e.g., saved to someone's desktop).
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    MatomoTracker.prototype.redirectFile = /**
     * Forces the browser load the live URL if the tracked web page is loaded from a local file (e.g., saved to someone's desktop).
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    function (url) {
        try {
            var /** @type {?} */ args = [url];
            window["_paq"].push(['redirectFile'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Records how long the page has been viewed if the minimumVisitLength (in seconds) is attained;
     * the heartBeatDelay determines how frequently to update the server
     *
     * @param minimumVisitLength
     * @param heartBeatDelay
     * @memberof MatomoTracker
     */
    /**
     * Records how long the page has been viewed if the minimumVisitLength (in seconds) is attained;
     * the heartBeatDelay determines how frequently to update the server
     *
     * \@memberof MatomoTracker
     * @param {?} minimumVisitLength
     * @param {?} heartBeatDelay
     * @return {?}
     */
    MatomoTracker.prototype.setHeartBeatTimer = /**
     * Records how long the page has been viewed if the minimumVisitLength (in seconds) is attained;
     * the heartBeatDelay determines how frequently to update the server
     *
     * \@memberof MatomoTracker
     * @param {?} minimumVisitLength
     * @param {?} heartBeatDelay
     * @return {?}
     */
    function (minimumVisitLength, heartBeatDelay) {
        try {
            var /** @type {?} */ args = [minimumVisitLength, heartBeatDelay];
            window["_paq"].push(['setHeartBeatTimer'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Returns the 16 characters ID for the visitor
     *
     * @memberof MatomoTracker
     */
    /**
     * Returns the 16 characters ID for the visitor
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.getVisitorId = /**
     * Returns the 16 characters ID for the visitor
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getVisitorId());
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * Returns the visitor cookie contents in an array
     *
     * @memberof MatomoTracker
     */
    /**
     * Returns the visitor cookie contents in an array
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.getVisitorInfo = /**
     * Returns the visitor cookie contents in an array
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getVisitorInfo());
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * Returns the visitor attribution array (Referer information and / or Campaign name & keyword).
     * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
     * used when a user triggers a goal conversion.
     *
     * @memberof MatomoTracker
     */
    /**
     * Returns the visitor attribution array (Referer information and / or Campaign name & keyword).
     * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
     * used when a user triggers a goal conversion.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.getAttributionInfo = /**
     * Returns the visitor attribution array (Referer information and / or Campaign name & keyword).
     * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
     * used when a user triggers a goal conversion.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getAttributionInfo());
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * Returns the attribution campaign name.
     *
     * @memberof MatomoTracker
     */
    /**
     * Returns the attribution campaign name.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.getAttributionCampaignName = /**
     * Returns the attribution campaign name.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getAttributionCampaignName());
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * Returns the attribution campaign keyword.
     *
     * @memberof MatomoTracker
     */
    /**
     * Returns the attribution campaign keyword.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.getAttributionCampaignKeyword = /**
     * Returns the attribution campaign keyword.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getAttributionCampaignKeyword());
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * Returns the attribution referrer timestamp.
     *
     * @memberof MatomoTracker
     */
    /**
     * Returns the attribution referrer timestamp.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.getAttributionReferrerTimestamp = /**
     * Returns the attribution referrer timestamp.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getAttributionReferrerTimestamp());
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * Returns the attribution referrer URL.
     *
     * @memberof MatomoTracker
     */
    /**
     * Returns the attribution referrer URL.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.getAttributionReferrerUrl = /**
     * Returns the attribution referrer URL.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getAttributionReferrerUrl());
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     *  Returns the User ID string if it was set.
     *
     * @memberof MatomoTracker
     */
    /**
     *  Returns the User ID string if it was set.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.getUserId = /**
     *  Returns the User ID string if it was set.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getUserId());
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * Sets a User ID to this user (such as an email address or a username).
     *
     * @param userId
     * @memberof MatomoTracker
     */
    /**
     * Sets a User ID to this user (such as an email address or a username).
     *
     * \@memberof MatomoTracker
     * @param {?} userId
     * @return {?}
     */
    MatomoTracker.prototype.setUserId = /**
     * Sets a User ID to this user (such as an email address or a username).
     *
     * \@memberof MatomoTracker
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        try {
            var /** @type {?} */ args = [userId];
            window["_paq"].push(['setUserId'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Resets the User ID which also generates a new Visitor ID.
     *
     * @memberof MatomoTracker
     */
    /**
     * Resets the User ID which also generates a new Visitor ID.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.resetUserId = /**
     * Resets the User ID which also generates a new Visitor ID.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        try {
            window["_paq"].push(['resetUserId']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets a custom variable.
     *
     * @param index: Index, the number from 1 to 5 where this custom variable name is stored for the current page view
     * @param name: Name, the name of the variable, for example: Category, Sub-category, UserType
     * @param value: Value, for example: "Sports", "News", "World", "Business", etc.
     * @param scope: Scope of the custom variable, "page" means the custom variable applies to the current page view
     * @memberof MatomoTracker
     */
    /**
     * Sets a custom variable.
     *
     * \@memberof MatomoTracker
     * @param {?} index
     * @param {?} name
     * @param {?} value
     * @param {?} scope
     * @return {?}
     */
    MatomoTracker.prototype.setCustomVariable = /**
     * Sets a custom variable.
     *
     * \@memberof MatomoTracker
     * @param {?} index
     * @param {?} name
     * @param {?} value
     * @param {?} scope
     * @return {?}
     */
    function (index, name, value, scope) {
        try {
            var /** @type {?} */ args = [index, name, value, scope];
            window["_paq"].push(['setCustomVariable'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Deletes a custom variable.
     *
     * @param index
     * @param scope
     * @memberof MatomoTracker
     */
    /**
     * Deletes a custom variable.
     *
     * \@memberof MatomoTracker
     * @param {?} index
     * @param {?} scope
     * @return {?}
     */
    MatomoTracker.prototype.deleteCustomVariable = /**
     * Deletes a custom variable.
     *
     * \@memberof MatomoTracker
     * @param {?} index
     * @param {?} scope
     * @return {?}
     */
    function (index, scope) {
        try {
            var /** @type {?} */ args = [index, scope];
            window["_paq"].push(['deleteCustomVariable'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Retrieves a custom variable.
     *
     * @param index
     * @param scope
     * @memberof MatomoTracker
     */
    /**
     * Retrieves a custom variable.
     *
     * \@memberof MatomoTracker
     * @param {?} index
     * @param {?} scope
     * @return {?}
     */
    MatomoTracker.prototype.getCustomVariable = /**
     * Retrieves a custom variable.
     *
     * \@memberof MatomoTracker
     * @param {?} index
     * @param {?} scope
     * @return {?}
     */
    function (index, scope) {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getCustomVariable(index, scope));
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * When called then the Custom Variables of scope "visit" will be stored (persisted) in a first party cookie
     * for the duration of the visit. This is useful if you want to call getCustomVariable later in the visit.
     * (by default custom variables are not stored on the visitor's computer.)
     *
     * @memberof MatomoTracker
     */
    /**
     * When called then the Custom Variables of scope "visit" will be stored (persisted) in a first party cookie
     * for the duration of the visit. This is useful if you want to call getCustomVariable later in the visit.
     * (by default custom variables are not stored on the visitor's computer.)
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.storeCustomVariablesInCookie = /**
     * When called then the Custom Variables of scope "visit" will be stored (persisted) in a first party cookie
     * for the duration of the visit. This is useful if you want to call getCustomVariable later in the visit.
     * (by default custom variables are not stored on the visitor's computer.)
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        try {
            window["_paq"].push(['storeCustomVariablesInCookie']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId
     * @param customDimensionValue
     * @memberof MatomoTracker
     */
    /**
     * Sets a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * \@memberof MatomoTracker
     * @param {?} customDimensionId
     * @param {?} customDimensionValue
     * @return {?}
     */
    MatomoTracker.prototype.setCustomDimension = /**
     * Sets a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * \@memberof MatomoTracker
     * @param {?} customDimensionId
     * @param {?} customDimensionValue
     * @return {?}
     */
    function (customDimensionId, customDimensionValue) {
        try {
            var /** @type {?} */ args = [customDimensionId, customDimensionValue];
            window["_paq"].push(['setCustomDimension'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Deletes a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId
     * @memberof MatomoTracker
     */
    /**
     * Deletes a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * \@memberof MatomoTracker
     * @param {?} customDimensionId
     * @return {?}
     */
    MatomoTracker.prototype.deleteCustomDimension = /**
     * Deletes a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * \@memberof MatomoTracker
     * @param {?} customDimensionId
     * @return {?}
     */
    function (customDimensionId) {
        try {
            var /** @type {?} */ args = [customDimensionId];
            window["_paq"].push(['deleteCustomDimension'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Retrieve a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId
     * @memberof MatomoTracker
     */
    /**
     * Retrieve a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * \@memberof MatomoTracker
     * @param {?} customDimensionId
     * @return {?}
     */
    MatomoTracker.prototype.getCustomDimension = /**
     * Retrieve a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * \@memberof MatomoTracker
     * @param {?} customDimensionId
     * @return {?}
     */
    function (customDimensionId) {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.getCustomDimension(customDimensionId));
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * Sets campaign name parameter(s).
     *
     * @param name
     * @memberof MatomoTracker
     */
    /**
     * Sets campaign name parameter(s).
     *
     * \@memberof MatomoTracker
     * @param {?} name
     * @return {?}
     */
    MatomoTracker.prototype.setCampaignNameKey = /**
     * Sets campaign name parameter(s).
     *
     * \@memberof MatomoTracker
     * @param {?} name
     * @return {?}
     */
    function (name) {
        try {
            var /** @type {?} */ args = [name];
            window["_paq"].push(['setCampaignNameKey'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets campaign keyword parameter(s).
     *
     * @param keyword
     * @memberof MatomoTracker
     */
    /**
     * Sets campaign keyword parameter(s).
     *
     * \@memberof MatomoTracker
     * @param {?} keyword
     * @return {?}
     */
    MatomoTracker.prototype.setCampaignKeywordKey = /**
     * Sets campaign keyword parameter(s).
     *
     * \@memberof MatomoTracker
     * @param {?} keyword
     * @return {?}
     */
    function (keyword) {
        try {
            var /** @type {?} */ args = [keyword];
            window["_paq"].push(['setCampaignKeywordKey'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Set to true to attribute a conversion to the first referrer.
     * By default, conversion is attributed to the most recent referrer.
     *
     * @param conversionToFirstReferrer
     * @memberof MatomoTracker
     */
    /**
     * Set to true to attribute a conversion to the first referrer.
     * By default, conversion is attributed to the most recent referrer.
     *
     * \@memberof MatomoTracker
     * @param {?} conversionToFirstReferrer
     * @return {?}
     */
    MatomoTracker.prototype.setConversionAttributionFirstReferrer = /**
     * Set to true to attribute a conversion to the first referrer.
     * By default, conversion is attributed to the most recent referrer.
     *
     * \@memberof MatomoTracker
     * @param {?} conversionToFirstReferrer
     * @return {?}
     */
    function (conversionToFirstReferrer) {
        try {
            var /** @type {?} */ args = [conversionToFirstReferrer];
            window["_paq"].push(['setConversionAttributionFirstReferrer'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets the current page view as a product or category page view.
     * When you call setEcommerceView it must be followed by a call to trackPageView to record the product or category page view.
     *
     * @param productSKU
     * @param productName
     * @param categoryName
     * @param price
     * @memberof MatomoTracker
     */
    /**
     * Sets the current page view as a product or category page view.
     * When you call setEcommerceView it must be followed by a call to trackPageView to record the product or category page view.
     *
     * \@memberof MatomoTracker
     * @param {?} productSKU
     * @param {?} productName
     * @param {?} categoryName
     * @param {?} price
     * @return {?}
     */
    MatomoTracker.prototype.setEcommerceView = /**
     * Sets the current page view as a product or category page view.
     * When you call setEcommerceView it must be followed by a call to trackPageView to record the product or category page view.
     *
     * \@memberof MatomoTracker
     * @param {?} productSKU
     * @param {?} productName
     * @param {?} categoryName
     * @param {?} price
     * @return {?}
     */
    function (productSKU, productName, categoryName, price) {
        try {
            var /** @type {?} */ args = [productSKU, productName, categoryName, price];
            window["_paq"].push(['setEcommerceView'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Adds a product into the ecommerce order.Must be called for each product in the order.
     *
     * @param productSKU
     * @param [productName]
     * @param [productCategory]
     * @param [price]
     * @param [quantity]
     * @memberof MatomoTracker
     */
    /**
     * Adds a product into the ecommerce order.Must be called for each product in the order.
     *
     * \@memberof MatomoTracker
     * @param {?} productSKU
     * @param {?=} productName
     * @param {?=} productCategory
     * @param {?=} price
     * @param {?=} quantity
     * @return {?}
     */
    MatomoTracker.prototype.addEcommerceItem = /**
     * Adds a product into the ecommerce order.Must be called for each product in the order.
     *
     * \@memberof MatomoTracker
     * @param {?} productSKU
     * @param {?=} productName
     * @param {?=} productCategory
     * @param {?=} price
     * @param {?=} quantity
     * @return {?}
     */
    function (productSKU, productName, productCategory, price, quantity) {
        try {
            var /** @type {?} */ args = [productSKU];
            if (!!productName) {
                args.push(productName);
            }
            if (!!productCategory) {
                args.push(productCategory);
            }
            if (typeof price === 'number') {
                args.push(price);
            }
            if (typeof quantity === 'number') {
                args.push(quantity);
            }
            window["_paq"].push(['addEcommerceItem'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Tracks a shopping cart.Call this javascript function every time a user is adding, updating or deleting a product from the cart.
     *
     * @param grandTotal
     * @memberof MatomoTracker
     */
    /**
     * Tracks a shopping cart.Call this javascript function every time a user is adding, updating or deleting a product from the cart.
     *
     * \@memberof MatomoTracker
     * @param {?} grandTotal
     * @return {?}
     */
    MatomoTracker.prototype.trackEcommerceCartUpdate = /**
     * Tracks a shopping cart.Call this javascript function every time a user is adding, updating or deleting a product from the cart.
     *
     * \@memberof MatomoTracker
     * @param {?} grandTotal
     * @return {?}
     */
    function (grandTotal) {
        try {
            var /** @type {?} */ args = [grandTotal];
            window["_paq"].push(['trackEcommerceCartUpdate'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Tracks an Ecommerce order, including any ecommerce item previously added to the order.
     * orderId and grandTotal (ie.revenue) are required parameters.
     *
     * @param orderId
     * @param grandTotal
     * @param [subTotal]
     * @param [tax]
     * @param [shipping]
     * @param [discount]
     * @memberof MatomoTracker
     */
    /**
     * Tracks an Ecommerce order, including any ecommerce item previously added to the order.
     * orderId and grandTotal (ie.revenue) are required parameters.
     *
     * \@memberof MatomoTracker
     * @param {?} orderId
     * @param {?} grandTotal
     * @param {?=} subTotal
     * @param {?=} tax
     * @param {?=} shipping
     * @param {?=} discount
     * @return {?}
     */
    MatomoTracker.prototype.trackEcommerceOrder = /**
     * Tracks an Ecommerce order, including any ecommerce item previously added to the order.
     * orderId and grandTotal (ie.revenue) are required parameters.
     *
     * \@memberof MatomoTracker
     * @param {?} orderId
     * @param {?} grandTotal
     * @param {?=} subTotal
     * @param {?=} tax
     * @param {?=} shipping
     * @param {?=} discount
     * @return {?}
     */
    function (orderId, grandTotal, subTotal, tax, shipping, discount) {
        try {
            var /** @type {?} */ args = [orderId, grandTotal];
            if (typeof subTotal === 'number') {
                args.push(subTotal);
            }
            if (typeof tax === 'number') {
                args.push(tax);
            }
            if (typeof shipping === 'number') {
                args.push(shipping);
            }
            if (typeof discount === 'number') {
                args.push(discount);
            }
            window["_paq"].push(['trackEcommerceOrder'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Disables all first party cookies. Existing Matomo cookies for this websites will be deleted on the next page view.
     *
     * @memberof MatomoTracker
     */
    /**
     * Disables all first party cookies. Existing Matomo cookies for this websites will be deleted on the next page view.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.disableCookies = /**
     * Disables all first party cookies. Existing Matomo cookies for this websites will be deleted on the next page view.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        try {
            window["_paq"].push(['disableCookies']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Deletes the tracking cookies currently set (useful when creating new visits).
     *
     * @memberof MatomoTracker
     */
    /**
     * Deletes the tracking cookies currently set (useful when creating new visits).
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.deleteCookies = /**
     * Deletes the tracking cookies currently set (useful when creating new visits).
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        try {
            window["_paq"].push(['deleteCookies']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Returns whether cookies are enabled and supported by this browser.
     *
     * @memberof MatomoTracker
     */
    /**
     * Returns whether cookies are enabled and supported by this browser.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    MatomoTracker.prototype.hasCookies = /**
     * Returns whether cookies are enabled and supported by this browser.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    function () {
        return new Promise(function (resolve, reject) {
            try {
                window["_paq"].push([
                    function () {
                        resolve(this.hasCookies());
                    }
                ]);
            }
            catch (/** @type {?} */ e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    };
    /**
     * Sets the tracking cookie name prefix.
     * Default prefix is 'pk'.
     *
     * @param prefix
     * @memberof MatomoTracker
     */
    /**
     * Sets the tracking cookie name prefix.
     * Default prefix is 'pk'.
     *
     * \@memberof MatomoTracker
     * @param {?} prefix
     * @return {?}
     */
    MatomoTracker.prototype.setCookieNamePrefix = /**
     * Sets the tracking cookie name prefix.
     * Default prefix is 'pk'.
     *
     * \@memberof MatomoTracker
     * @param {?} prefix
     * @return {?}
     */
    function (prefix) {
        try {
            var /** @type {?} */ args = [prefix];
            window["_paq"].push(['setCookieNamePrefix'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets the domain of the tracking cookies.
     * Default is the document domain.
     * If your website can be visited at both www.example.com and example.com, you would use: '.example.com' or '*.example.com'.
     *
     * @param domain
     * @memberof MatomoTracker
     */
    /**
     * Sets the domain of the tracking cookies.
     * Default is the document domain.
     * If your website can be visited at both www.example.com and example.com, you would use: '.example.com' or '*.example.com'.
     *
     * \@memberof MatomoTracker
     * @param {?} domain
     * @return {?}
     */
    MatomoTracker.prototype.setCookieDomain = /**
     * Sets the domain of the tracking cookies.
     * Default is the document domain.
     * If your website can be visited at both www.example.com and example.com, you would use: '.example.com' or '*.example.com'.
     *
     * \@memberof MatomoTracker
     * @param {?} domain
     * @return {?}
     */
    function (domain) {
        try {
            var /** @type {?} */ args = [domain];
            window["_paq"].push(['setCookieDomain'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets the path of the tracking cookies.
     * Default is '/'.
     *
     * @param path
     * @memberof MatomoTracker
     */
    /**
     * Sets the path of the tracking cookies.
     * Default is '/'.
     *
     * \@memberof MatomoTracker
     * @param {?} path
     * @return {?}
     */
    MatomoTracker.prototype.setCookiePath = /**
     * Sets the path of the tracking cookies.
     * Default is '/'.
     *
     * \@memberof MatomoTracker
     * @param {?} path
     * @return {?}
     */
    function (path) {
        try {
            var /** @type {?} */ args = [path];
            window["_paq"].push(['setCookiePath'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Set to true to enable the Secure cookie flag on all first party cookies.This should be used when your website is only available
     * under HTTPS so that all tracking cookies are always sent over secure connection.
     *
     * @param secure
     * @memberof MatomoTracker
     */
    /**
     * Set to true to enable the Secure cookie flag on all first party cookies.This should be used when your website is only available
     * under HTTPS so that all tracking cookies are always sent over secure connection.
     *
     * \@memberof MatomoTracker
     * @param {?} secure
     * @return {?}
     */
    MatomoTracker.prototype.setSecureCookie = /**
     * Set to true to enable the Secure cookie flag on all first party cookies.This should be used when your website is only available
     * under HTTPS so that all tracking cookies are always sent over secure connection.
     *
     * \@memberof MatomoTracker
     * @param {?} secure
     * @return {?}
     */
    function (secure) {
        try {
            var /** @type {?} */ args = [secure];
            window["_paq"].push(['setSecureCookie'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets the visitor cookie timeout.
     * Default is 13 months.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    /**
     * Sets the visitor cookie timeout.
     * Default is 13 months.
     *
     * \@memberof MatomoTracker
     * @param {?} seconds
     * @return {?}
     */
    MatomoTracker.prototype.setVisitorCookieTimeout = /**
     * Sets the visitor cookie timeout.
     * Default is 13 months.
     *
     * \@memberof MatomoTracker
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) {
        try {
            var /** @type {?} */ args = [seconds];
            window["_paq"].push(['setVisitorCookieTimeout'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets the referral cookie timeout.
     * Default is 6 months.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    /**
     * Sets the referral cookie timeout.
     * Default is 6 months.
     *
     * \@memberof MatomoTracker
     * @param {?} seconds
     * @return {?}
     */
    MatomoTracker.prototype.setReferralCookieTimeout = /**
     * Sets the referral cookie timeout.
     * Default is 6 months.
     *
     * \@memberof MatomoTracker
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) {
        try {
            var /** @type {?} */ args = [seconds];
            window["_paq"].push(['setReferralCookieTimeout'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets the session cookie timeout.
     * Default is 30 minutes.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    /**
     * Sets the session cookie timeout.
     * Default is 30 minutes.
     *
     * \@memberof MatomoTracker
     * @param {?} seconds
     * @return {?}
     */
    MatomoTracker.prototype.setSessionCookieTimeout = /**
     * Sets the session cookie timeout.
     * Default is 30 minutes.
     *
     * \@memberof MatomoTracker
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) {
        try {
            var /** @type {?} */ args = [seconds];
            window["_paq"].push(['setSessionCookieTimeout'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     *  Adds a click listener to a specific link element. When clicked, Matomo will log the click automatically.
     *
     * @param element
     * @memberof MatomoTracker
     */
    /**
     *  Adds a click listener to a specific link element. When clicked, Matomo will log the click automatically.
     *
     * \@memberof MatomoTracker
     * @param {?} element
     * @return {?}
     */
    MatomoTracker.prototype.addListener = /**
     *  Adds a click listener to a specific link element. When clicked, Matomo will log the click automatically.
     *
     * \@memberof MatomoTracker
     * @param {?} element
     * @return {?}
     */
    function (element) {
        try {
            var /** @type {?} */ args = [element];
            window["_paq"].push(['addListener'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets the request method to either "GET" or "POST". (The default is "GET".)
     * To use the POST request method, either:
     * 1) the Matomo host is the same as the tracked website host (Matomo installed in the same domain as your tracked website), or
     * 2) if Matomo is not installed on the same host as your website, you need to enable CORS (Cross domain requests).
     *
     * @param method
     * @memberof MatomoTracker
     */
    /**
     * Sets the request method to either "GET" or "POST". (The default is "GET".)
     * To use the POST request method, either:
     * 1) the Matomo host is the same as the tracked website host (Matomo installed in the same domain as your tracked website), or
     * 2) if Matomo is not installed on the same host as your website, you need to enable CORS (Cross domain requests).
     *
     * \@memberof MatomoTracker
     * @param {?} method
     * @return {?}
     */
    MatomoTracker.prototype.setRequestMethod = /**
     * Sets the request method to either "GET" or "POST". (The default is "GET".)
     * To use the POST request method, either:
     * 1) the Matomo host is the same as the tracked website host (Matomo installed in the same domain as your tracked website), or
     * 2) if Matomo is not installed on the same host as your website, you need to enable CORS (Cross domain requests).
     *
     * \@memberof MatomoTracker
     * @param {?} method
     * @return {?}
     */
    function (method) {
        try {
            var /** @type {?} */ args = [method];
            window["_paq"].push(['setRequestMethod'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets a function that will process the request content.
     * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
     *
     * @param callback
     * @memberof MatomoTracker
     */
    /**
     * Sets a function that will process the request content.
     * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
     *
     * \@memberof MatomoTracker
     * @param {?} callback
     * @return {?}
     */
    MatomoTracker.prototype.setCustomRequestProcessing = /**
     * Sets a function that will process the request content.
     * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
     *
     * \@memberof MatomoTracker
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        try {
            var /** @type {?} */ args = [callback];
            window["_paq"].push(['setCustomRequestProcessing'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets request Content-Type header value.
     * Applicable when "POST" request method is used via setRequestMethod.
     *
     * @param contentType
     * @memberof MatomoTracker
     */
    /**
     * Sets request Content-Type header value.
     * Applicable when "POST" request method is used via setRequestMethod.
     *
     * \@memberof MatomoTracker
     * @param {?} contentType
     * @return {?}
     */
    MatomoTracker.prototype.setRequestContentType = /**
     * Sets request Content-Type header value.
     * Applicable when "POST" request method is used via setRequestMethod.
     *
     * \@memberof MatomoTracker
     * @param {?} contentType
     * @return {?}
     */
    function (contentType) {
        try {
            var /** @type {?} */ args = [contentType];
            window["_paq"].push(['setRequestContentType'].concat(args));
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    MatomoTracker.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    MatomoTracker.ctorParameters = function () { return []; };
    return MatomoTracker;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatomoModule = (function () {
    function MatomoModule() {
    }
    MatomoModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    providers: [MatomoInjector, MatomoTracker]
                },] },
    ];
    return MatomoModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

exports.MatomoInjector = MatomoInjector;
exports.MatomoTracker = MatomoTracker;
exports.MatomoModule = MatomoModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-matomo.umd.js.map
