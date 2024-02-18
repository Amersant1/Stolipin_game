export function getEvents() {
  let excludedEvents = [];
  let res = {};

  for(let date of dates) {
    let event = events[Math.floor(Math.random() * events.length)];
    res[date] = event;
    excludedEvents.push(event.name);
  }

  return res;
}

export const loses = {
  "tsar": ["Ебать", "Нахуй"],
  "liber": ["Ебать1", "Нахуй1"],
  "fashi": ["Ебать2", "Нахуй2"],
  "commun": ["Ебать3", "Нахуй3"],
}

const events = [
  {
    "name": "Разрешить строительство жд дороги Санкт—Петербург — Новгород через кладбище",
    "text": "Разрешить строительство жд дороги Санкт—Петербург — Новгород через кладбище",
    "options": [
      {
        'text':"test for liber",
        "tsar": -1,
        "fashi": -3,
        "liber": 1,
        "commun": 4
      },
      {
        'text':"test for tsar",
        "tsar": 1,
        "fashi": 3,
        "liber": -1,
        "commun": -4
      }
    ]
  },
  {
    "name": "Облегчить осуществление разрыва брака",
    "text": "Облегчить осуществление разрыва брака",
    "options": [
      {
        "text": "да",
        "tsar": -3,
        "fashi": -5,
        "liber": -1,
        "commun": 6
      },
      {
        "text": "нет",
        "tsar": 3,
        "fashi": 5,
        "liber": 1,
        "commun": -6
      }
    ]
  },
  {
    "name": "Дать избирательное право дворянкам",
    "text": "Дать избирательное право дворянкам",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": 1,
        "liber": 2,
        "commun": -1
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": -1,
        "liber": -2,
        "commun": 1
      }
    ]
  },
  {
    "name": "Обложить евреев доп налогом на торговлю",
    "text": "Обложить евреев доп налогом на торговлю",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 5,
        "liber": -1,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -5,
        "liber": 1,
        "commun": 5
      }
    ]
  },
  {
    "name": "Обложить дворян налогом на награды",
    "text": "Обложить дворян налогом на награды",
    "options": [
      {
        "text": "да",
        "tsar": -3,
        "fashi": -5,
        "liber": -3,
        "commun": 7
      },
      {
        "text": "нет",
        "tsar": 3,
        "fashi": 5,
        "liber": 3,
        "commun": -7
      }
    ]
  },
  {
    "name": "Разрешить призыв горцев в войска",
    "text": "Разрешить призыв горцев в войска",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": -1,
        "liber": 1,
        "commun": 1
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": 1,
        "liber": -1,
        "commun": -1
      }
    ]
  },
  {
    "name": "Укоротить рабочий день",
    "text": "Укоротить рабочий день",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -3,
        "liber": 2,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 3,
        "liber": -2,
        "commun": -5
      }
    ]
  },
  {
    "name": "Ввести обязательное страхование рабочих",
    "text": "Ввести обязательное страхование рабочих",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": -4,
        "liber": 2,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": 4,
        "liber": -2,
        "commun": -5
      }
    ]
  },
  {
    "name": "Запретить строительство мечетей",
    "text": "Запретить строительство мечетей",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 5,
        "liber": 1,
        "commun": -4
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -5,
        "liber": -1,
        "commun": 4
      }
    ]
  },
  {
    "name": "Изъять земли карельских финов в пользу переселенцев из Новороссии",
    "text": "Изъять земли карельских финов в пользу переселенцев из Новороссии",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": 5,
        "liber": -2,
        "commun": -4
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": -5,
        "liber": 2,
        "commun": 4
      }
    ]
  },
  {
    "name": "Ввести ограничения на охоту",
    "text": "Ввести ограничения на охоту",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": -1,
        "liber": 0,
        "commun": 2
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": 1,
        "liber": 0,
        "commun": -2
      }
    ]
  },
  {
    "name": "Сделать проезд на трамваях для школьников бесплатным",
    "text": "Сделать проезд на трамваях для школьников бесплатным",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": 1,
        "liber": -1,
        "commun": 1
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": -1,
        "liber": 1,
        "commun": -1
      }
    ]
  },
  {
    "name": "Запретить полиции применять огнестрельное оружие",
    "text": "Запретить полиции применять огнестрельное оружие",
    "options": [
      {
        "text": "да",
        "tsar": -3,
        "fashi": -5,
        "liber": -2,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 3,
        "fashi": 5,
        "liber": 2,
        "commun": -5
      }
    ]
  },
  {
    "name": "Обложить казаков налогами",
    "text": "Обложить казаков налогами",
    "options": [
      {
        "text": "да",
        "tsar": -3,
        "fashi": -5,
        "liber": -1,
        "commun": 6
      },
      {
        "text": "нет",
        "tsar": 3,
        "fashi": 5,
        "liber": 1,
        "commun": -6
      }
    ]
  },
  {
    "name": "Обязать помещиков платить за лечение своих батраков",
    "text": "Обязать помещиков платить за лечение своих батраков",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": -5,
        "liber": 1,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": 5,
        "liber": -1,
        "commun": -5
      }
    ]
  },
  {
    "name": "Обязать промышленников оплачивать лечение своих рабочих",
    "text": "Обязать промышленников оплачивать лечение своих рабочих",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": -5,
        "liber": 1,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": 5,
        "liber": -1,
        "commun": -5
      }
    ]
  },
  {
    "name": "Приравнять генеральскую пенсию к пенсии рядового",
    "text": "Приравнять генеральскую пенсию к пенсии рядового",
    "options": [
      {
        "text": "да",
        "tsar": -3,
        "fashi": -4,
        "liber": -1,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 3,
        "fashi": 4,
        "liber": 1,
        "commun": -5
      }
    ]
  },
  {
    "name": "Поставить памятник Емельяну Пугачеву",
    "text": "Поставить памятник Емельяну Пугачеву",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -3,
        "liber": 0,
        "commun": 4
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 3,
        "liber": 0,
        "commun": -4
      }
    ]
  },
  {
    "name": "Дать Калмыкам ограниченную автономию",
    "text": "Дать Калмыкам ограниченную автономию",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -5,
        "liber": 0,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 5,
        "liber": 0,
        "commun": -5
      }
    ]
  },
  {
    "name": "Дать Татарам ограниченную автономию",
    "text": "Дать Татарам ограниченную автономию",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -5,
        "liber": 0,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 5,
        "liber": 0,
        "commun": -5
      }
    ]
  },
  {
    "name": "Дать Башкирам ограниченную автономию",
    "text": "Дать Башкирам ограниченную автономию",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -5,
        "liber": 0,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 5,
        "liber": 0,
        "commun": -5
      }
    ]
  },
  {
    "name": "Дать Бурятам ограниченную автономию",
    "text": "Дать Бурятам ограниченную автономию",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -5,
        "liber": 0,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 5,
        "liber": 0,
        "commun": -5
      }
    ]
  },
  {
    "name": "Распустить все украинские партии",
    "text": "Распустить все украинские партии",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 5,
        "liber": -1,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -5,
        "liber": 1,
        "commun": 5
      }
    ]
  },
  {
    "name": "Распустить все белорусские партии",
    "text": "Распустить все белорусские партии",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": 4,
        "liber": -2,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": -4,
        "liber": 2,
        "commun": 5
      }
    ]
  },
  {
    "name": "Дать всем князьям неприкосновенность перед законам",
    "text": "Дать всем князьям неприкосновенность перед законам",
    "options": [
      {
        "text": "да",
        "tsar": 3,
        "fashi": 2,
        "liber": -3,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -3,
        "fashi": -2,
        "liber": 3,
        "commun": 5
      }
    ]
  },
  {
    "name": "Обложить не православных доп налогом",
    "text": "Обложить не православных доп налогом",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 5,
        "liber": -3,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -5,
        "liber": 3,
        "commun": 5
      }
    ]
  },
  {
    "name": "Создать украинские школы",
    "text": "Создать украинские школы",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -5,
        "liber": 3,
        "commun": 4
      },
      {
        'text':"test for commun",
        "liber":0,
        "tsar":-10,
        "fashi":-10,
        "commun":15,
        "text": "нет",
        "tsar": 1,
        "fashi": 5,
        "liber": -3,
        "commun": -4
      }
    ]
  },
  {
    "name": "Создать татарские школы",
    "text": "Создать татарские школы",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -5,
        "liber": 3,
        "commun": 4
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 5,
        "liber": -3,
        "commun": -4
      }
    ]
  },
  {
    "name": "Создать бурятские школы",
    "text": "Создать бурятские школы",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -5,
        "liber": 3,
        "commun": 4
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 5,
        "liber": -3,
        "commun": -4
      }
    ]
  },
  {
    "name": "Вывести войска из северной Персии ——",
    "text": "Вывести войска из северной Персии ——",
    "options": [
      {
        "text": "да",
        "tsar": -3,
        "fashi": -4,
        "liber": 0,
        "commun": 2
      },
      {
        "text": "нет",
        "tsar": 3,
        "fashi": 4,
        "liber": 0,
        "commun": -2
      }
    ]
  },
  {
    "name": "Разрешить изымать дворянскую землю в пользу крестьян, если она не обрабатывается",
    "text": "Разрешить изымать дворянскую землю в пользу крестьян, если она не обрабатывается",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": -4,
        "liber": 2,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": 4,
        "liber": -2,
        "commun": -5
      }
    ]
  },
  {
    "name": "Убрать юбилейные награды",
    "text": "Убрать юбилейные награды",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": -1,
        "liber": 1,
        "commun": 2
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": 1,
        "liber": -1,
        "commun": -2
      }
    ]
  },
  {
    "name": "Отменить погоны в полиции",
    "text": "Отменить погоны в полиции",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": -3,
        "liber": 0,
        "commun": 3
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": 3,
        "liber": 0,
        "commun": -3
      }
    ]
  },
  {
    "name": "Разрешить женщинам служить в полиции",
    "text": "Разрешить женщинам служить в полиции",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": -3,
        "liber": 1,
        "commun": 3
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": 3,
        "liber": -1,
        "commun": -3
      }
    ]
  },
  {
    "name": "Начать русификацию Кавказа",
    "text": "Начать русификацию Кавказа",
    "options": [
      {
        "text": "да",
        "tsar": 2,
        "fashi": 5,
        "liber": -2,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -2,
        "fashi": -5,
        "liber": 2,
        "commun": 5
      }
    ]
  },
  {
    "name": "Прекратить русификацию Прибалтики",
    "text": "Прекратить русификацию Прибалтики",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": -5,
        "liber": 1,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": 5,
        "liber": -1,
        "commun": -5
      }
    ]
  },
  {
    "name": "Распустить Польский парламент",
    "text": "Распустить Польский парламент",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 5,
        "liber": -2,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -5,
        "liber": 2,
        "commun": 5
      }
    ]
  },
  {
    "name": "Сократить полит заключеным наказания в два раза",
    "text": "Сократить полит заключеным наказания в два раза",
    "options": [
      {
        "text": "да",
        "tsar": -3,
        "fashi": -5,
        "liber": 0,
        "commun": 4
      },
      {
        "text": "нет",
        "tsar": 3,
        "fashi": 5,
        "liber": 0,
        "commun": -4
      }
    ]
  },
  {
    "name": "Запретить пытки заключенных",
    "text": "Запретить пытки заключенных",
    "options": [
      {
        "text": "да",
        "tsar": -3,
        "fashi": -2,
        "liber": 2,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 3,
        "fashi": 2,
        "liber": -2,
        "commun": -5
      }
    ]
  },
  {
    "name": "Ввести войска в Тувинскую провинцию",
    "text": "Ввести войска в Тувинскую провинцию",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 4,
        "liber": 0,
        "commun": -3
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -4,
        "liber": 0,
        "commun": 3
      }
    ]
  },
  {
    "name": "Ввести налог на наследство",
    "text": "Ввести налог на наследство",
    "options": [
      {
        "text": "да",
        "tsar": -3,
        "fashi": -3,
        "liber": -1,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 3,
        "fashi": 3,
        "liber": 1,
        "commun": -5
      }
    ]
  },
  {
    "name": "Сделать высшее образование для не дворян бесплатным",
    "text": "Сделать высшее образование для не дворян бесплатным",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": -5,
        "liber": -3,
        "commun": 4
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": 5,
        "liber": 3,
        "commun": -4
      }
    ]
  },
  {
    "name": "Отменить титул барон",
    "text": "Отменить титул барон",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -1,
        "liber": 0,
        "commun": 2
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 1,
        "liber": 0,
        "commun": -2
      }
    ]
  },
  {
    "name": "Ввести выборы младших офицеров",
    "text": "Ввести выборы младших офицеров",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -4,
        "liber": -1,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 4,
        "liber": 1,
        "commun": -5
      }
    ]
  },
  {
    "name": "Запретить офицерам бить солдат",
    "text": "Запретить офицерам бить солдат",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": -2,
        "liber": 1,
        "commun": 4
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": 2,
        "liber": -1,
        "commun": -4
      }
    ]
  },
  {
    "name": "Отмена смертной казни в войсках",
    "text": "Отмена смертной казни в войсках",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -3,
        "liber": -3,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 3,
        "liber": 3,
        "commun": -5
      }
    ]
  },
  {
    "name": "Разрешить расстреливать особо опасных преступников если они не православные",
    "text": "Разрешить расстреливать особо опасных преступников если они не православные",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 4,
        "liber": -1,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -4,
        "liber": 1,
        "commun": 5
      }
    ]
  },
  {
    "name": "Поставить памятник Николаю первому в каждом городе",
    "text": "Поставить памятник Николаю первому в каждом городе",
    "options": [
      {
        "text": "да",
        "tsar": 2,
        "fashi": 5,
        "liber": -3,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -2,
        "fashi": -5,
        "liber": 3,
        "commun": 5
      }
    ]
  },
  {
    "name": "Военная интервенция в Монголию",
    "text": "Военная интервенция в Монголию",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 4,
        "liber": -2,
        "commun": -3
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -4,
        "liber": 2,
        "commun": 3
      }
    ]
  },
  {
    "name": "Запретить латвийский язык",
    "text": "Запретить латвийский язык",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 5,
        "liber": -2,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -5,
        "liber": 2,
        "commun": 5
      }
    ]
  },
  {
    "name": "Переименовать Варшаву в Суворовград",
    "text": "Переименовать Варшаву в Суворовград",
    "options": [
      {
        'text':"test for liber",
        "liber":5,
        "tsar":-10,
        "fashi":-10,
        "commun":3,
        "text": "да",
        "tsar": 1,
        "fashi": 5,
        "liber": -3,
        "commun": -4
      },
      {
        'text':"test for tsar",
        "liber":-5,
        "tsar":10,
        "fashi":10,
        "commun":-3,
        "text": "нет",
        "tsar": -1,
        "fashi": -5,
        "liber": 3,
        "commun": 4
      }
    ]
  },
  {
    "name": "Переименовать Царицын в Волгоград",
    "text": "Переименовать Царицын в Волгоград",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": -2,
        "liber": 1,
        "commun": 3
      },
      {
        'text':"test for commun",
        "liber":0,
        "tsar":-10,
        "fashi":-10,
        "commun":15,
        "text": "нет",
        "tsar": 2,
        "fashi": 2,
        "liber": -1,
        "commun": -3
      }
    ]
  },
  {
    "name": "Разрешить самогоноварение",
    "text": "Разрешить самогоноварение",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": -2,
        "liber": 1,
        "commun": 3
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": 2,
        "liber": -1,
        "commun": -3
      }
    ]
  },
  {
    "name": "Изъят великокняжеские дворцы под гимназии",
    "text": "Изъят великокняжеские дворцы под гимназии",
    "options": [
      {
        'text':"test for liber",
        "liber":5,
        "tsar":-10,
        "fashi":-10,
        "commun":3,
        "text": "да",
        "tsar": -4,
        "fashi": -1,
        "liber": 2,
        "commun": 5
      },
      {
        'text':"test for tsar",
        "liber":-5,
        "tsar":10,
        "fashi":10,
        "commun":-3,
        "text": "нет",
        "tsar": 4,
        "fashi": 1,
        "liber": -2,
        "commun": -5
      }
    ]
  },
  {
    "name": "Обложить налогом не православные храмы",
    "text": "Обложить налогом не православные храмы",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": 2,
        "liber": -2,
        "commun": -3
      },
      {
        'text':"test for commun",
        "liber":0,
        "tsar":-10,
        "fashi":-10,
        "commun":15,
        "text": "нет",
        "tsar": 0,
        "fashi": -2,
        "liber": 2,
        "commun": 3
      }
    ]
  },
  {
    "name": "Расстрелять персидских военнопленных",
    "text": "Расстрелять персидских военнопленных",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": 2,
        "liber": -3,
        "commun": -4
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": -2,
        "liber": 3,
        "commun": 4
      }
    ]
  },
  {
    "name": "Отправить казачий корпус в Эфиопию",
    "text": "Отправить казачий корпус в Эфиопию",
    "options": [
      {
        "text": "да",
        "tsar": 2,
        "fashi": 1,
        "liber": -2,
        "commun": -4
      },
      {
        "text": "нет",
        "tsar": -2,
        "fashi": -1,
        "liber": 2,
        "commun": 4
      }
    ]
  },
  {
    "name": "Обязать императорскую семью закупать только отечественный алкоголь",
    "text": "Обязать императорскую семью закупать только отечественный алкоголь",
    "options": [
      {
        "text": "да",
        "tsar": -5,
        "fashi": 3,
        "liber": -1,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 5,
        "fashi": -3,
        "liber": 1,
        "commun": -5
      }
    ]
  },
  {
    "name": "Ввести запрет на призыв в армию единственного сына",
    "text": "Ввести запрет на призыв в армию единственного сына",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": -3,
        "liber": 2,
        "commun": 3
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": 3,
        "liber": -2,
        "commun": -3
      }
    ]
  },
  {
    "name": "Изъять у офицеров огнестрельное оружие",
    "text": "Изъять у офицеров огнестрельное оружие",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": -4,
        "liber": -1,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": 4,
        "liber": 1,
        "commun": -5
      }
    ]
  },
  {
    "name": "Отдать царские ложы в театрах детдомам",
    "text": "Отдать царские ложы в театрах детдомам",
    "options": [
      {
        "text": "да",
        "tsar": -3,
        "fashi": -5,
        "liber": 1,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 3,
        "fashi": 5,
        "liber": -1,
        "commun": -5
      }
    ]
  },
  {
    "name": "Переименовать Вильно в Багратионовск",
    "text": "Переименовать Вильно в Багратионовск",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": 2,
        "liber": 1,
        "commun": -3
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": -2,
        "liber": -1,
        "commun": 3
      }
    ]
  },
  {
    "name": "Переименовать Ревель в Шереметьево",
    "text": "Переименовать Ревель в Шереметьево",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": 2,
        "liber": 1,
        "commun": -3
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": -2,
        "liber": -1,
        "commun": 3
      }
    ]
  },
  {
    "name": "Изменить флаг на черно—желто—белый",
    "text": "Изменить флаг на черно—желто—белый",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 5,
        "liber": -2,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -5,
        "liber": 2,
        "commun": 5
      }
    ]
  },
  {
    "name": "Разрешить сербам единомоментно становится Российскими подданными",
    "text": "Разрешить сербам единомоментно становится Российскими подданными",
    "options": [
      {
        "text": "да",
        "tsar": 3,
        "fashi": 2,
        "liber": -3,
        "commun": -3
      },
      {
        "text": "нет",
        "tsar": -3,
        "fashi": -2,
        "liber": 3,
        "commun": 3
      }
    ]
  },
  {
    "name": "Убрать налоги на сверх малый бизнес",
    "text": "Убрать налоги на сверх малый бизнес",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -2,
        "liber": 1,
        "commun": 3
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 2,
        "liber": -1,
        "commun": -3
      }
    ]
  },
  {
    "name": "Запретить азартные игры",
    "text": "Запретить азартные игры",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": 0,
        "liber": 2,
        "commun": -2
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 0,
        "liber": -2,
        "commun": 2
      }
    ]
  },
  {
    "name": "Дать династии Карагеоргиевичей статус великокняжеской",
    "text": "Дать династии Карагеоргиевичей статус великокняжеской",
    "options": [
      {
        "text": "да",
        "tsar": 4,
        "fashi": -1,
        "liber": -3,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -4,
        "fashi": 1,
        "liber": 3,
        "commun": 5
      }
    ]
  },
  {
    "name": "Гарантировать независимость Черногории",
    "text": "Гарантировать независимость Черногории",
    "options": [
      {
        "text": "да",
        "tsar": 4,
        "fashi": 1,
        "liber": -3,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -4,
        "fashi": -1,
        "liber": 3,
        "commun": 5
      }
    ]
  },
  {
    "name": "Объявить эмбарго Османской Империи ——",
    "text": "Объявить эмбарго Османской Империи ——",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 3,
        "liber": -3,
        "commun": -4
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -3,
        "liber": 3,
        "commun": 4
      }
    ]
  },
  {
    "name": "Ввести черту оседлости для цыган",
    "text": "Ввести черту оседлости для цыган",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": 4,
        "liber": -2,
        "commun": -3
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": -4,
        "liber": 2,
        "commun": 3
      }
    ]
  },
  {
    "name": "Признать независимость Албании",
    "text": "Признать независимость Албании",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": -1,
        "liber": 3,
        "commun": -1
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": 1,
        "liber": -3,
        "commun": 1
      }
    ]
  },
  {
    "name": "Узаконить стачки",
    "text": "Узаконить стачки",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": -5,
        "liber": -1,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": 5,
        "liber": 1,
        "commun": -5
      }
    ]
  },
  {
    "name": "Ввести обязательный отпуск для рабочих",
    "text": "Ввести обязательный отпуск для рабочих",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": -4,
        "liber": 2,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": 4,
        "liber": -2,
        "commun": -5
      }
    ]
  },
  {
    "name": "Запретить движение черносотенцев",
    "text": "Запретить движение черносотенцев",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -5,
        "liber": 2,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 5,
        "liber": -2,
        "commun": -5
      }
    ]
  },
  {
    "name": "Запретить анархические партии",
    "text": "Запретить анархические партии",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 4,
        "liber": -1,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -4,
        "liber": 1,
        "commun": 5
      }
    ]
  },
  {
    "name": "Сжечь Гуляйполе",
    "text": "Сжечь Гуляйполе",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": 3,
        "liber": -3,
        "commun": -4
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": -3,
        "liber": 3,
        "commun": 4
      }
    ]
  },
  {
    "name": "Обложить частные конюшни налогом",
    "text": "Обложить частные конюшни налогом",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -3,
        "liber": -2,
        "commun": 3
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 3,
        "liber": 2,
        "commun": -3
      }
    ]
  },
  {
    "name": "Выделить крестьянам квоту в земствах",
    "text": "Выделить крестьянам квоту в земствах",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": -1,
        "liber": -2,
        "commun": 3
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": 1,
        "liber": 2,
        "commun": -3
      }
    ]
  },
  {
    "name": "Субсидировать профсоюзы",
    "text": "Субсидировать профсоюзы",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -5,
        "liber": 2,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 5,
        "liber": -2,
        "commun": -5
      }
    ]
  },
  {
    "name": "Расстрелять князя Кропоткина",
    "text": "Расстрелять князя Кропоткина",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": 4,
        "liber": -3,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": -4,
        "liber": 3,
        "commun": 5
      }
    ]
  },
  {
    "name": "Национализировать имущество Морозовых",
    "text": "Национализировать имущество Морозовых",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": 4,
        "liber": -3,
        "commun": -4
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": -4,
        "liber": 3,
        "commun": 4
      }
    ]
  },
  {
    "name": "Запретить Норвегии рыбную ловлю у берегов Мурманска",
    "text": "Запретить Норвегии рыбную ловлю у берегов Мурманска",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": 4,
        "liber": 2,
        "commun": -3
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": -4,
        "liber": -2,
        "commun": 3
      }
    ]
  },
  {
    "name": "Заявить о претензиях на Антарктиду",
    "text": "Заявить о претензиях на Антарктиду",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": 2,
        "liber": -2,
        "commun": -1
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": -2,
        "liber": 2,
        "commun": 1
      }
    ]
  },
  {
    "name": "Денонсировать договор о Гавайях",
    "text": "Денонсировать договор о Гавайях",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 3,
        "liber": -2,
        "commun": -3
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -3,
        "liber": 2,
        "commun": 3
      }
    ]
  },
  {
    "name": "Заключить пакт о ненападении с Японией",
    "text": "Заключить пакт о ненападении с Японией",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": -1,
        "liber": 1,
        "commun": 0
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": 1,
        "liber": -1,
        "commun": 0
      }
    ]
  },
  {
    "name": "Субсидировать частные школы",
    "text": "Субсидировать частные школы",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": -2,
        "liber": 2,
        "commun": 1
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": 2,
        "liber": -2,
        "commun": -1
      }
    ]
  },
  {
    "name": "Призывать заключенных в армию",
    "text": "Призывать заключенных в армию",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": 3,
        "liber": -1,
        "commun": -2
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": -3,
        "liber": 1,
        "commun": 2
      }
    ]
  },
  {
    "name": "Обязать дворян получать военное образование",
    "text": "Обязать дворян получать военное образование",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": 3,
        "liber": 1,
        "commun": -3
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": -3,
        "liber": -1,
        "commun": 3
      }
    ]
  },
  {
    "name": "Перенести столицу в Москву",
    "text": "Перенести столицу в Москву",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": 3,
        "liber": -2,
        "commun": -1
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": -3,
        "liber": 2,
        "commun": 1
      }
    ]
  },
  {
    "name": "Ограничить продажу кокаина",
    "text": "Ограничить продажу кокаина",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 3,
        "liber": 2,
        "commun": -3
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -3,
        "liber": -2,
        "commun": 3
      }
    ]
  },
  {
    "name": "Отделить церковь от государства",
    "text": "Отделить церковь от государства",
    "options": [
      {
        "text": "да",
        "tsar": -5,
        "fashi": -5,
        "liber": 1,
        "commun": 6
      },
      {
        "text": "нет",
        "tsar": 5,
        "fashi": 5,
        "liber": -1,
        "commun": -6
      }
    ]
  },
  {
    "name": "Запретить публичные упоминания кровавого воскресенья",
    "text": "Запретить публичные упоминания кровавого воскресенья",
    "options": [
      {
        "text": "да",
        "tsar": 5,
        "fashi": 5,
        "liber": -3,
        "commun": -7
      },
      {
        "text": "нет",
        "tsar": -5,
        "fashi": -5,
        "liber": 3,
        "commun": 7
      }
    ]
  },
  {
    "name": "Создать сибирскую автономию",
    "text": "Создать сибирскую автономию",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -3,
        "liber": 0,
        "commun": 3
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 3,
        "liber": 0,
        "commun": -3
      }
    ]
  },
  {
    "name": "Реформировать русский язык",
    "text": "Реформировать русский язык",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -2,
        "liber": -2,
        "commun": 3
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 2,
        "liber": 2,
        "commun": -3
      }
    ]
  },
  {
    "name": "Отлучить церковь от образования",
    "text": "Отлучить церковь от образования",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": -4,
        "liber": 2,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": 4,
        "liber": -2,
        "commun": -5
      }
    ]
  },
  {
    "name": "Провести аннексию Хивинского Ханства",
    "text": "Провести аннексию Хивинского Ханства",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": 4,
        "liber": -3,
        "commun": -3
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": -4,
        "liber": 3,
        "commun": 3
      }
    ]
  },
  {
    "name": "Провести аннексию Бухарского Ханства",
    "text": "Провести аннексию Бухарского Ханства",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": 4,
        "liber": -3,
        "commun": -3
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": -4,
        "liber": 3,
        "commun": 3
      }
    ]
  },
  {
    "name": "Запретить неправославным избираться в думу",
    "text": "Запретить неправославным избираться в думу",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": 4,
        "liber": -5,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": -4,
        "liber": 5,
        "commun": 5
      }
    ]
  },
  {
    "name": "Запретить неправославным избираться в земства",
    "text": "Запретить неправославным избираться в земства",
    "options": [
      {
        "text": "да",
        "tsar": 0,
        "fashi": 4,
        "liber": -4,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": 0,
        "fashi": -4,
        "liber": 4,
        "commun": 5
      }
    ]
  },
  {
    "name": "Обложить дополнительным налогом не русскоговорящих",
    "text": "Обложить дополнительным налогом не русскоговорящих",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 5,
        "liber": 1,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -5,
        "liber": -1,
        "commun": 5
      }
    ]
  },
  {
    "name": "Разрешить политическим партиям свободную печать газет",
    "text": "Разрешить политическим партиям свободную печать газет",
    "options": [
      {
        "text": "да",
        "tsar": -3,
        "fashi": -1,
        "liber": 4,
        "commun": 5
      },
      {
        "text": "нет",
        "tsar": 3,
        "fashi": 1,
        "liber": -4,
        "commun": -5
      }
    ]
  },
  {
    "name": "Упразднить придворные чины",
    "text": "Упразднить придворные чины",
    "options": [
      {
        "text": "да",
        "tsar": -2,
        "fashi": -1,
        "liber": 2,
        "commun": 4
      },
      {
        "text": "нет",
        "tsar": 2,
        "fashi": 1,
        "liber": -2,
        "commun": -4
      }
    ]
  },
  {
    "name": "Легализировать деятельность украинской рады",
    "text": "Легализировать деятельность украинской рады",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -5,
        "liber": -1,
        "commun": 4
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 5,
        "liber": 1,
        "commun": -4
      }
    ]
  },
  {
    "name": "Уменьшить численность гвардии",
    "text": "Уменьшить численность гвардии",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": -2,
        "liber": 1,
        "commun": 2
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": 2,
        "liber": -1,
        "commun": -2
      }
    ]
  },
  {
    "name": "Ввести смертную казнь за надругательства над православной верой",
    "text": "Ввести смертную казнь за надругательства над православной верой",
    "options": [
      {
        "text": "да",
        "tsar": -1,
        "fashi": 3,
        "liber": -2,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": 1,
        "fashi": -3,
        "liber": 2,
        "commun": 5
      }
    ]
  },
  {
    "name": "Арестовать Льва Толстого",
    "text": "Арестовать Льва Толстого",
    "options": [
      {
        "text": "да",
        "tsar": 1,
        "fashi": 3,
        "liber": -3,
        "commun": -5
      },
      {
        "text": "нет",
        "tsar": -1,
        "fashi": -3,
        "liber": 3,
        "commun": 5
      }
    ]
  }
];

