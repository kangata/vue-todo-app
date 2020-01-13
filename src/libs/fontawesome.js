import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAngleUp,
  faCheck,
  faClipboardList,
  faPlus,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faAngleUp,
  faCheck,
  faClipboardList,
  faPlus,
  faTimes
)

Vue.component('fa-icon', FontAwesomeIcon)
