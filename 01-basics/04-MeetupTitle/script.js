import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const RootComponent = defineComponent({
  data() {
    return {
      meetup: 0,
      meetupTitle: '',
    };
  },
  watch: {
    meetup: {
        handler() {
          this.getMeetups();
        },
      },
  },
  methods: {
    getMeetups() {
      fetchMeetupById(this.meetup).then((meetups) => {
        this.meetupTitle = meetups.title;
      })
    }
  },
});

// Требуется создать Vue приложение
const app = createApp(RootComponent);
const vm = app.mount('#app');
