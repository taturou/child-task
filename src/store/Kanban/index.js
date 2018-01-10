export default {
  namespaced: true,
  state: {
    num_tasks: 22,
    current_story_index: 0,
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
          {id: 27, title: "🚪ドア を しめる"}
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
          {id: 2, title: "👙パンツ を はく"},
          {id: 3, title: "👕シャツ を きる"},
          {id: 4, title: "👖ズボン を はく"},
          {id: 5, title: "👚うわぎ を きる"},
          {id: 7, title: "🧦くつした を はく"},
          {id: 23, title: "せんたくもの の うらおもて を なおす"},
          {id: 24, title: "せんたくもの を カゴ に いれる"},
          {id: 25, title: "スリープガウン を ハンガー に かける"}
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
          {id: 8, title: "🥪あさごはん を たべる"},
          {id: 9, title: "💊くすり を のむ"},
          {id: 26, title: "🍵おちゃ を のむ"},
          {id: 29, title: "🍽おさら を さげる"},
          {id: 10, title: "👏て を あらう"},
          {id: 11, title: "😉かお を あらう"}
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
          {id: 12, title: "😁じぶん はみがき"},
          {id: 13, title: "😁しあげ はみがき"}
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
          {id: 14, title: "🍚ふりかけ を えらぶ"},
          {id: 15, title: "🍱おべんとう を いれる"}
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
          {id: 16, title: "🚽トイレ に いく"},
          {id: 28, title: "🚪ドア を しめる"}
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
          {id: 17, title: "💇かみ を とく"},
          {id: 18, title: "🧥ジャンパー を きる"},
          {id: 19, title: "🧥えんぷく を きる"},
          {id: 20, title: "👒ぼうし を かぶる"},
          {id: 21, title: "👜えほんかばん を よういする"}
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
          {id: 22, title: "🚌いってらっしゃい！"}
        ],
        workingTasks: [],
        closedTasks: [],
        wontTasks: []
      }
    ]        
  },
  getters: {
    numStories: state => {
      return state.stories.length;
    },
    numTasks: state => {
      return state.num_tasks
    },
    currentStoryIndex: state => {
      return state.current_story_index
    },
    currentStory: state => {
      return state.stories[state.current_story_index]
    },
    Stories: state => {
      return state.stories
    },
    numOpened: state => {
      let total = 0;
      state.stories.forEach((story, index, array) => {total += story.openedTasks.length});
      return total;
    },
    numWorking: state => {
      let total = 0;
      state.stories.forEach((story, index, array) => {total += story.workingTasks.length});
      return total;
    },
    numClosed: state => {
      let total = 0;
      state.stories.forEach((story, index, array) => {total += story.closedTasks.length});
      return total;
    },
    numWont: state => {
      let total = 0;
      state.stories.forEach((story, index, array) => {total += story.wontTasks.length});
      return total;
    }
  },
  mutations: {
    createOpenedTaskToStory(state, {story}) {
      let task = {
        id: state.num_tasks,
        title: "hoge"
      };
      state.num_tasks += 1;
      state.stories[story.id].openedTasks.push(task);
    },
    removeOpenedTask(state, {story, task}) {
      let tasks = state.stories[story.id].openedTasks;
      tasks = tasks.filter((_task) => {return _task.id != task.id});
      state.stories[story.id].openedTasks = tasks;
    },
    setCurrentStoryIndex(state, {index}) {
      state.current_story_index = index
    }
  },
  actions: {
    toNextStory(context) {
      let index = context.state.current_story_index + 1
      if (index >= context.getters.numStories) {
        index = 0;
      }
      context.commit('setCurrentStoryIndex', {index: index})
    }
  }
}