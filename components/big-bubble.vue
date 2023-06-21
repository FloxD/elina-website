<script setup lang="ts">

import ScheduleEntry from "~~/models/ScheduleEntry";
import moment from 'moment';

defineProps({
  entry: { type: Object, required: true },
  day: { type: String, required: true },
  isElinaTimes:{type: Boolean, required:true}
});

function getLocalTimeString(utcDate: string):String{
    const momentUtc= moment.utc(utcDate)
    return momentUtc.local().format("hA")
}
</script>

<template>
  <div class="bubble-big" :class="{'bubble-yes': entry.isGoingToStream,'bubble-no': !entry.isGoingToStream}">
    <div class="day-name">{{day}}</div>
    <div class="sch-entry">
      <div class="streaming-or-not" v-if="entry.isGoingToStream">stream</div>
      <div class="streaming-or-not" v-else>no stream</div>
      <div class="time"  :class="{'is-hidden': isElinaTimes}" v-if="entry.isGoingToStream">{{getLocalTimeString(entry.dateTime)}}</div>
      <div class="time-elina"  :class="{'is-hidden': !isElinaTimes}">{{ entry.timeComment }}</div>
      <div class="comment">{{ entry.comment }}</div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.bubble-yes {
  background-color: #f6b2cf;
  background-image: url("/img/bubble-frame.svg");
  background-repeat: no-repeat;
  mask-image: url(img/bubble.svg);
  mask-repeat: no-repeat;
  -webkit-mask-image: url(/img/bubble.svg);
  -webkit-mask-repeat: no-repeat;
}

.bubble-no {
  background-color: #9fb6c8;
  background-image: url("/img/bubble-frame.svg");
  background-repeat: no-repeat;
  mask-image: url(/img/bubble.svg);
  mask-repeat: no-repeat;
  -webkit-mask-image: url(/img/bubble.svg);
  -webkit-mask-repeat: no-repeat;
}

.bubble-big {
  height: 5em;
  padding-top: 1em;
  padding-right: 0.6em;
}

.day-name {
  color: rgb(145, 86, 86);
  font-size: 0.6em;
  padding-left: 1.4em;
}

.sch-entry {
  margin-top: -0.3em;
  text-align: center;
  color: #457bab;
  font-size: 0.7em;
}

.bubble-big .sch-entry {
  margin-left: -1em;
}

.time {
  line-height: 0.7em;
}

.time-elina {
  line-height: 0.7em;
}

.comment {
  padding-top: 0.4em;
  font-size: 0.6em;
}

/* Breakpoints: */

/* Tablet */
@media (min-width: 760px) {
  .bubble-big {
    height: 6.3em;
  }

  .day-name {
    margin-left: 1.4em;
    font-size: 0.7em;
  }

  .bubble-big .day-name {
    margin-left: 2em;
  }

  .sch-entry {
    margin-left: -0.5em;
    font-size: 0.9em;
  }

  .bubble-big .sch-entry {
    margin-left: -1.4em;
  }

  .bubble-big .comment {
    margin-top: 0.6em;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .bubble-big {
    height: 7.7em;
  }

  .day-name {
    margin-left: 1.4em;
    font-size: 0.7em;
  }

  .bubble-big .day-name {
    margin-left: 3em;
  }

  .sch-entry {
    margin-top: 0em;
    margin-left: -0.5em !important;
    font-size: 0.9em;
  }

  .bubble-big .comment {
    margin-top: 1em;
  }
}
</style>