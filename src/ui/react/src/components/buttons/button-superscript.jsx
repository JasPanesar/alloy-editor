(function () {
    'use strict';

    /**
     * The ButtonSuperscript class provides functionality for applying superscript style to a text selection.
     *
     * @uses ButtonCommand
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonSuperscript
     */
    var ButtonSuperscript = React.createClass({
        mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand],

        // Allows validating props being passed to the component.
        propTypes: {
            /**
             * The editor instance where the component is being used.
             *
             * @property {Object} editor
             */
            editor: React.PropTypes.object.isRequired
        },

        // Lifecycle. Provides static properties to the widget.
        statics: {
            /**
             * The name which will be used as an alias of the button in the configuration.
             *
             * @static
             * @property {string} key
             * @default superscript
             */
            key: 'superscript'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps: function() {
            return {
                command: 'superscript',
                style: {
                    element: 'sup'
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            var cssClass = 'alloy-editor-button ' + this.getStateClasses();

            return (
                <button className={cssClass} data-type="button-superscript" onClick={this.execCommand} tabIndex={this.props.tabIndex}>
                    <span className="alloy-editor-icon-superscript"></span>
                </button>
            );
        }
    });

    AlloyEditor.Buttons[ButtonSuperscript.key] = AlloyEditor.ButtonSuperscript = ButtonSuperscript;
}());