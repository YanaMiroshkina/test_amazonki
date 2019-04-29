import Vue from 'vue'
import Vuex from 'vuex'

import img_notices from './stored-data/img_notices'
import text_notices from './stored-data/text_notices'

import slides_groups from './stored-data/slides_groups'
import slides_gym from './stored-data/slides_gym'

import activities from './stored-data/activities'

import raspisanie_groups from './stored-data/raspisanie_groups'
import raspisanie_gym from './stored-data/raspisanie_gym'


Vue.use(Vuex)


function add_img_path(data, folder) {
  let length = data.length
  for (let i=0; i < length; i++) {
    data[i]['img_path'] = folder + '/' + data[i]['img']
  }
  return data
}

function format_phone_number(club_info) {
  let arr = club_info.phone_number.split('')
  arr.splice(3, 0, '-')
  club_info['phone_number_formatted'] = arr.join('')
  return club_info
}

export default new Vuex.Store({
  state: {
    club_info: {
      city: 'Тверь',
      street_address: 'ул. Тестовая, 1',
      phone_code: '4822',
      phone_number: '123456',
      email: 'fake-email@yandex.ru',
      vk_group: 'vk.com/fake-vk-group'
    },
    menu_active: 'about',

    is_mobile: false,
    img_notices_data: img_notices,
    text_notices,
    slides_groups_data: slides_groups,
    slides_gym_data: slides_gym,
    activities_data: activities,
    raspisanie_groups,
    raspisanie_gym
  },
  mutations: {
    change_is_mobile (state, payload) {
      state.is_mobile = payload
    }
  },
  getters: {
    club_info: state => {
      return format_phone_number(state.club_info)
    },
    img_notices: state => {
      return add_img_path(state.img_notices_data, 'notices')
    },
    slides_groups: state => {
      return add_img_path(state.slides_groups_data, 'slides-groups')
    },
    slides_gym: state => {
      return add_img_path(state.slides_gym_data, 'slides-gym')
    },
    activities: state => {

      let activities = state.activities_data,
      groups = state.raspisanie_groups,
      r1 = [],
      r2 = []

      // функция для сортировки
      // дней недели в расписании каждой тренировки
      let sort_activities_days = (i1, i2) => {
        var sort = {
          'Понедельник': 1,
          'Вторник': 2,
          'Среда': 3,
          'Четверг': 4,
          'Пятница': 5,
          'Суббота': 6
        }
        
        if (i1 == i2) {
          return 0
        }
        return (sort[i1] < sort[i2]) ? -1 : 1
      }

      // получили массив с ключами-тренировками
      // и значением в виде неотсортированного по дням недели расписания
      for (let i in groups) {
        let y = 6;
        while (y--) {
          let training = groups[i][y],
          activity = training['activity'],
          day = training['day'],
          time = training['time'] + ':00',
          corporative = training['corporative']

          if (activity) {
            r1[activity] || (r1[activity] = [])
            r1[activity][day] || (r1[activity][day] = [])
            r1[activity][day].push({time, corporative})
          }
        }
      }

      // получили массив с ключами-тренировками
      // и отсортированным по дням недели расписанием
      for (let activity in r1) {

        let days = Object.keys(r1[activity]).sort(sort_activities_days)

        for (let i in days) {
          let day = days[i]
          r2[activity] || (r2[activity] = [])
          r2[activity]['days'] || (r2[activity]['days'] = [])
          r2[activity]['days'].push({'day': day, 'times': r1[activity][day]})
        }

      }

      // добавили в массив тренировок
      // поле 'days' с отсортированным расписанием
      for (let i in activities) {
        let activity_obj = activities[i],
        activity = activity_obj.title
        activity_obj['days'] = r2[activity]['days']
      }

      return activities;

    },
    raspisanie_groups_mobile: (state) => {

      // мобильное расписание с таблицами по дням недели

      let rasp = state.raspisanie_groups,
      r = []

      for (let i in rasp) {
        let hour = rasp[i]

        for (let y in hour) {
          let training = hour[y]
          r[y] = r[y] || []
          r[y].push(training)
        }
      }

      return r

    },
    raspisanie_gym_mobile: (state) => {

      // мобильное расписание в одной таблице:
      // строки - дни недели,
      // в ячейках - в какое время какой тренер работает

      let rasp = state.raspisanie_gym,
      r = []

      for (let i in rasp) {
        let hour = rasp[i]

        for (let y in hour) {
          let day = hour[y]['day']
          r[y] = r[y] || []

          r[y]['day'] = hour[y]['day']
          r[y]['trainings'] = r[y]['trainings'] || []

          let str = !hour[y]['trainer'] ? '' : 'с ' + hour[y]['time'] + ' до ' + (++hour[y]['time']) + ' ' + hour[y]['trainer']
          r[y]['trainings'].push(str)
        }

      }

      return r

    }
  }
})




















