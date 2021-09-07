import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      err: null,
    };
  },

  watch: {
    meetupId: {
      handler(newValue) {
        return this.fetchMeetup(newValue);
      },
    },
  },

  mounted() {
    this.fetchMeetup(this.meetupId);
  },

  methods: {
    fetchMeetup(id) {
      this.meetup = null;
      this.err = '';

      fetchMeetupById(id)
        .then((meetups) => {
          this.meetup = meetups;
        })
        .catch((error) => (this.err = error.message));
    },
  },

  template: `

    <div class="page-meetup">
      <!-- meetup view -->
      <meetup-view
        v-if="meetup && !err"
        :meetup="meetup"
      />

      <ui-container
        v-else-if="!meetup && !err"
      >
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="err">
        <ui-alert>{{ err }}</ui-alert>
      </ui-container>
    </div>`,
});
