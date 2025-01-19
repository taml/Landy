// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import global styles
import '@/assets/main.css'

import { mount } from 'cypress/vue'
import { createPinia } from 'pinia'

// Font Awesome imports
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { 
  faImage, 
  faFont, 
  faChevronUp, 
  faChevronDown, 
  faChevronLeft, 
  faChevronRight, 
  faClone, 
  faTrashCan, 
  faAlignLeft, 
  faAlignCenter, 
  faAlignRight, 
  faXmark 
} from "@fortawesome/free-solid-svg-icons"

// Add icons to library
library.add(
  faImage, 
  faFont, 
  faChevronUp, 
  faChevronDown, 
  faChevronLeft, 
  faChevronRight, 
  faClone, 
  faTrashCan, 
  faAlignLeft, 
  faAlignCenter, 
  faAlignRight, 
  faXmark
)

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

// Update the mount command to include Pinia
Cypress.Commands.add('mount', (component, options = {}) => {
  // Create a fresh Pinia instance
  const pinia = createPinia()

  // Merge options with defaults
  const componentOptions = {
    ...options,
    global: {
      ...options.global,
      plugins: [...(options.global?.plugins || []), pinia],
      components: {
        'font-awesome-icon': FontAwesomeIcon,
        ...(options.global?.components || {})
      }
    }
  }

  return mount(component, componentOptions)
})

// Example use:
// cy.mount(MyComponent)