const dates =  [
  "01.11.1909", "25.06.1907", "05.12.1910", "08.06.1906", "17.05.1908", "14.09.1909", "29.06.1911", "27.02.1907", "22.10.1911", "25.11.1909",
  "19.11.1908", "28.08.1911", "13.03.1910", "20.03.1911", "23.05.1911", "12.12.1910", "27.01.1908", "01.05.1910", "02.09.1906", "16.03.1909",
  "13.11.1911", "25.06.1910", "05.03.1911", "26.12.1910", "28.12.1911", "07.01.1912", "02.02.1911", "06.05.1906", "23.11.1907", "01.04.1909",
  "05.10.1910", "05.08.1911", "29.07.1909", "04.08.1910", "29.03.1909", "25.04.1911", "23.05.1908", "22.05.1907", "21.02.1907", "30.08.1909",
  "20.09.1909", "01.06.1906", "07.03.1907", "27.04.1910", "09.08.1908", "20.11.1910", "10.06.1910", "27.05.1910", "10.10.1911", "07.12.1906",
  "25.09.1910", "25.10.1911", "05.04.1908", "01.06.1907", "13.01.1911", "02.03.1909", "05.01.1911", "10.01.1911", "22.08.1911", "09.07.1906",
  "14.06.1906", "28.07.1909", "15.09.1908", "01.02.1909", "06.08.1911", "18.07.1909", "08.02.1910", "02.04.1911", "11.10.1910", "23.01.1911",
  "25.07.1910", "19.02.1911", "02.12.1911", "17.11.1910", "13.02.1910", "14.07.1907", "18.09.1907", "09.05.1908", "15.06.1911", "17.10.1911",
  "22.03.1907", "06.01.1910", "12.09.1911", "15.11.1908", "29.10.1911", "25.03.1907", "09.06.1906", "01.10.1911", "13.08.1911", "06.04.1910",
  "10.07.1911", "19.09.1908", "27.09.1911", "27.06.1906", "17.01.1910", "18.05.1908", "06.10.1908", "29.09.1910", "18.10.1911", "09.10.1909",
  "14.02.1908", "18.12.1907", "23.04.1909", "15.12.1909", "04.07.1910", "20.04.1911", "16.07.1911","27.07.1910", "13.10.1911", "15.05.1911",
  "22.06.1906", "14.01.1911", "12.02.1911", "06.09.1910", "19.05.1907", "20.01.1908", "17.12.1911", "05.02.1910", "20.07.1907", "21.01.1910"
];