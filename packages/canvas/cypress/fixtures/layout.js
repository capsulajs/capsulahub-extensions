module.exports = {
  id: 'root',
  type: 'container',
  flex: 1,
  orientation: 'vertical',
  nodes: [
    {
      id: 'node1',
      type: 'element',
      flex: 0.5,
      tabs: [
        {
          id: 'tab11',
          name: 'Tab 11',
          content: '<web-cmponent-11></web-component-11>',
        },
        {
          id: 'tab12',
          name: 'Tab 12',
          content: '<web-cmponent-12></web-component-12>',
        },
      ],
      activeTabIndex: 0,
    },
    {
      id: 'node21',
      type: 'element',
      flex: 0.5,
      tabs: [
        {
          id: 'tab21',
          name: 'Tab 21',
          content: '<web-cmponent-21></web-component-21>',
        },
        {
          id: 'tab22',
          name: 'Tab 22',
          content: '<web-cmponent-22></web-component-22>',
        },
      ],
      activeTabIndex: 0,
    },
  ],
};
