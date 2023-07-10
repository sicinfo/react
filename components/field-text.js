/**
 * 
 */
'use strict';

System.register(['react'], (_export, _context) => {

  /** @type {ReactCreateElement} */ let h;

  const FieldTextComponent = (props= {}) => {
    'type' in props || Reflect.set(props, 'type', 'text');

    return h('input', props)
  }

  return {
    setters: [
      ({ default: react }) => {
        h = react.createElement;
      }
    ],

    execute: () => {
      _export('default', FieldTextComponent);
    }
  }

})