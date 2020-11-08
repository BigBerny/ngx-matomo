import { Injectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service for injecting the Matomo tracker in the application.
 *
 * @export
 */
class MatomoInjector {
    /**
     * Creates an instance of MatomoInjector.
     *
     * \@memberof MatomoInjector
     */
    constructor() {
        window["_paq"] = window["_paq"] || [];
    }
    /**
     * Injects the Matomo tracker in the DOM.
     *
     * \@memberof MatomoInjector
     * @param {?} url
     * @param {?} id : SiteId for this application/site.
     * @param {?=} skipTrackingInitialPageView
     * @return {?}
     */
    init(url, id, skipTrackingInitialPageView) {
        if (!skipTrackingInitialPageView) {
            window["_paq"].push(['trackPageView']);
        }
        window["_paq"].push(['enableLinkTracking']);
        (() => {
            const /** @type {?} */ u = url;
            window["_paq"].push(['setTrackerUrl', u + 'piwik.php']);
            window["_paq"].push(['setSiteId', id.toString()]);
            const /** @type {?} */ d = document, /** @type {?} */
            g = d.createElement('script'), /** @type {?} */
            s = d.getElementsByTagName('script')[0];
            g.type = 'text/javascript';
            g.async = true;
            g.defer = true;
            g.src = u + 'piwik.js';
            s.parentNode.insertBefore(g, s);
        })();
    }
}
MatomoInjector.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MatomoInjector.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Wrapper for functions available for the Matomo Javascript tracker.
 *
 * @export
 */
class MatomoTracker {
    /**
     * Creates an instance of MatomoTracker.
     *
     * \@memberof MatomoTracker
     */
    constructor() {
        if (typeof window["_paq"] === 'undefined') {
            console.warn('Matomo has not yet been initialized! (Did you forget to inject it?)');
        }
    }
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
    trackEvent(category, action, name, value) {
        try {
            const /** @type {?} */ args = [category, action];
            if (!!name) {
                args.push(name);
            }
            if (typeof value === 'number') {
                args.push(value);
            }
            window["_paq"].push(['trackEvent', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Logs a visit to this page.
     *
     * \@memberof MatomoTracker
     * @param {?=} customTitle
     * @return {?}
     */
    trackPageView(customTitle) {
        try {
            const /** @type {?} */ args = [];
            if (!!customTitle) {
                args.push(customTitle);
            }
            window["_paq"].push(['trackPageView', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
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
    trackSiteSearch(keyword, category, resultsCount) {
        try {
            const /** @type {?} */ args = [keyword];
            if (!!category) {
                args.push(category);
            }
            if (typeof resultsCount === 'number') {
                args.push(resultsCount);
            }
            window["_paq"].push(['trackSiteSearch', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
     *
     * \@memberof MatomoTracker
     * @param {?} idGoal
     * @param {?=} customRevenue
     * @return {?}
     */
    trackGoal(idGoal, customRevenue) {
        try {
            const /** @type {?} */ args = [idGoal];
            if (typeof customRevenue === 'number') {
                args.push(customRevenue);
            }
            window["_paq"].push(['trackGoal', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Manually logs a click from your own code.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @param {?} linkType
     * @return {?}
     */
    trackLink(url, linkType) {
        try {
            const /** @type {?} */ args = [url, linkType];
            window["_paq"].push(['trackLink', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    trackAllContentImpressions() {
        try {
            window["_paq"].push(['trackAllContentImpressions']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Scans the entire DOM for all content blocks as soon as the page is loaded.
     * It tracks an impression only if a content block is actually visible.
     *
     * \@memberof MatomoTracker
     * @param {?} checkOnScroll
     * @param {?} timeIntervalInMs
     * @return {?}
     */
    trackVisibleContentImpressions(checkOnScroll, timeIntervalInMs) {
        try {
            const /** @type {?} */ args = [checkOnScroll, timeIntervalInMs];
            window["_paq"].push(['trackVisibleContentImpressions', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Scans the given DOM node and its children for content blocks and tracks an impression for them
     * if no impression was already tracked for it.
     *
     * \@memberof MatomoTracker
     * @param {?} domNode
     * @return {?}
     */
    trackContentImpressionsWithinNode(domNode) {
        try {
            const /** @type {?} */ args = [domNode];
            window["_paq"].push(['trackContentImpressionsWithinNode', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Tracks an interaction with the given DOM node / content block.
     *
     * \@memberof MatomoTracker
     * @param {?} domNode
     * @param {?} contentInteraction
     * @return {?}
     */
    trackContentInteractionNode(domNode, contentInteraction) {
        try {
            const /** @type {?} */ args = [domNode, contentInteraction];
            window["_paq"].push(['trackContentInteractionNode', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Tracks a content impression using the specified values.
     *
     * \@memberof MatomoTracker
     * @param {?} contentName
     * @param {?} contentPiece
     * @param {?} contentTarget
     * @return {?}
     */
    trackContentImpression(contentName, contentPiece, contentTarget) {
        try {
            const /** @type {?} */ args = [contentName, contentPiece, contentTarget];
            window["_paq"].push(['trackContentImpression', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
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
    trackContentInteraction(contentInteraction, contentName, contentPiece, contentTarget) {
        try {
            const /** @type {?} */ args = [contentInteraction, contentName, contentPiece, contentTarget];
            window["_paq"].push(['trackContentInteraction', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Logs all found content blocks within a page to the console. This is useful to debug / test content tracking.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    logAllContentBlocksOnPage() {
        try {
            window["_paq"].push(['logAllContentBlocksOnPage']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
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
    enableLinkTracking(enable) {
        try {
            const /** @type {?} */ args = [enable];
            window["_paq"].push(['enableLinkTracking', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
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
    enableHeartBeatTimer(delayInSeconds) {
        try {
            const /** @type {?} */ args = [delayInSeconds];
            window["_paq"].push(['enableHeartBeatTimer', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
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
    enableCrossDomainLinking() {
        try {
            window["_paq"].push(['enableCrossDomainLinking']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
     * a 180 seconds timeout window.
     *
     * \@memberof MatomoTracker
     * @param {?} timeout
     * @return {?}
     */
    setCrossDomainLinkingTimeout(timeout) {
        try {
            const /** @type {?} */ args = [timeout];
            window["_paq"].push(['setCrossDomainLinkingTimeout', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Overrides document.title
     *
     * \@memberof MatomoTracker
     * @param {?} title
     * @return {?}
     */
    setDocumentTitle(title) {
        try {
            const /** @type {?} */ args = [title];
            window["_paq"].push(['setDocumentTitle', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets array of hostnames or domains to be treated as local.
     * For wildcard subdomains, you can use: setDomains('.example.com'); or setDomains('*.example.com');.
     * You can also specify a path along a domain: setDomains('*.example.com/subsite1');
     *
     * \@memberof MatomoTracker
     * @param {?} domains
     * @return {?}
     */
    setDomains(domains) {
        try {
            const /** @type {?} */ args = [domains];
            window["_paq"].push(['setDomains', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Override the page's reported URL.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    setCustomUrl(url) {
        try {
            const /** @type {?} */ args = [url];
            window["_paq"].push(['setCustomUrl', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Overrides the detected Http-Referer.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    setReferrerUrl(url) {
        try {
            const /** @type {?} */ args = [url];
            window["_paq"].push(['setReferrerUrl', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Specifies the website ID.
     * Redundant: can be specified in getTracker() constructor.
     *
     * \@memberof MatomoTracker
     * @param {?} siteId
     * @return {?}
     */
    setSiteId(siteId) {
        try {
            const /** @type {?} */ args = [siteId];
            window["_paq"].push(['setSiteId', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
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
    setApiUrl(url) {
        try {
            const /** @type {?} */ args = [url];
            window["_paq"].push(['setApiUrl', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Specifies the Matomo server URL.
     * Redundant: can be specified in getTracker() constructor.
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    setTrackerUrl(url) {
        try {
            const /** @type {?} */ args = [url];
            window["_paq"].push(['setTrackerUrl', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns the Matomo server URL.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    getPiwikUrl() {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * Returns the current url of the page that is currently being visited.
     * If a custom URL was set before calling this method, the custom URL will be returned.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    getCurrentUrl() {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * Sets classes to be treated as downloads (in addition to piwik_download).
     *
     * \@memberof MatomoTracker
     * @param {?} classes
     * @return {?}
     */
    setDownloadClasses(classes) {
        try {
            const /** @type {?} */ args = [classes];
            window["_paq"].push(['setDownloadClasses', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets list of file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * \@memberof MatomoTracker
     * @param {?} extensions
     * @return {?}
     */
    setDownloadExtensions(extensions) {
        try {
            const /** @type {?} */ args = [extensions];
            window["_paq"].push(['setDownloadClasses', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets additional file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * \@memberof MatomoTracker
     * @param {?} extensions
     * @return {?}
     */
    addDownloadExtensions(extensions) {
        try {
            const /** @type {?} */ args = [extensions];
            window["_paq"].push(['setDownloadClasses', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets file extensions to be removed from the list of download file extensions.
     * Example: 'doc' or['doc', 'xls'].
     *
     * \@memberof MatomoTracker
     * @param {?} extensions
     * @return {?}
     */
    removeDownloadExtensions(extensions) {
        try {
            const /** @type {?} */ args = [extensions];
            window["_paq"].push(['setDownloadClasses', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets classes to be ignored if present in link (in addition to piwik_ignore).
     *
     * \@memberof MatomoTracker
     * @param {?} classes
     * @return {?}
     */
    setIgnoreClasses(classes) {
        try {
            const /** @type {?} */ args = [classes];
            window["_paq"].push(['setDownloadClasses', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Set classes to be treated as outlinks (in addition to piwik_link).
     *
     * \@memberof MatomoTracker
     * @param {?} classes
     * @return {?}
     */
    setLinkClasses(classes) {
        try {
            const /** @type {?} */ args = [classes];
            window["_paq"].push(['setDownloadClasses', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Set delay for link tracking (in milliseconds).
     *
     * \@memberof MatomoTracker
     * @param {?} delay
     * @return {?}
     */
    setLinkTrackingTimer(delay) {
        try {
            const /** @type {?} */ args = [delay];
            window["_paq"].push(['setLinkTrackingTimer', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns delay for link tracking (in milliseconds).
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    getLinkTrackingTimer() {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * Set to true to not record the hash tag (anchor) portion of URLs
     *
     * \@memberof MatomoTracker
     * @param {?} value
     * @return {?}
     */
    discardHashTag(value) {
        try {
            const /** @type {?} */ args = [value];
            window["_paq"].push(['discardHashTag', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
     * the page. You may overwrite the value by specifying a milliseconds value here.
     *
     * \@memberof MatomoTracker
     * @param {?} generationTime
     * @return {?}
     */
    setGenerationTimeMs(generationTime) {
        try {
            const /** @type {?} */ args = [generationTime];
            window["_paq"].push(['setGenerationTimeMs', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Appends a custom string to the end of the HTTP request to piwik.php?
     *
     * \@memberof MatomoTracker
     * @param {?} appendToUrl
     * @return {?}
     */
    appendToTrackingUrl(appendToUrl) {
        try {
            const /** @type {?} */ args = [appendToUrl];
            window["_paq"].push(['appendToTrackingUrl', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Set to true to not track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
     *
     * \@memberof MatomoTracker
     * @param {?} doNotTrack
     * @return {?}
     */
    setDoNotTrack(doNotTrack) {
        try {
            const /** @type {?} */ args = [doNotTrack];
            window["_paq"].push(['setDoNotTrack', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    killFrame() {
        try {
            window["_paq"].push(['killFrame']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Forces the browser load the live URL if the tracked web page is loaded from a local file (e.g., saved to someone's desktop).
     *
     * \@memberof MatomoTracker
     * @param {?} url
     * @return {?}
     */
    redirectFile(url) {
        try {
            const /** @type {?} */ args = [url];
            window["_paq"].push(['redirectFile', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Records how long the page has been viewed if the minimumVisitLength (in seconds) is attained;
     * the heartBeatDelay determines how frequently to update the server
     *
     * \@memberof MatomoTracker
     * @param {?} minimumVisitLength
     * @param {?} heartBeatDelay
     * @return {?}
     */
    setHeartBeatTimer(minimumVisitLength, heartBeatDelay) {
        try {
            const /** @type {?} */ args = [minimumVisitLength, heartBeatDelay];
            window["_paq"].push(['setHeartBeatTimer', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns the 16 characters ID for the visitor
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    getVisitorId() {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * Returns the visitor cookie contents in an array
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    getVisitorInfo() {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * Returns the visitor attribution array (Referer information and / or Campaign name & keyword).
     * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
     * used when a user triggers a goal conversion.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    getAttributionInfo() {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * Returns the attribution campaign name.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    getAttributionCampaignName() {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * Returns the attribution campaign keyword.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    getAttributionCampaignKeyword() {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * Returns the attribution referrer timestamp.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    getAttributionReferrerTimestamp() {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * Returns the attribution referrer URL.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    getAttributionReferrerUrl() {
        return new Promise((resolve, reject) => {
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
    }
    /**
     *  Returns the User ID string if it was set.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    getUserId() {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * Sets a User ID to this user (such as an email address or a username).
     *
     * \@memberof MatomoTracker
     * @param {?} userId
     * @return {?}
     */
    setUserId(userId) {
        try {
            const /** @type {?} */ args = [userId];
            window["_paq"].push(['setUserId', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Resets the User ID which also generates a new Visitor ID.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    resetUserId() {
        try {
            window["_paq"].push(['resetUserId']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
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
    setCustomVariable(index, name, value, scope) {
        try {
            const /** @type {?} */ args = [index, name, value, scope];
            window["_paq"].push(['setCustomVariable', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Deletes a custom variable.
     *
     * \@memberof MatomoTracker
     * @param {?} index
     * @param {?} scope
     * @return {?}
     */
    deleteCustomVariable(index, scope) {
        try {
            const /** @type {?} */ args = [index, scope];
            window["_paq"].push(['deleteCustomVariable', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Retrieves a custom variable.
     *
     * \@memberof MatomoTracker
     * @param {?} index
     * @param {?} scope
     * @return {?}
     */
    getCustomVariable(index, scope) {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * When called then the Custom Variables of scope "visit" will be stored (persisted) in a first party cookie
     * for the duration of the visit. This is useful if you want to call getCustomVariable later in the visit.
     * (by default custom variables are not stored on the visitor's computer.)
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    storeCustomVariablesInCookie() {
        try {
            window["_paq"].push(['storeCustomVariablesInCookie']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * \@memberof MatomoTracker
     * @param {?} customDimensionId
     * @param {?} customDimensionValue
     * @return {?}
     */
    setCustomDimension(customDimensionId, customDimensionValue) {
        try {
            const /** @type {?} */ args = [customDimensionId, customDimensionValue];
            window["_paq"].push(['setCustomDimension', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Deletes a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * \@memberof MatomoTracker
     * @param {?} customDimensionId
     * @return {?}
     */
    deleteCustomDimension(customDimensionId) {
        try {
            const /** @type {?} */ args = [customDimensionId];
            window["_paq"].push(['deleteCustomDimension', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Retrieve a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * \@memberof MatomoTracker
     * @param {?} customDimensionId
     * @return {?}
     */
    getCustomDimension(customDimensionId) {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * Sets campaign name parameter(s).
     *
     * \@memberof MatomoTracker
     * @param {?} name
     * @return {?}
     */
    setCampaignNameKey(name) {
        try {
            const /** @type {?} */ args = [name];
            window["_paq"].push(['setCampaignNameKey', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets campaign keyword parameter(s).
     *
     * \@memberof MatomoTracker
     * @param {?} keyword
     * @return {?}
     */
    setCampaignKeywordKey(keyword) {
        try {
            const /** @type {?} */ args = [keyword];
            window["_paq"].push(['setCampaignKeywordKey', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Set to true to attribute a conversion to the first referrer.
     * By default, conversion is attributed to the most recent referrer.
     *
     * \@memberof MatomoTracker
     * @param {?} conversionToFirstReferrer
     * @return {?}
     */
    setConversionAttributionFirstReferrer(conversionToFirstReferrer) {
        try {
            const /** @type {?} */ args = [conversionToFirstReferrer];
            window["_paq"].push(['setConversionAttributionFirstReferrer', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
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
    setEcommerceView(productSKU, productName, categoryName, price) {
        try {
            const /** @type {?} */ args = [productSKU, productName, categoryName, price];
            window["_paq"].push(['setEcommerceView', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
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
    addEcommerceItem(productSKU, productName, productCategory, price, quantity) {
        try {
            const /** @type {?} */ args = [productSKU];
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
            window["_paq"].push(['addEcommerceItem', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Tracks a shopping cart.Call this javascript function every time a user is adding, updating or deleting a product from the cart.
     *
     * \@memberof MatomoTracker
     * @param {?} grandTotal
     * @return {?}
     */
    trackEcommerceCartUpdate(grandTotal) {
        try {
            const /** @type {?} */ args = [grandTotal];
            window["_paq"].push(['trackEcommerceCartUpdate', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
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
    trackEcommerceOrder(orderId, grandTotal, subTotal, tax, shipping, discount) {
        try {
            const /** @type {?} */ args = [orderId, grandTotal];
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
            window["_paq"].push(['trackEcommerceOrder', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Disables all first party cookies. Existing Matomo cookies for this websites will be deleted on the next page view.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    disableCookies() {
        try {
            window["_paq"].push(['disableCookies']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Deletes the tracking cookies currently set (useful when creating new visits).
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    deleteCookies() {
        try {
            window["_paq"].push(['deleteCookies']);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns whether cookies are enabled and supported by this browser.
     *
     * \@memberof MatomoTracker
     * @return {?}
     */
    hasCookies() {
        return new Promise((resolve, reject) => {
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
    }
    /**
     * Sets the tracking cookie name prefix.
     * Default prefix is 'pk'.
     *
     * \@memberof MatomoTracker
     * @param {?} prefix
     * @return {?}
     */
    setCookieNamePrefix(prefix) {
        try {
            const /** @type {?} */ args = [prefix];
            window["_paq"].push(['setCookieNamePrefix', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the domain of the tracking cookies.
     * Default is the document domain.
     * If your website can be visited at both www.example.com and example.com, you would use: '.example.com' or '*.example.com'.
     *
     * \@memberof MatomoTracker
     * @param {?} domain
     * @return {?}
     */
    setCookieDomain(domain) {
        try {
            const /** @type {?} */ args = [domain];
            window["_paq"].push(['setCookieDomain', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the path of the tracking cookies.
     * Default is '/'.
     *
     * \@memberof MatomoTracker
     * @param {?} path
     * @return {?}
     */
    setCookiePath(path) {
        try {
            const /** @type {?} */ args = [path];
            window["_paq"].push(['setCookiePath', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Set to true to enable the Secure cookie flag on all first party cookies.This should be used when your website is only available
     * under HTTPS so that all tracking cookies are always sent over secure connection.
     *
     * \@memberof MatomoTracker
     * @param {?} secure
     * @return {?}
     */
    setSecureCookie(secure) {
        try {
            const /** @type {?} */ args = [secure];
            window["_paq"].push(['setSecureCookie', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the visitor cookie timeout.
     * Default is 13 months.
     *
     * \@memberof MatomoTracker
     * @param {?} seconds
     * @return {?}
     */
    setVisitorCookieTimeout(seconds) {
        try {
            const /** @type {?} */ args = [seconds];
            window["_paq"].push(['setVisitorCookieTimeout', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the referral cookie timeout.
     * Default is 6 months.
     *
     * \@memberof MatomoTracker
     * @param {?} seconds
     * @return {?}
     */
    setReferralCookieTimeout(seconds) {
        try {
            const /** @type {?} */ args = [seconds];
            window["_paq"].push(['setReferralCookieTimeout', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the session cookie timeout.
     * Default is 30 minutes.
     *
     * \@memberof MatomoTracker
     * @param {?} seconds
     * @return {?}
     */
    setSessionCookieTimeout(seconds) {
        try {
            const /** @type {?} */ args = [seconds];
            window["_paq"].push(['setSessionCookieTimeout', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     *  Adds a click listener to a specific link element. When clicked, Matomo will log the click automatically.
     *
     * \@memberof MatomoTracker
     * @param {?} element
     * @return {?}
     */
    addListener(element) {
        try {
            const /** @type {?} */ args = [element];
            window["_paq"].push(['addListener', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
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
    setRequestMethod(method) {
        try {
            const /** @type {?} */ args = [method];
            window["_paq"].push(['setRequestMethod', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets a function that will process the request content.
     * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
     *
     * \@memberof MatomoTracker
     * @param {?} callback
     * @return {?}
     */
    setCustomRequestProcessing(callback) {
        try {
            const /** @type {?} */ args = [callback];
            window["_paq"].push(['setCustomRequestProcessing', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets request Content-Type header value.
     * Applicable when "POST" request method is used via setRequestMethod.
     *
     * \@memberof MatomoTracker
     * @param {?} contentType
     * @return {?}
     */
    setRequestContentType(contentType) {
        try {
            const /** @type {?} */ args = [contentType];
            window["_paq"].push(['setRequestContentType', ...args]);
        }
        catch (/** @type {?} */ e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
}
MatomoTracker.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MatomoTracker.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MatomoModule {
}
MatomoModule.decorators = [
    { type: NgModule, args: [{
                providers: [MatomoInjector, MatomoTracker]
            },] },
];

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

export { MatomoInjector, MatomoTracker, MatomoModule };
//# sourceMappingURL=ngx-matomo.js.map
