// var __data__ = {
//   0: {
//     "nodes":[
//       {"id":0, "name":"L0.0", "depth":0}
//       // ,
//       // {"id":1, "name":"L1.0", "depth":1},
//       // {"id":2, "name":"L1.1", "depth":1},
//       // {"id":3, "name":"L1.2", "depth":1},
//       // {"id":24, "name":"L2.0", "depth":2},
//       // {"id":25, "name":"L2.1", "depth":2},
//       // {"id":26, "name":"L2.1", "depth":2},
//       // {"id":27, "name":"L2.1", "depth":2},
//       // {"id":28, "name":"L2.1", "depth":2},
//       // {"id":29, "name":"", "depth":3},
//       // {"id":30, "name":"", "depth":3}
//     ],
//     "links":[
//       {"source":0, "target":1, "value":30},
//       // {"source":0, "target":2, "value":20},
//       // {"source":0, "target":3, "value":10},
//       // {"source":2, "target":24, "value":12},
//       // {"source":2, "target":25, "value":4},
//       // {"source":2, "target":26, "value":3},
//       // {"source":2, "target":27, "value":2},
//       // {"source":2, "target":28, "value":1},
//       // {"source":28, "target":29, "value":1},
//       // {"source":28, "target":30, "value":2}
//     ]
//   }
// };

var __testData__ = {
  0: [{id: 1, relSeq: 0, parentId: -1, action:'impression', count: 1000}],
  1: [{id: 2, relSeq: 1,  parentId: 1, action: 'tab click', count: 250}, {id: 3, relSeq: 1, parentId: 1, action: 'video play', count: 250}],
  2: [{id: 4, relSeq: 2,  parentId: 2, action: 'Scroll', count: 200}],
  3: [{id: 5, relSeq: 2, parentId: 3, action: 'clickthrough', count: 100}],
  4: [{id: 6, relSeq: 3,  parentId: 4, action: 'deselect', count: 100}, {id: 7, relSeq: 3,  parentId: 4, action: 'nav', count: 50}],
  5: [{id: 8, relSeq: 3, parentId: 5, action: 'new click', count: 25}, {id: 9, relSeq: 3, parentId: 5, action: 'newnav', count: 25}]
};

// var __data__ = {
//   0:{
//     "nodes":[
//       {"id":0, "name":"L0.0", "depth":0},
//       {"id":1, "name":"L1.0", "depth":1},
//       {"id":2, "name":"L1.1", "depth":1},
//       {"id":3, "name":"L1.2", "depth":1}
//     ],
//     "links":[
//       {"source":0, "target":1, "value":30},
//       {"source":0, "target":2, "value":20},
//       {"source":0, "target":3, "value":10}
//     ]
//   },

//   1:{
//     "nodes":[
//       {"id":0, "name":"L0.0", "depth":0},
//       {"id":1, "name":"L1.0", "depth":1},
//       {"id":2, "name":"L1.1", "depth":1},
//       {"id":3, "name":"L1.2", "depth":1},
//       {"id":4, "name":"L2.0", "depth":2},
//       {"id":5, "name":"L2.1", "depth":2}
//     ],
//     "links":[
//       {"source":0, "target":1, "value":30},
//       {"source":0, "target":2, "value":20},
//       {"source":0, "target":3, "value":10},
//       {"source":1, "target":4, "value":17},
//       {"source":1, "target":5, "value":13}
//     ]
//   },

//   2:{
//     "nodes":[
//       {"id":0, "name":"L0.0", "depth":0},
//       {"id":1, "name":"L1.0", "depth":1},
//       {"id":2, "name":"L1.1", "depth":1},
//       {"id":3, "name":"L1.2", "depth":1},
//       {"id":24, "name":"L2.0", "depth":2},
//       {"id":25, "name":"L2.1", "depth":2},
//       {"id":26, "name":"L2.1", "depth":2},
//       {"id":27, "name":"L2.1", "depth":2},
//       {"id":28, "name":"L2.1", "depth":2}
//     ],
//     "links":[
//       {"source":0, "target":1, "value":30},
//       {"source":0, "target":2, "value":20},
//       {"source":0, "target":3, "value":10},
//       {"source":2, "target":24, "value":12},
//       {"source":2, "target":25, "value":4},
//       {"source":2, "target":26, "value":3},
//       {"source":2, "target":27, "value":2},
//       {"source":2, "target":28, "value":1}
//     ]
//   }  
// };