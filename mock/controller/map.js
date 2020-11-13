import { getGeoJson } from '@/utils'

/**  地图数据
 *  @param {string}  adcode  城市code
 *  @returns {Array}
 */
export function getMapChartData(adcode) {
  return new Promise((resolve, reject) => {
    getGeoJson(adcode)
      .then((res) => {
        const data = res.features
        const mapData = data.map((item) => {
          return {
            name: item.properties.name,
            value: parseFloat((Math.random() * 3000).toFixed(2)),
            adcode: item.properties.adcode,
            level: item.properties.level,
          }
        })
        resolve({
          code: 200,
          data: mapData,
        })
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**  地图数据  散点
 *  @param {string}  adcode  城市code
 *  @returns {Array}
 */
export function getPointChartData(adcode) {
  return new Promise((resolve, reject) => {
    getGeoJson(adcode)
      .then((res) => {
        const data = res.features
        const mapData = data.map((item) => {
          return {
            name: item.properties.name,
            value: [
              item.properties.center[0],
              item.properties.center[1],
              parseFloat((Math.random(0.1, 1) * 1000).toFixed(2)),
            ],
            adcode: item.properties.adcode,
            level: item.properties.level,
          }
        })
        resolve({
          code: 200,
          data: mapData,
        })
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**  地图数据 热力图
 *  @param {string}  adcode  城市code
 *  @returns {Array}
 */
export function getHotMapChartData(adcode) {
  const data = [
    {
      name: '地点1',
      value: [114.412021, 30.481201, 1000],
    },
    {
      name: '地点2',
      value: [114.411266, 30.480921, 1000],
    },
    {
      name: '地点3',
      value: [114.411985, 30.481387, 1000],
    },
    {
      name: '地点4',
      value: [114.411159, 30.481917, 1000],
    },
    {
      name: '地点5',
      value: [114.412488, 30.481917, 1000],
    },
    {
      name: '地点6',
      value: [114.413638, 30.482726, 1000],
    },
    {
      name: '地点7',
      value: [114.412344, 30.48341, 1000],
    },
    {
      name: '地点8',
      value: [114.413494, 30.483939, parseInt(Math.random(0.6, 1) * 1000)],
    },
    {
      name: '地点9',
      value: [114.411877, 30.484469, parseInt(Math.random(0.6, 1) * 1000)],
    },
    {
      name: '地点10',
      value: [114.412308, 30.484531, parseInt(Math.random(0.6, 1) * 1000)],
    },
    {
      name: '地点11',
      value: [114.407853, 30.4845, parseInt(Math.random(0.6, 1) * 1000)],
    },
    {
      name: '地点12',
      value: [114.407242, 30.48285, parseInt(Math.random(0.1, 0.5) * 1000)],
    },
    {
      name: '地点13',
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)],
    },
    {
      name: '地点14',
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)],
    },
    {
      name: '地点15',
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)],
    },
    {
      name: '地点16',
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)],
    },
    {
      name: '地点17',
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)],
    },
    {
      name: '地点18',
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)],
    },
    {
      name: '地点19',
      value: [114.412021, 30.481201, parseInt(Math.random(0.1, 0.5) * 1000)],
    },
    {
      name: '地点20',
      value: [114.447306, 30.560407, parseInt(Math.random(0.1, 0.9) * 1000)],
    },
    {
      name: '地点21',
      value: [114.296104, 30.600017, parseInt(Math.random(0.1, 0.9) * 1000)],
    },
    {
      name: '地点22',
      value: [114.29402, 30.597406, parseInt(Math.random(0.1, 0.9) * 1000)],
    },
    {
      name: '地点23',
      value: [114.300487, 30.595106, parseInt(Math.random(0.1, 0.9) * 1000)],
    },
    {
      name: '地点24',
      value: [114.295026, 30.592805, parseInt(Math.random(0.1, 0.9) * 1000)],
    },
    {
      name: '地点25',
      value: [114.291648, 30.597282, 1000],
    },
    {
      name: '地点26',
      value: [114.287408, 30.599147, 1000],
    },
    {
      name: '地点27',
      value: [114.282378, 30.598649, 1000],
    },
    {
      name: '地点28',
      value: [114.286689, 30.600514, 1000],
    },
  ]
  return new Promise((resolve, reject) => {
    resolve({
      code: 200,
      data: data,
    })
  })
}
