<script setup lang="ts">
import smallBubble from "~~/components/small-bubble.vue";
import bigBubble from "~~/components/big-bubble.vue";
import ScheduleEntry from "~~/models/ScheduleEntry";
import switchButton from "~/components/switch-button.vue";
import { ref } from "~/.nuxt/imports";


useHead({
  title: "Elina's stream schedule",
  meta: [{ name: "description", content: "See when Elina is streaming" }],
});

const {
  data: scheduleData,
  pending,
  error,
} = await useFetch<ScheduleEntry[]>(
  "http://schedule.floxd.com/api/schedule/get_this_week_data"
  //"http://localhost:8080/api/schedule/get_this_week_data"
);

var switchToElinaTimes = ref(false);

</script>

<template>
  <div class="title" v-if="error">
    Schedule is not available.<br /><span>{{ error.statusCode }}</span>
  </div>
  <div v-if="pending" class="is-flex is-justify-content-center">
    <img class="mt-6" src="/img/buffering.gif" alt="" />
  </div>
  <div v-if="!error && !pending && scheduleData?.length !== 0">
    <div id="sch-container">
      <div id="monkey"></div>
      <div id="sch-title">
        <span>Elina's Schedule</span>
      </div>
      <div id="bubbles-main">
        <div id="bubbles-big" class="columns is-mobile">
          <div class="column is-four-fifths is-offset-1">
            <div
              class="columns 0is-variable is-1-mobile is-2-tablet is-3-desktop is-mobile"
            >
              <div class="column is-one-third">
                <bigBubble
                  :entry="scheduleData![0]" :day="'mon'" 
                  :is-elina-times="switchToElinaTimes" 
                />
              </div>
              <div class="column is-one-third">
                <bigBubble
                  :entry="scheduleData![1]"
                  :day="'tue'"
                  :is-elina-times="switchToElinaTimes"
                />
              </div>
              <div class="column is-one-third">
                <bigBubble  
                  :entry="scheduleData![2]" 
                  :day="'wed'" 
                  :is-elina-times="switchToElinaTimes"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="bubbles-small" class="columns is-mobile">
          <div class="column is-full">
            <div
              class="columns is-variable is-1-mobile is-2-tablet is-3-desktop is-mobile"
            >
              <div class="image column is-one-quarter">
                <smallBubble
                  :entry="scheduleData![3]"
                  :day="'thu'"
                  :is-elina-times="switchToElinaTimes"
                />
              </div>
              <div class="image column is-one-quarter">
                <smallBubble
                  :entry="scheduleData![4]"
                  :day="'fri'"
                  :is-elina-times="switchToElinaTimes"
                />
              </div>
              <div class="image column is-one-quarter">
                <smallBubble
                  :entry="scheduleData![5]"
                  :day="'sat'"
                  :is-elina-times="switchToElinaTimes"
                />
              </div>
              <div class="image column is-one-quarter">
                <smallBubble
                  :entry="scheduleData![6]"
                  :day="'sun'"
                  :is-elina-times="switchToElinaTimes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="message is-success mt-3 is-size-7">
      <div class="message-header">
        This option allows you to see the times the way elina wrote them.
      </div>
      <div class="message-body">
        <div class="is-flex align-items-center is-align-self-flex-end">
          <strong> Your local time</strong>
          <switchButton @switch="(args) => {switchToElinaTimes=args[0]}" />
          <strong>Elina's local time</strong>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="css" scoped>

body {
  font-family: "Kiwi Days", sans-serif;
  font-size: 10px;
}

#sch-container {
  font-family: Kiwi Days, sans-serif;
  font-size: 14px;
  position: relative;
  margin: 25vh auto 0 auto;
  background-image: url("/img/schedule-tree.svg");
  background-repeat: no-repeat;
  width: 340px;
  height: 281px;
}

#sch-title {
  padding-top: 1.4em;
  text-align: center;
  font-family: Kiwi Raspberry, sans-serif;
  font-size: 2em;
  font-weight: 600;
  color: #ffa7d2;
}

#monkey {
  position: absolute;
  width: 100px;
  height: calc(100px * 0.6566);
  top: -17px;
  left: 170px;
  background-image: url("/img/monkey.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

#bubbles-main {
  display: flex-box;
  justify-content: space-around;
  padding-top: 0.2em;
  padding-left: 0.8em;
}

#bubbles-main .column {
  margin-top: 0.9em;
  padding: 0;
}

/* Breakpoints: */

/* Tablet */
@media (min-width: 760px) {
  #sch-container {
    font-size: 18px;
    position: relative;
    margin: 10vh auto 0 auto;
    width: 600px;
    height: 497px;
  }

  #monkey {
    width: 140px;
    height: calc(140px * 0.6566);
    top: -10px;
    left: 340px;
  }

  #sch-title {
    padding-top: 86px;
    font-size: 2.8em;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  #sch-container {
    font-size: 22px;
    margin: -40px auto 0 auto;
    width: 800px;
    height: 662px;
  }

  #monkey {
    width: 200px;
    height: calc(200px * 0.6566);
    top: -25px;
    left: 420px;
  }

  #sch-title {
    padding-top: 94px;
    font-size: 3em;
  }
}
</style>
