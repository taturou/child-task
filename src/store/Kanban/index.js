export default {
  namespaced: true,
  state: {
    num_stories: {
      1: 8,
      2: 5
    },
    num_tasks: {
      1: 29,
      2: 28
    },
    current_story_index: {
      1: 0,
      2: 0
    },
    stories: [
      {
        id: 0,
        name: "おきる",
        due: {
          hours: 6,
          minutes: 10
        },
        groupId: 1,
        openedTasks: [
          {id: 0, title: "⏰めざましどけい を とめる"},
          {id: 1, title: "🚽トイレ に いく"},
          {id: 2, title: "🚪ドア を しめる"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 1,
        name: "こらしょタイム",
        due: {
          hours: 6,
          minutes: 40
        },
        groupId: 1,
        openedTasks: [
          {id: 3, title: "こくご"},
          {id: 4, title: "さんすう"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 2,
        name: "おきがえ",
        due: {
          hours: 6,
          minutes: 45
        },
        groupId: 1,
        openedTasks: [
          {id: 5, title: "👙パンツ を はく"},
          {id: 6, title: "👕シャツ を きる"},
          {id: 7, title: "👖ズボン を はく"},
          {id: 8, title: "👚うわぎ を きる"},
          {id: 9, title: "🧦くつした を はく"},
          {id: 10, title: "📛なふだ を つける"},
          {id: 11, title: "🤧ポシェット を つける"},
          {id: 12, title: "せんたくもの の うらおもて を なおす"},
          {id: 13, title: "せんたくもの を カゴ に いれる"},
          {id: 14, title: "スリープガウン を ハンガー に かける"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 3,
        name: "あさごはん",
        due: {
          hours: 7,
          minutes: 10
        },
        groupId: 1,
        openedTasks: [
          {id: 15, title: "🥪あさごはん を たべる"},
          {id: 16, title: "💊くすり を のむ"},
          {id: 17, title: "🍵おちゃ を のむ"},
          {id: 18, title: "🍽おさら を さげる"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 4,
        name: "かおあらい",
        due: {
          hours: 7,
          minutes: 15
        },
        groupId: 1,
        openedTasks: [
          {id: 19, title: "👏て を あらう"},
          {id: 20, title: "😉かお を あらう"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 5,
        name: "はみがき",
        due: {
          hours: 7,
          minutes: 20
        },
        groupId: 1,
        openedTasks: [
          {id: 21, title: "😁じぶん はみがき"},
          {id: 22, title: "😁しあげ はみがき"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 6,
        name: "かみのけ",
        due: {
          hours: 7,
          minutes: 25
        },
        groupId: 1,
        openedTasks: [
          {id: 23, title: "👧🏻かみ を むすぶ"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 7,
        name: "トイレ",
        due: {
          hours: 7,
          minutes: 30
        },
        groupId: 1,
        openedTasks: [
          {id: 24, title: "🚽トイレ に いく"},
          {id: 25, title: "🚪ドア を しめる"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 8,
        name: "おでかけ",
        due: {
          hours: 7,
          minutes: 30
        },
        groupId: 1,
        openedTasks: [
          {id: 26, title: "🚶いってらっしゃい！"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 9,
        name: "おふろ",
        due: {
          hours: 18,
          minutes: 30
        },
        groupId: 2,
        openedTasks: [
          {id: 30, title: "せんたくもの の うらおもて を なおす"},
          {id: 31, title: "せんたくもの を カゴ に いれる"},
          {id: 32, title: "🛀おふろ に はいる"},
          {id: 33, title: "👙パンツ を はく"},
          {id: 34, title: "👘パジャマ を きる"},
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 10,
        name: "よるごはん",
        due: {
          hours: 19,
          minutes: 30
        },
        groupId: 2,
        openedTasks: [
          {id: 35, title: "🍖よるごはん を たべる"},
          {id: 36, title: "💊くすり を のむ"},
          {id: 37, title: "🍵おちゃ を のむ"},
          {id: 38, title: "🍽おさら を さげる"},
          {id: 39, title: "👏て を あらう"},
          {id: 40, title: "😉かお を あらう"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 11,
        name: "はみがき",
        due: {
          hours: 19,
          minutes: 45
        },
        groupId: 2,
        openedTasks: [
          {id: 41, title: "😁じぶん はみがき"},
          {id: 42, title: "😁しあげ はみがき"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 12,
        name: "おしたく",
        due: {
          hours: 20,
          minutes: 0
        },
        groupId: 2,
        openedTasks: [
          {id: 43, title: "🥛コップ を ふくろ に いれる"},
          {id: 44, title: "🥛コップ を かばん に いれる"},
          {id: 45, title: "🥢はし、🥄スプーン を かばん に いれる"},
          {id: 46, title: "ナプキン を かばん に いれる"},
          {id: 47, title: "コマ を かばん に いれる"},
          {id: 48, title: "なわとび を かばん に いれる"},
          {id: 49, title: "🤧ティッシュ を ポケット に いれる"},
          {id: 50, title: "🚰ハンカチ を ポケット に いれる"},
          {id: 51, title: "📛バッチ を つける"},
          {id: 52, title: "🎗️リボン を つける"},
          {id: 53, title: "🎒おきがえぶくろ を よういする"},
          {id: 54, title: "📚えほんぶくろ を よういする"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      
      {
        id: 13,
        name: "ねる",
        due: {
          hours: 20,
          minutes: 30
        },
        groupId: 2,
        openedTasks: [
          {id: 55, title: "👘スリープガウン を きる"},
          {id: 56, title: "🛏️おやすみなさい♪"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      }
    ]
    /* 幼稚園
    stories: [
      {
        id: 0,
        name: "おきる",
        due: {
          hours: 6,
          minutes: 40
        },
        groupId: 1,
        openedTasks: [
          {id: 0, title: "⏰めざましどけい を とめる"},
          {id: 1, title: "🚽トイレ に いく"},
          {id: 2, title: "🚪ドア を しめる"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 1,
        name: "きがえる",
        due: {
          hours: 6,
          minutes: 45
        },
        groupId: 1,
        openedTasks: [
          {id: 3, title: "👙パンツ を はく"},
          {id: 4, title: "👕シャツ を きる"},
          {id: 5, title: "👖ズボン を はく"},
          {id: 6, title: "👚うわぎ を きる"},
          {id: 7, title: "🧦くつした を はく"},
          {id: 8, title: "せんたくもの の うらおもて を なおす"},
          {id: 9, title: "せんたくもの を カゴ に いれる"},
          {id: 10, title: "スリープガウン を ハンガー に かける"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 2,
        name: "あさごはん",
        due: {
          hours: 7,
          minutes: 15
        },
        groupId: 1,
        openedTasks: [
          {id: 11, title: "🥪あさごはん を たべる"},
          {id: 12, title: "💊くすり を のむ"},
          {id: 13, title: "🍵おちゃ を のむ"},
          {id: 14, title: "🍽おさら を さげる"},
          {id: 15, title: "👏て を あらう"},
          {id: 16, title: "😉かお を あらう"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 3,
        name: "はみがき",
        due: {
          hours: 7,
          minutes: 25
        },
        groupId: 1,
        openedTasks: [
          {id: 17, title: "😁じぶん はみがき"},
          {id: 18, title: "😁しあげ はみがき"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 4,
        name: "おべんとう",
        due: {
          hours: 7,
          minutes: 30
        },
        groupId: 1,
        openedTasks: [
          {id: 19, title: "🍚ふりかけ を えらぶ"},
          {id: 20, title: "🍱おべんとう を いれる"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 5,
        name: "トイレ",
        due: {
          hours: 7,
          minutes: 35
        },
        groupId: 1,
        openedTasks: [
          {id: 21, title: "🚽トイレ に いく"},
          {id: 22, title: "🚪ドア を しめる"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 6,
        name: "おしたく",
        due: {
          hours: 7,
          minutes: 45
        },
        groupId: 1,
        openedTasks: [
          {id: 23, title: "💇かみ を とく"},
          {id: 24, title: "🧥ジャンパー を きる"},
          {id: 25, title: "🧥えんぷく を きる"},
          {id: 26, title: "👒ぼうし を かぶる"},
          {id: 27, title: "👜えほんかばん を よういする"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 7,
        name: "おでかけ",
        due: {
          hours: 7,
          minutes: 50
        },
        groupId: 1,
        openedTasks: [
          {id: 28, title: "🚌いってらっしゃい！"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 8,
        name: "おふろ",
        due: {
          hours: 18,
          minutes: 30
        },
        groupId: 2,
        openedTasks: [
          {id: 30, title: "せんたくもの の うらおもて を なおす"},
          {id: 31, title: "せんたくもの を カゴ に いれる"},
          {id: 32, title: "🛀おふろ に はいる"},
          {id: 33, title: "👙パンツ を はく"},
          {id: 34, title: "👘パジャマ を きる"},
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 9,
        name: "よるごはん",
        due: {
          hours: 19,
          minutes: 30
        },
        groupId: 2,
        openedTasks: [
          {id: 35, title: "🍖よるごはん を たべる"},
          {id: 36, title: "💊くすり を のむ"},
          {id: 37, title: "🍵おちゃ を のむ"},
          {id: 38, title: "🍽おさら を さげる"},
          {id: 39, title: "👏て を あらう"},
          {id: 40, title: "😉かお を あらう"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 10,
        name: "はみがき",
        due: {
          hours: 19,
          minutes: 45
        },
        groupId: 2,
        openedTasks: [
          {id: 41, title: "😁じぶん はみがき"},
          {id: 42, title: "😁しあげ はみがき"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 11,
        name: "おしたく",
        due: {
          hours: 20,
          minutes: 0
        },
        groupId: 2,
        openedTasks: [
          {id: 43, title: "🥛コップ を ふくろ に いれる"},
          {id: 44, title: "🥛コップ を かばん に いれる"},
          {id: 45, title: "🥢はし、🥄スプーン を かばん に いれる"},
          {id: 46, title: "ナプキン を かばん に いれる"},
          {id: 47, title: "コマ を かばん に いれる"},
          {id: 48, title: "なわとび を かばん に いれる"},
          {id: 49, title: "🤧ティッシュ を ポケット に いれる"},
          {id: 50, title: "🚰ハンカチ を ポケット に いれる"},
          {id: 51, title: "📛バッチ を つける"},
          {id: 52, title: "🎗️リボン を つける"},
          {id: 53, title: "🎒おきがえぶくろ を よういする"},
          {id: 54, title: "📚えほんぶくろ を よういする"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      },
      {
        id: 12,
        name: "ねる",
        due: {
          hours: 20,
          minutes: 30
        },
        groupId: 2,
        openedTasks: [
          {id: 55, title: "👘スリープガウン を きる"},
          {id: 56, title: "🛏️おやすみなさい♪"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      }
    ]        
    */
  },
  getters: {
    numStories: state => (group_id) => {
      return state.num_stories[group_id];
    },
    numTasks: state => (group_id) => {
      return state.num_tasks[group_id];
    },
    currentStoryIndex: state => (group_id) => {
      return state.current_story_index[group_id]
    },
    currentStory: state => (group_id) => {
      let index = state.current_story_index[group_id];
      if (group_id === 2) {
        index += state.num_stories[1];
      }
      return state.stories[index];
    },
    Stories: state => (group_id) => {
      return state.stories.filter((story, index, array) => {
        return story.groupId === group_id
      });
    },
    numOpened: state => (group_id) => {
      let total = 0;
      state.stories.forEach((story, index, array) => {
        if (story.groupId === group_id) {
          total += story.openedTasks.length;
        }
      });
      return total;
    },
    numWorking: state => (group_id) => {
      let total = 0;
      state.stories.forEach((story, index, array) => {
        if (story.groupId === group_id) {
          total += story.workingTasks.length;
        }
      });
      return total;
    },
    numClosed: state => (group_id) => {
      let total = 0;
      state.stories.forEach((story, index, array) => {
        if (story.groupId === group_id) {
          total += story.closedTasks.length;
        }
      });
      return total;
    },
    numWont: state => (group_id) => {
      let total = 0;
      state.stories.forEach((story, index, array) => {
        if (story.groupId === group_id) {
          total += story.wontTasks.length;
        }
      });
      return total;
    }
  },
  mutations: {
    createOpenedTaskToStory(state, {story, group_id}) {
      let task = {
        id: state.num_tasks[group_id],
        title: "hoge"
      };
      state.num_tasks[group_id] += 1;
      state.stories[story.id].openedTasks.push(task);
    },
    removeOpenedTask(state, {story, task}) {
      let tasks = state.stories[story.id].openedTasks;
      tasks = tasks.filter((_task) => {return _task.id != task.id});
      state.stories[story.id].openedTasks = tasks;
    },
    setCurrentStoryIndex(state, {group_id, index}) {
      state.current_story_index[group_id] = index
    }
  },
  actions: {
    toNextStory(context, group_id) {
      let index = context.state.current_story_index[group_id] + 1;
      if (index >= context.getters.numStories(group_id)) {
        index = 0;
      }
      context.commit('setCurrentStoryIndex', {group_id: group_id, index: index})
    }
  }
}