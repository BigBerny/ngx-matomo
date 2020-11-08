/**
 * Service for injecting the Matomo tracker in the application.
 *
 * @export
 */
export declare class MatomoInjector {
    /**
     * Creates an instance of MatomoInjector.
     *
     * @memberof MatomoInjector
     */
    constructor();
    /**
     * Injects the Matomo tracker in the DOM.
     *
     * @param url: URL of the Matomo instance to connect to.
     * @param id : SiteId for this application/site.
     * @param skipTrackingInitialPageView: Optional boolean which, if true, will prevent tracking the initial page as part of init
     * @memberof MatomoInjector
     */
    init(url: string, id: number, skipTrackingInitialPageView?: boolean): void;
}
