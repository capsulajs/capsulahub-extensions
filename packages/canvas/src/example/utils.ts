import { Observable, of } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
// import canvas from '../../cypress/fixtures/logs';
import { CanvasProps } from '../types';

export const props$: Observable<CanvasProps> = of({
  layout: {
    id: 'root',
    type: 'container',
    flex: 0.5,
    orientation: 'vertical',
    nodes: [
      {
        id: 'node1',
        type: 'element',
        flex: 1,
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
        flex: 1,
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
  },
  onUpdate: console.log,
});
