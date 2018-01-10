<template>
  <div>
    <p>
      days:
      <pre>
        {{days}}
      </pre>
    </p>
  </div>
</template>

<script>
import { createDays } from '@/store/Task'

export default {
  name: 'Orm',
  computed: {
    days: function() {
      let d = this.$store.getters['task/days/query']().with('stories.tasks.subtasks').get()
      return d
    }
  },
  mounted: function() {
    createDays(this.$store, [
      {
        date: '2018-01-07',
        stories: [
          {
            name: "あさ の おしたく",
            tasks: [
              {
                name: "おきる",
                estimate: '5',
                subtasks: [
                  {name: "めざましどけい を とめる"},
                  {name: "トイレ に いく"},
                  {name: "ドア を しめる"}
                ]
              },
              {
                name: "きがえる",
                estimate: '5',
                subtasks: [
                  {name: "パンツ を はく"},
                  {name: "シャツ を きる"},
                  {name: "ズボン を はく"},
                  {name: "うわぎ を きる"},
                  {name: "くつした を はく"},
                  {name: "せんたくもの の うらおもて を なおす"},
                  {name: "せんたくもの を カゴ に いれる"},
                  {name: "スリープガウン を ハンガー に かける"}
                ]
              },
              {
                name: "あさごはん",
                estimate: '25',
                subtasks: [
                  {name: "あさごはん を たべる"},
                  {name: "くすり を のむ"},
                  {name: "て を あらう"},
                  {name: "かお を あらう"}
                ]
              },
              {
                name: "はみがき",
                estimate: '15',
                subtasks: [
                  {name: "じぶん はみがき"},
                  {name: "しあげ はみがき"}
                ]
              },
              {
                name: "おべんとう",
                estimate: '5',
                subtasks: [
                  {name: "ふりかけ を えらぶ"},
                  {name: "おべんとう を いれる"}
                ]
              },
              {
                name: "トイレ",
                estimate: '5',
                subtasks: [
                  {name: "トイレ に いく"},
                  {name: "ドア を しめる"}
                ]
              },
              {
                name: "おしたく",
                estimate: '5',
                subtasks: [
                  {name: "かみ を とく"},
                  {name: "ジャンパー を きる"},
                  {name: "えんぷく を きる"},
                  {name: "ぼうし を かぶる"},
                  {name: "えほんかばん を よういする"}
                ]
              },
              {
                name: "おでかけ",
                estimate: '15',
                subtasks: [
                  {name: "いってらっしゃい！"}
                ]
              }
            ]
          }
        ]
      }
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
