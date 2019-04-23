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
          id: 'tab1',
          name: 'Tab 1',
          content: '<web-cmponent-1></web-component-1>',
        },
      ],
      activeTabIndex: 0,
    },
    {
      id: 'node2',
      type: 'element',
      flex: 0.5,
      tabs: [
        {
          id: 'tab2',
          name: 'Tab 2',
          content: '<web-cmponent-2></web-component-2>',
        },
      ],
      activeTabIndex: 0,
    },
  ],
};
