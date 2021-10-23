(function () {
  let tree = {
    "id": 0,
    "label": "all",
    "children": [
      {
        "id": 208,
        "label": "dashboard_manage",
        "children": [
          {
            "id": 209,
            "label": "dashboards",
            "children": [
              {
                "id": 210,
                "label": "dashboard_panel"
              },
              {
                "id": 211,
                "label": "dashboard_card",
                "children": [
                  {
                    "id": 212,
                    "label": "dashboard_card-edit"
                  },
                  {
                    "id": 213,
                    "label": "dashboard_card-view"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": 300,
        "label": "user_manage",
        "children": [
          {
            "id": 312,
            "label": "user_card-edit"
          },
          {
            "id": 313,
            "label": "user_card-view"
          }
        ]
      }
    ]
  };


  let ids = [312]
  for (let id of ids) {
    let arr = findIndexArray(tree, id, []);
    console.log(arr);
  }

})()


// function findIndexArray(data, id, indexArray) {
//   let arr = indexArray
//   for (let i = 0, len = data.length; i < len; i++) {
//     arr.push({ id: data[i].id, label: data[i].label })
//     if (data[i].id === id) {
//       return arr
//     }
//     let children = data[i].children
//     if (children && children.length) {
//       let result = findIndexArray(children, id, arr)
//       console.log('result123', result);
//       // if (result) return result
//     } else {
//       console.log('----------------');
//       console.log('arrFront', arr);
//       arr.pop()
//       console.log('arrAfter', arr);
//       console.log('***************');
//     }
//   }
//   // return false
// }


function findIndexArray(tree, name, res) {
  let arr = res
  for (let i = 0; i < tree.children.length; i++) {
    arr.push(tree.children[i].id)
    if (tree.children[i].id == name) {
      return arr
    }
    if (tree.children[i].children && tree.children[i].children.length > 0) {
      let a = findIndexArray(tree.children[i], name, arr)
      if (a) {
        return a
      }
    }
    arr.pop()
  }
}