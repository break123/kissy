/**
 * Widget
 * @creator     ��<lifesinger@gmail.com>
 * @depends     kissy, yui-base
 */
KISSY.add("widget", function(S) {

    /**
     * Widget Class
     * @constructor
     */
    function Widget(container, config) {
        var self = this;

        // factory or constructor
        if (!(self instanceof Widget)) {
            return new Widget(container, config);
        }

        /**
         * the container of widget
         * @type HTMLElement
         */
        self.container = YAHOO.util.Dom.get(container);

        /**
         * config infomation
         * @type object
         */
        self.config = config || {};
    }

    S.Widget = Widget;
});